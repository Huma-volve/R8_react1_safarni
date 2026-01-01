import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import loginImage from "@/assets/login.png";
import { ChevronLeft, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { verifyOtp } from "@/services/post";
import type { VerifyOtpPayload } from "@/services/post";
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
  const [timer, setTimer] = useState(30);
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo and Back Button */}
      <div className="flex justify-between items-center px-8 py-6">
        <Link
          to="/GetStarted"
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-3 transition-colors"
        >
          <ChevronLeft size={24} />
        </Link>
        <div></div>
        <img src="/logo.png" alt="Safarni" className="w-20 h-20" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Login Image with Background */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-8">
          <div className="bg-gray-100 rounded-3xl p-12 w-full max-w-xl flex items-center justify-center">
            <img
              src={loginImage}
              alt="login"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Otp Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-sm">
            {/* Mail Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
            </div>

            {/* Header Text */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Verify Code
              </h1>
              <p className="text-gray-500 text-sm">
                Please enter the code we just sent to email
              </p>
              <p className="text-gray-900 font-medium text-sm mt-1">
                {email || "your email"}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Timer */}
            <div className="text-center mb-8">
              <span className="text-gray-900 font-semibold">
                {formatTime(timer)}
              </span>
            </div>

            {/* OTP Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* OTP Inputs */}
              <div className="flex justify-center gap-4 mb-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-14 h-14 border-2 ${
                      errors.otp ? "border-red-500" : "border-blue-100"
                    } rounded-lg text-center text-xl font-semibold text-blue-600 focus:border-blue-500 focus:outline-none transition-colors caret-blue-600`}
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
                  oTP not receive ?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    send again
                  </button>
                </p>
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1b3b82] text-white py-3 rounded-lg font-semibold hover:bg-[#152e66] transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  "Verify"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
