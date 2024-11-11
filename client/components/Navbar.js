// components/Navbar.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Briefcase, MessageSquare, Bell, LogOut } from 'lucide-react';

const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Implement your logout functionality here
        // For example, clear tokens, update user state, redirect to login page
        console.log('User logged out');
        router.push('/login');
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link href="/">
                            <a className="flex items-center">
                                <Briefcase className="h-8 w-8 text-blue-600" />
                                <span className="ml-2 text-xl font-semibold">JobPortal</span>
                            </a>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-8">
                        <Link href="/applicant-dashboard">
                            <a className="text-gray-600 hover:text-blue-600 transition-colors">
                                Dashboard
                            </a>
                        </Link>
                        <Link href="/profile">
                            <a className="text-gray-600 hover:text-blue-600 transition-colors">
                                Profile
                            </a>
                        </Link>
                        <Link href="/settings">
                            <a className="text-gray-600 hover:text-blue-600 transition-colors">
                                Settings
                            </a>
                        </Link>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Bell className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <MessageSquare className="h-6 w-6" />
                        </button>
                        <button
                            className="p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleLogout}
                        >
                            <LogOut className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
