import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import loginImage from "@/assets/login.png";
import { ChevronLeft, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { verifyOtp, forgotPassword, verifyReactivationOtp, resendOtp } from "@/services/post";
import type { VerifyOtpPayload, VerifyReactivationOtpPayload } from "@/services/post";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  otp: yup
    .string()
    .length(4, "Please enter the complete 4-digit code")
    .required("OTP is required"),
});

export default function Otp() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || "";
  const type = searchParams.get("type");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useAuth();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { otp: "" },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Sync with React Hook Form
    const otpString = newOtp.join("");
    setValue("otp", otpString);
    if (otpString.length === 4) trigger("otp");

    if (value !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setError(null);
    try {
      if (!email) {
        const emailErr = "Email not found. Please try registering again.";
        setError(emailErr);
        toast.error(emailErr);
        return;
      }

      // Handle reactivation flow
      if (type === "reactivation") {
        const payload: VerifyOtpPayload = {
          email: email,
          code: data.otp,
        };

        const response = await verifyOtp(payload);
        console.log("Account reactivation response:", response);

        // Backend returns success message: "Account reactivated successfully. You can now login."
        if (response.success) {
          toast.success(response.message || "Your account has been reactivated! Please login to continue.");
          navigate('/login');
        } else {
          throw new Error(response.message || "Verification failed");
        }
        return;
      }

      // Handle regular verification flow
      const payload: VerifyOtpPayload = {
        email: email,
        code: data.otp,
      };

      const response = await verifyOtp(payload);
      console.log("OTP Verified successfully:", response);

      if (type === "reset") {
        toast.success("Code verified! Set your new password.");
        // If password reset flow, go to NewPassword page
        navigate(
          `/newpassword?email=${encodeURIComponent(
            email
          )}&code=${encodeURIComponent(data.otp)}`
        );
      } else {
        // Handle backend response structure
        const userData = response.data?.user || response.user;
        const token = response.data?.token || response.token;

        // Auto-login user after successful verification (registration flow)
        authLogin({
          name: userData.name,
          email: email,
          token: token,
          avatar: userData.profile_image || userData.avatar,
        });
        toast.success(`Welcome to Safarni, ${userData.name}! ✨`);
      }
    } catch (err: any) {
      console.error("OTP verification error:", err);
      const errorMessage =
        err.response?.data?.message ||
        "Invalid or expired code. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0 || !email) return;

    try {
      setIsLoading(true);

      // Use different endpoint based on type
      if (type === "reactivation") {
        await resendOtp({ email, type: "verification" });
      } else {
        await forgotPassword({ email });
      }

      setTimer(60);
      toast.success("A new code has been sent to your email!");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to resend code.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-[#1b3b82] items-center justify-center p-12">
        <div className="max-w-md text-center">
          <img
            src={loginImage}
            alt="OTP Verification"
            className="w-full h-auto mb-8 rounded-2xl shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-white mb-4">Security First</h2>
          <p className="text-blue-100 text-lg">
            We've sent a 4-digit verification code to your email to ensure your
            account remains secure.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Link
            to="/forgot-password"
            className="inline-flex items-center text-gray-600 hover:text-[#1b3b82] mb-8 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            <span>Back to forgot password</span>
          </Link>

          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
              <Mail className="w-8 h-8 text-[#1b3b82]" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {type === "reactivation" ? "Reactivate your account" : "Verify your email"}
            </h1>
            <p className="text-gray-500">
              {type === "reactivation"
                ? "Please enter the 4-digit code sent to reactivate your account at "
                : "Please enter the 4-digit code sent to "}{" "}
              <span className="font-semibold text-gray-900">{email}</span>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <div className="flex justify-between gap-3 mb-6">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-14 h-16 text-center text-2xl font-bold border-2 rounded-xl focus:border-[#1b3b82] focus:ring-0 transition-all bg-gray-50 focus:bg-white ${errors.otp ? "border-red-500" : "border-gray-200"
                      }`}
                  />
                ))}
              </div>

              {/* Error Message */}
              {errors.otp && (
                <div className="text-center mb-4 min-h-5">
                  <p className="text-red-500 text-sm">
                    {errors.otp.message?.toString()}
                  </p>
                </div>
              )}
              {!errors.otp && <div className="mb-4 min-h-5"></div>}

              {/* Resend Link */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600">
                  OTP not received?{" "}
                  {timer > 0 ? (
                    <span className="text-gray-400 font-medium">
                      Resend in {timer}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={isLoading}
                      className="text-blue-600 hover:underline font-medium disabled:opacity-50"
                    >
                      Send again
                    </button>
                  )}
                </p>
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1b3b82] text-white py-3 rounded-lg font-semibold hover:bg-[#152e66] transition-all disabled:opacity-50 shadow-lg shadow-blue-100"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  "Verify Code"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
