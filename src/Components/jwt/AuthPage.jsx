import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
    const isLoggedIn = !!localStorage.getItem("token");

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Puma</h1>
                <p className="text-gray-600 mb-6">Sign up or log in to access your account</p>

                <div className="flex flex-col gap-4">
                    {!isLoggedIn && (
                        <>
                            <Link to="/signup">
                                <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-400 transition-all duration-300 shadow-md hover:shadow-lg">
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
                                    Log In
                                </button>
                            </Link>
                        </>
                    )}

                    {isLoggedIn && (
                        <Link to="/logout">
                            <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-lg">
                                Log Out
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
