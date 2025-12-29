import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff, Check } from 'lucide-react';
import signupImage from '@/assets/signin.png';

export default function SafarniSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Password validation checks
  const hasMinLength = formData.password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (field: string, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field as keyof typeof touched]) {
      validateField(field, value);
    }
  };

  const validateField = (field: string, value: string): void => {
    let error = '';
    
    switch(field) {
      case 'name':
        if (!value) {
          error = 'Name is required';
        }
        break;
      
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      
      case 'password':
        if (!value) {
          error = 'Password is required';
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field: string): void => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field as keyof typeof formData]);
  };

  const handleSubmit = () => {
    setTouched({
      name: true,
      email: true,
      password: true
    });

    const newErrors = {
      name: '',
      email: '',
      password: ''
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!hasMinLength || !hasSpecialChar) {
      newErrors.password = 'Password does not meet requirements';
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully!');
    }, 1500);
  };

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
        {/* Left Side - Sign Up Image with Background */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-8">
          <div className="bg-gray-100 rounded-3xl p-12 w-full max-w-xl flex items-center justify-center">
            <img src={signupImage} alt="signup" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-sm">
            {/* Welcome Text */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Again</h1>
              <p className="text-gray-500 text-sm">welcome back! please Fill Your data</p>
            </div>

            {/* Sign Up Form */}
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="kneeDue"
                    className={`w-full px-4 py-3 pl-10 border ${
                      errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all`}
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="kneeDue@untitledui.com"
                    className={`w-full px-4 py-3 pl-10 border ${
                      errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all`}
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onBlur={() => handleBlur('password')}
                    placeholder="••••••••••"
                    className={`w-full px-4 py-3 pl-10 pr-12 border ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-2 mt-3">
                <div className="flex items-center gap-2">
                  {hasMinLength ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  )}
                  <span className={`text-sm ${hasMinLength ? 'text-green-600' : 'text-gray-500'}`}>
                    Must Be At Least 8 Characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {hasSpecialChar ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  )}
                  <span className={`text-sm ${hasSpecialChar ? 'text-green-600' : 'text-gray-500'}`}>
                    Must Contain One Special Character
                  </span>
                </div>
              </div>

              {/* Sign Up Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  'Sign Up'
                )}
              </button>

              {/* Divider */}
              <div className="relative flex items-center my-6">
                <div className="grow border-t border-gray-300"></div>
                <span className="px-4 text-xs text-gray-500">or</span>
                <div className="grow border-t border-gray-300"></div>
              </div>

              {/* Social Sign Up Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  className="flex items-center justify-center w-20 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-20 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-20 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button type="button" className="text-blue-600 font-semibold hover:underline transition-colors">
                    Sign In
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