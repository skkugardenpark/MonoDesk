'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import { EyeIcon, EyeSlashIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function JoinPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 로직 구현
    console.log('Join attempt:', formData);
  };

  const passwordMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== '';
  const requiredAgreements = formData.agreeTerms && formData.agreePrivacy;

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
              JOIN
            </h1>
            <p className="text-xl text-wood-cream/90 max-w-2xl mx-auto">
              MONODESK와 함께 당신만의 특별한 공간을 만들어보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
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
                    Create Account
                  </h2>
                  <p 
                    className="text-wood-charcoal/80"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    새로운 시작을 위한 첫 걸음
                  </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-300 mb-2"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="홍길동"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-300 mb-2"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="hello@monodesk.co.kr"
                    required
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-300 mb-2"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    휴대폰 번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="010-1234-5678"
                    required
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
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
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="8자 이상 입력해주세요"
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

                {/* Confirm Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label 
                    htmlFor="confirmPassword" 
                    className="block text-sm font-medium text-gray-300 mb-2"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    비밀번호 확인
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm ${
                        formData.confirmPassword === '' 
                          ? 'border-white/20' 
                          : passwordMatch 
                            ? 'border-green-300 bg-green-500/10' 
                            : 'border-red-300 bg-red-500/10'
                      }`}
                      placeholder="비밀번호를 다시 입력해주세요"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      {passwordMatch && (
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      )}
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  {formData.confirmPassword !== '' && !passwordMatch && (
                    <p 
                      className="mt-1 text-sm text-red-400"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      비밀번호가 일치하지 않습니다
                    </p>
                  )}
                </motion.div>

                {/* Agreements */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="space-y-4 pt-4 border-t border-gray-700"
                >
                  <h3 
                    className="text-sm font-medium text-gray-300"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    약관 동의
                  </h3>
                  
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-white/5 border-gray-300 rounded focus:ring-blue-600 mt-1"
                    />
                    <span 
                      className="ml-3 text-sm text-gray-300"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      <span className="text-red-400">[필수]</span> 이용약관에 동의합니다
                      <Link href="#" className="text-blue-400 hover:text-blue-300 ml-2">
                        보기
                      </Link>
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-white/5 border-gray-300 rounded focus:ring-blue-600 mt-1"
                    />
                    <span 
                      className="ml-3 text-sm text-gray-300"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      <span className="text-red-400">[필수]</span> 개인정보 처리방침에 동의합니다
                      <Link href="#" className="text-blue-400 hover:text-blue-300 ml-2">
                        보기
                      </Link>
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-white/5 border-gray-300 rounded focus:ring-blue-600 mt-1"
                    />
                    <span 
                      className="ml-3 text-sm text-gray-300"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      <span className="text-gray-500">[선택]</span> 마케팅 정보 수신에 동의합니다
                    </span>
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: requiredAgreements ? 1.02 : 1 }}
                  whileTap={{ scale: requiredAgreements ? 0.98 : 1 }}
                  type="submit"
                  disabled={!requiredAgreements}
                  className={`w-full py-3 font-medium rounded-lg transition-all duration-300 shadow-lg ${
                    requiredAgreements
                      ? 'bg-wood-sage text-wood-cream hover:bg-wood-terracotta hover:shadow-xl'
                      : 'bg-wood-charcoal/30 text-wood-charcoal/60 cursor-not-allowed'
                  }`}
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  회원가입
                </motion.button>

                {/* Login Link */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-center pt-4"
                >
                  <p 
                    className="text-sm text-gray-400"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    이미 계정이 있으신가요?{' '}
                    <Link 
                      href="/auth/login" 
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      로그인
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