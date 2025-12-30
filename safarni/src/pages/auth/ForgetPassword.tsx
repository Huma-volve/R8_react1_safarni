import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import forgetPasswordImage from "@/assets/forgetpassword.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      // alert("Password reset link sent to your email!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo and Back Button */}
      <div className="flex justify-between items-center px-8 py-6">
        <Link
          to="/login"
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-3 transition-colors"
        >
          <ChevronLeft size={24} />
        </Link>
        <div></div>
        <img src="/logo.png" alt="Safarni" className="w-20 h-20" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-8">
          <div className="bg-gray-100 rounded-3xl p-12 w-full max-w-xl flex items-center justify-center">
            <img
              src={forgetPasswordImage}
              alt="password_Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-sm">
            {/* Key Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Forgot Password?
              </h1>
              <p className="text-gray-500 text-sm">
                please enter your email to reset that password
              </p>
            </div>

            {/* Forgot Password Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="kneeDue@untitledui.com"
                    className={`w-full px-4 py-3 pl-10 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all`}
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>

              {/* Reset Password Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}