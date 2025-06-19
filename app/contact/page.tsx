'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/Header';
import { PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 시뮬레이션된 제출 지연
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Contact form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // 폼 초기화
    setFormData({ name: '', email: '', message: '' });
    
    // 3초 후 알림 숨김
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-sand via-wood-cream to-wood-sand text-wood-charcoal relative overflow-hidden">
      <Header />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23%7A5230' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-wood-oak/95 via-wood-charcoal/90 to-wood-oak/95" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-wood-cream mb-4">
              CONTACT
            </h1>
            <p className="font-pretendard text-lg md:text-xl text-wood-cream/90 max-w-2xl mx-auto">
              함께 만들어가는 공간
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left Side - Message */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 
                    className="text-3xl md:text-4xl font-light text-wood-charcoal leading-relaxed"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    문의가 있으신가요?
                  </h2>
                  
                  <div className="space-y-4">
                    <p 
                      className="text-lg md:text-xl text-wood-sage leading-relaxed"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      MONODESK는 여러분의 공간을 함께 고민합니다.
                    </p>
                    <p 
                      className="text-lg md:text-xl text-wood-sage leading-relaxed"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      언제든 편하게 연락주세요.
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6 pt-8 border-t border-wood-sage/30"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-wood-sage rounded-full"></div>
                      <div>
                        <p 
                          className="text-sm text-wood-sage/70 mb-1"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          Email
                        </p>
                        <p 
                          className="text-wood-charcoal"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          hello@monodesk.co.kr
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-wood-sage rounded-full"></div>
                      <div>
                        <p 
                          className="text-sm text-wood-sage/70 mb-1"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          Phone
                        </p>
                        <p 
                          className="text-wood-charcoal"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          02-1234-5678
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-wood-sage rounded-full"></div>
                      <div>
                        <p 
                          className="text-sm text-wood-sage/70 mb-1"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          Office Hours
                        </p>
                        <p 
                          className="text-wood-charcoal"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          평일 9:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="backdrop-blur-sm bg-wood-cream/20 border border-wood-sage/20 rounded-2xl p-8 md:p-10 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-wood-charcoal mb-3"
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
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="홍길동"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-300 mb-3"
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
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="hello@monodesk.co.kr"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-gray-300 mb-3"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        메시지
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                        placeholder="문의하실 내용을 자유롭게 작성해주세요."
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-8 bg-wood-sage hover:bg-wood-terracotta text-wood-cream font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>전송 중...</span>
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5" />
                          <span className="tracking-wider">SEND</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-wood-charcoal/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-wood-cream/90 backdrop-blur-md border border-wood-sage/30 rounded-2xl p-8 mx-4 max-w-md w-full text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-16 h-16 bg-wood-sage rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircleIcon className="w-8 h-8 text-wood-cream" />
              </motion.div>
              
              <h3 
                className="text-xl font-medium text-wood-charcoal mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                메시지가 전송되었습니다
              </h3>
              
              <p 
                className="text-wood-charcoal/80"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                빠른 시일 내에 답변드리겠습니다
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}