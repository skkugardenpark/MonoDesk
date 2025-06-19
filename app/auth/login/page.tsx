'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-sand via-wood-cream to-wood-sand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23%7A5230' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-wood-oak/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-wood-cream mb-4 font-playfair">
              LOGIN
            </h1>
            <p className="text-xl text-wood-cream/90 max-w-2xl mx-auto">
              MONODESK에 오신 것을 환영합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-wood-cream/20 backdrop-blur-sm border border-wood-sage/20 rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-8">
                                  <h2 
                    className="text-2xl font-light text-wood-charcoal mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Welcome Back
                  </h2>
                  <p 
                    className="text-wood-charcoal/80"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    당신만의 특별한 공간을 위해
                  </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-wood-charcoal mb-2"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-wood-cream/30 border border-wood-sage/30 rounded-lg text-wood-charcoal placeholder-wood-sage/60 focus:outline-none focus:ring-2 focus:ring-wood-sage focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="hello@monodesk.co.kr"
                    required
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-300 mb-2"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    비밀번호
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    />
                    <span 
                      className="ml-2 text-sm text-gray-300"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      로그인 상태 유지
                    </span>
                  </label>
                  <Link 
                    href="#" 
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    비밀번호 찾기
                  </Link>
                </motion.div>

                {/* Login Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-wood-sage hover:bg-wood-terracotta text-wood-cream font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  로그인
                </motion.button>

                {/* Social Login */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="pt-6 border-t border-gray-700"
                >
                  <p 
                    className="text-center text-sm text-gray-400 mb-4"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    또는 소셜 계정으로 로그인
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors">
                      <span className="text-sm font-medium">카카오</span>
                    </button>
                    <button className="flex items-center justify-center py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
                      <span className="text-sm font-medium">네이버</span>
                    </button>
                  </div>
                </motion.div>

                {/* Sign Up Link */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-center pt-4"
                >
                  <p 
                    className="text-sm text-gray-400"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    아직 계정이 없으신가요?{' '}
                    <Link 
                      href="/auth/join" 
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      회원가입
                    </Link>
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 