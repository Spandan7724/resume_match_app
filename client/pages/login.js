import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [userType, setUserType] = useState('applicant');
    const [showPassword, setShowPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl flex shadow-2xl rounded-2xl overflow-hidden">
                {/* Left Panel - Decorative */}
                <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex-col justify-between">
                    <div className="text-white">
                        <h2 className="text-4xl font-bold mb-6">Welcome to JobPortal</h2>
                        <p className="text-blue-100 text-lg">Connect with the best opportunities and talents in the industry</p>
                    </div>

                    <div className="text-blue-100">
                        <div className="mb-4">✓ Smart job matching</div>
                        <div className="mb-4">✓ Real-time notifications</div>
                        <div>✓ Advanced analytics</div>
                    </div>
                </div>

                {/* Right Panel - Login Form */}
                <Card className="flex-1 bg-white">
                    <CardContent className="p-8">
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <UserCircle size={48} className="text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                            <p className="text-gray-600 mt-2">Access your account</p>
                        </div>

                        {/* User Type Selector */}
                        <div className="mb-8">
                            <div className="flex rounded-xl bg-gray-100 p-1">
                                <button
                                    onClick={() => setUserType('applicant')}
                                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${userType === 'applicant'
                                            ? 'bg-white text-blue-600 shadow-md'
                                            : 'text-gray-600 hover:text-gray-800'
                                        }`}
                                >
                                    Job Applicant
                                </button>
                                <button
                                    onClick={() => setUserType('hr')}
                                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${userType === 'hr'
                                            ? 'bg-white text-blue-600 shadow-md'
                                            : 'text-gray-600 hover:text-gray-800'
                                        }`}
                                >
                                    HR Manager
                                </button>
                            </div>
                        </div>

                        <form className="space-y-6">
                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mr-2" />
                                    Remember me
                                </label>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Forgot password?</a>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium 
                  transform transition-all duration-200 ${isHovered ? 'translate-y-[-2px] shadow-lg' : 'shadow-md'}`}
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Sign Up Link */}
                        <div className="mt-6 text-center text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Sign up</a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;