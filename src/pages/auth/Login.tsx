import { useState } from 'react';
import loginImage from '@/assets/login.png';
import { ChevronLeft } from 'lucide-react';

export default function SafarniLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo and Back Button */}
      <div className="flex justify-between items-center px-8 py-6">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-3 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div></div>
        <img src="/logo.png" alt="Safarni" className="w-20 h-20" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Login Image with Background */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-8">
          <div className="bg-gray-100 rounded-3xl p-12 w-full max-w-xl flex items-center justify-center">
            <img src={loginImage} alt="login" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-sm">
            {/* Welcome Text */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Again</h1>
              <p className="text-gray-600 text-sm">welcome back! please fill your Data</p>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="kneeDue@untitledui.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setPasswordTouched(true)}
                  placeholder="••••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="button"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 mt-8"
              >
                Log In
              </button>

              {/* Divider */}
              <div className="relative flex items-center my-8">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500 font-medium">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  className="flex items-center justify-center w-16 h-16 border-2 border-blue-400 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-16 h-16 border-2 border-blue-400 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-16 h-16 border-2 border-blue-400 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-10">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button type="button" className="text-blue-600 font-semibold hover:underline">
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}