import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex justify-center items-start py-12">
            <div className="w-full max-w-sm">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-8 text-center">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white">Forgot Password?</h1>
                        <p className="text-sm text-white/70 mt-1">We'll send a reset link to your email</p>
                    </div>

                    <div className="px-8 py-8">
                        {!submitted ? (
                            <>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                required
                                                className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary w-full text-white font-semibold py-3 rounded-xl shadow-lg text-sm"
                                    >
                                        Send Reset Link
                                    </button>
                                </form>

                                <div className="mt-6 text-center">
                                    <p className="text-xs text-slate-500">
                                        Remember your password?{' '}
                                        <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                                            Back to Login
                                        </Link>
                                    </p>
                                </div>
                            </>
                        ) : (
                            /* Success state */
                            <div className="text-center py-4">
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-slate-800 mb-2">Check your email!</h3>
                                <p className="text-sm text-slate-500 mb-6">
                                    We've sent a password reset link to your email address.
                                </p>
                                <Link
                                    to="/login"
                                    className="btn-primary inline-block text-white font-semibold py-2.5 px-6 rounded-xl text-sm"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="mt-4 w-full flex items-center justify-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors py-2"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Marketplace
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;
