'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    koreanText: "하루의 시작과 끝,\n책상은 가장 오래 머무는 당신의 공간입니다.\nMONODESK는 그 공간에 따뜻한 감성과 기능을 더합니다.\n당신만의 분위기로 공간을 다시 설계해보세요.",
    englishText: "From the start to the end of your day,\nyour desk is where you spend the most time.\nMONODESK brings warmth and function to that space.\nRedesign your space with your own unique mood.",
    background: "bg-gradient-to-br from-amber-900 via-orange-800 to-red-900",
    backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    pattern: `
      radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)
    `,
    decorativeEmoji: "🖥️"
  },
  {
    id: 2,
    koreanText: "단순한 정리는 부족하죠.\n우리는 공간에 이야기를 담습니다.\n오브제 하나로 분위기가 바뀌고, 감정이 머무릅니다.\nMONODESK는 취향을 닮은 데스크를 만듭니다.",
    englishText: "Simple organization isn't enough.\nWe craft stories into your space.\nOne object can change the mood and hold emotions.\nMONODESK creates desks that reflect your taste.",
    background: "bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900",
    backgroundImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    pattern: `
      radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
    `,
    decorativeEmoji: "💡"
  },
  {
    id: 3,
    koreanText: "집중을 위한 정돈된 공간,\n쉼을 위한 부드러운 빛과 질감.\n모든 요소는 당신의 하루를 더 편안하게 만들어야 합니다.\nMONODESK는 오감을 위한 데스크 환경을 제안합니다.",
    englishText: "A tidy space for focus,\nSoft light and texture for rest.\nEvery element should ease your day.\nMONODESK curates a desk environment for all your senses.",
    background: "bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900",
    backgroundImage: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    pattern: `
      radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 60% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
    `,
    decorativeEmoji: "🌿"
  }
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 자동 재생
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      
      {/* 슬라이드 컨테이너 */}
      <div
        className="relative min-h-screen"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute inset-0 ${slides[currentSlide].background}`}
            style={{
              backgroundImage: `url(${slides[currentSlide].backgroundImage}), ${slides[currentSlide].pattern}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay"
            }}
          >
            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* 백그라운드 장식 요소들 */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 10, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [30, -30, 30],
                  rotate: [0, -15, 0],
                  opacity: [0.05, 0.2, 0.05]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl"
              />
            </div>

            {/* 메인 콘텐츠 */}
            <div className="relative z-10 min-h-screen flex items-end pb-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  {/* 텍스트 콘텐츠 - 좌측 하단 배치 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-left"
                  >
                    {/* 한글 텍스트 */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-lg md:text-xl lg:text-2xl font-light text-white mb-4 leading-relaxed font-spoqa whitespace-pre-line"
                      style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                      }}
                    >
                      {slides[currentSlide].koreanText}
                    </motion.h1>

                    {/* 영어 텍스트 */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-sm md:text-base lg:text-lg text-white/80 mb-8 leading-relaxed font-cormorant italic whitespace-pre-line"
                      style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                      }}
                    >
                      {slides[currentSlide].englishText}
                    </motion.p>

                    {/* BUY NOW 버튼 */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <Link href="/shop">
                        <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative overflow-hidden bg-transparent border border-white/40 text-white px-8 py-3 text-sm font-light tracking-widest hover:border-white transition-all duration-500 font-cormorant"
                          style={{
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {/* 버튼 배경 호버 효과 */}
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.5 }}
                          />
                          <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-500">
                            BUY NOW
                          </span>
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 좌우 화살표 */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </motion.button>

        {/* 슬라이드 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white shadow-lg'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* 자동재생 상태 표시 */}
        <div className="absolute top-24 right-4 md:right-8 z-20 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
          <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-400' : 'bg-gray-400'} transition-colors duration-300`}></div>
          <span className="text-white text-xs font-medium font-cormorant">
            {isAutoPlay ? 'AUTO' : 'PAUSE'}
          </span>
        </div>
      </div>
    </div>
  );
} 