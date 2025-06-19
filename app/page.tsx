'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectSlides = [
    {
      id: 1,
      image: '/api/placeholder/600/400',
      title: '작은 숲을 책상 위에',
      subtitle: 'Bring Nature to Your Desk',
      description: '자연의 따뜻함을 담은 플랜트 홀더와 오가나이저로 당신만의 작은 정원을 만들어보세요.',
      reverse: false
    },
    {
      id: 2,
      image: '/api/placeholder/600/400',
      title: '당신의 쉼터를 디자인합니다',
      subtitle: 'Design Your Personal Sanctuary',
      description: '하루의 피로를 달래주는 조명과 소품들로 특별한 나만의 공간을 완성하세요.',
      reverse: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projectSlides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-sand via-wood-cream to-wood-sand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23%7A5230' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: 0 }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          >
            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-wood-oak/80 via-wood-charcoal/70 to-wood-oak/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-wood-cream/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.2, delay: 0.5 }}
          className="relative z-10 text-center text-wood-cream px-4 max-w-5xl mx-auto"
        >
          {/* Main Title with Enhanced Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring", 
              duration: 1, 
              delay: 0.8,
              stiffness: 100
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-widest mb-6 relative"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative inline-block"
            >
              MONODESK
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 text-wood-cream/20 blur-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MONODESK
              </motion.div>
            </motion.span>
          </motion.h1>
          
          {/* Subtitle with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-12 tracking-wide relative"
            style={{ 
              fontFamily: 'Pretendard, sans-serif',
              textShadow: '0 2px 10px rgba(0,0,0,0.7)'
            }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1.5, duration: 2 }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              당신의 공간, 당신만의 개성
            </motion.span>
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 40px rgba(253, 246, 236, 0.4)',
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 border-2 border-wood-cream text-wood-cream font-light text-lg tracking-widest hover:bg-wood-cream hover:text-wood-charcoal transition-all duration-500 backdrop-blur-sm overflow-hidden"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-wood-cream/0 via-wood-cream/20 to-wood-cream/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">
                  SHOP NOW
                </span>
                
                {/* Button Border Glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-wood-cream/50 rounded-sm"
                  animate={{ 
                    boxShadow: [
                      '0 0 5px rgba(253, 246, 236, 0.3)',
                      '0 0 20px rgba(253, 246, 236, 0.6)',
                      '0 0 5px rgba(253, 246, 236, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-wood-cream z-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.span 
              className="text-sm tracking-widest mb-3 group-hover:text-wood-sage transition-colors duration-300"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              SCROLL
            </motion.span>
            
            {/* Animated Line */}
            <div className="relative">
              <div className="w-px h-16 bg-wood-cream/40 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 w-px h-8 bg-gradient-to-b from-wood-cream to-transparent"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            
            {/* Scroll Arrow */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2"
            >
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-wood-cream/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced 브랜드 소개 섹션 */}
      <section className="py-32 bg-gradient-to-br from-wood-cream via-wood-sand to-wood-cream backdrop-blur-sm relative z-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23%7A5230' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1, stiffness: 100 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl lg:text-7xl font-light text-wood-charcoal mb-8 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="block"
                  >
                    Small Changes,
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="block text-wood-sage relative"
                  >
                    Big Differences
                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-wood-sage to-wood-terracotta origin-left"
                    />
                  </motion.span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p
                    className="text-xl md:text-2xl text-wood-charcoal leading-relaxed font-medium"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    작은 변화가 공간을 새롭게 만듭니다
                  </p>
                  
                  <p
                    className="text-lg md:text-xl text-wood-charcoal/80 leading-relaxed"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    우리가 만든 소품이 당신의 공간에 특별함을 더합니다.
                    일상 속 작은 순간들을 더욱 의미있게 만들어드리겠습니다.
                  </p>
                </motion.div>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { icon: '🎨', text: '디자인' },
                  { icon: '🌿', text: '자연친화' },
                  { icon: '✨', text: '프리미엄' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-wood-sage/20 hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-wood-charcoal font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <Link href="/shop">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 15px 35px rgba(169, 185, 163, 0.4)',
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-5 bg-gradient-to-r from-wood-sage to-wood-terracotta text-wood-cream font-medium tracking-widest hover:from-wood-terracotta hover:to-wood-sage transition-all duration-500 shadow-xl overflow-hidden"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">
                      BUY NOW
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1, stiffness: 100, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Main Image */}
                <motion.div 
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="MONODESK 브랜드 소개"
                    width={800}
                    height={600}
                    className="w-full h-96 md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-charcoal/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-wood-sage/10 via-transparent to-wood-terracotta/10"></div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-6 right-6 bg-wood-cream/90 backdrop-blur-sm text-wood-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    ✨ Premium Quality
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-wood-sage/30 to-wood-terracotta/30 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center"
                >
                  <span className="text-2xl">🌱</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-wood-cream/80 to-wood-sand/80 rounded-2xl backdrop-blur-sm border border-wood-sage/20 flex items-center justify-center shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-1">💫</div>
                    <div className="text-xs text-wood-charcoal font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Handcraft
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 제품/컨셉 소개 섹션 */}
      <section className="py-24 bg-wood-cream/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-wood-charcoal mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Philosophy
            </h2>
            <p 
              className="text-lg md:text-xl text-wood-charcoal/80 max-w-2xl mx-auto"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              공간에 생명을 불어넣는 특별한 경험
            </p>
          </motion.div>

          <div className="relative">
            {projectSlides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className={`${index === currentSlide ? 'block' : 'hidden'}`}
              >
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${slide.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* 이미지 */}
                  <motion.div
                    initial={{ opacity: 0, x: slide.reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`relative ${slide.reverse ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src={index === 0 ? 
                          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" :
                          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }
                        alt={slide.title}
                        width={800}
                        height={500}
                        className="w-full h-96 md:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-wood-charcoal/30 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* 텍스트 */}
                  <motion.div
                    initial={{ opacity: 0, x: slide.reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`space-y-6 ${slide.reverse ? 'lg:col-start-1' : ''}`}
                  >
                    <div>
                      <h3 
                        className="text-3xl md:text-4xl lg:text-5xl font-light text-wood-charcoal mb-4"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {slide.title}
                      </h3>
                      <p 
                        className="text-xl md:text-2xl font-light text-wood-sage mb-6 italic"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {slide.subtitle}
                      </p>
                      <p 
                        className="text-base md:text-lg text-wood-charcoal/80 leading-relaxed"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-12">
              {projectSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-wood-charcoal' : 'bg-wood-sage/50 hover:bg-wood-sage'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 수치 섹션 */}
      <section className="py-24 bg-gradient-to-br from-wood-oak via-wood-charcoal to-wood-oak text-wood-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Project Experience
            </h2>
            <p 
              className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              숫자로 보는 MONODESK의 신뢰와 경험
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: '320+', label: 'Participated Projects', desc: '참여 프로젝트' },
              { number: '200+', label: 'Clients worked with', desc: '함께한 고객' },
              { number: '98.0+', label: 'Customer Satisfaction', desc: '고객 만족도' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl lg:text-7xl font-light mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.number}
                </motion.div>
                <div className="space-y-2">
                  <p 
                    className="text-lg md:text-xl font-light tracking-wider"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.label}
                  </p>
                  <p 
                    className="text-sm md:text-base opacity-80"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 브랜드 철학 & CTA 섹션 */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-4xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              당신의 공간에<br />작은 자연을 더하세요
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl lg:text-2xl font-light mb-12 opacity-90 leading-relaxed"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              자연의 온기와 감성을 담은 MONODESK만의 특별한 소품들로<br />
              당신만의 이야기를 시작해보세요
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 border-2 border-white text-white font-light text-lg tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  VIEW MORE
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-wood-oak via-wood-charcoal to-wood-oak text-wood-cream py-16 relative">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl font-light mb-4 tracking-widest"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                MONODESK
              </h3>
              <p 
                className="text-sm opacity-80 leading-relaxed"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                당신의 공간에 특별함을 더하는<br />
                감성 데스크테리어 브랜드
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-lg font-light mb-4 tracking-wider"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                CONTACT
              </h4>
              <div className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p>hello@monodesk.co.kr</p>
                <p>02-1234-5678</p>
                <p>평일 9:00 - 18:00</p>
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-lg font-light mb-4 tracking-wider"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                FOLLOW US
              </h4>
              <div className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <a href="https://instagram.com/monodesk_official" className="block hover:opacity-100 transition-opacity">
                  Instagram
                </a>
                <a href="https://pf.kakao.com/_monodesk" className="block hover:opacity-100 transition-opacity">
                  KakaoTalk
                </a>
              </div>
            </motion.div>

            {/* Bank Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-lg font-light mb-4 tracking-wider"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                BANK
              </h4>
              <div className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p>국민은행</p>
                <p>123-456-789012</p>
                <p>예금주: (주)모노데스크</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/20 mt-12 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-xs opacity-60 text-center lg:text-left" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p>사업자등록번호: 123-45-67890 | 대표: 홍길동 | 주소: 서울특별시 강남구 테헤란로 123</p>
              </div>
              <div className="flex space-x-6 text-xs opacity-60" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <a href="#" className="hover:opacity-100 transition-opacity">개인정보처리방침</a>
                <a href="#" className="hover:opacity-100 transition-opacity">이용약관</a>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs opacity-40" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                © 2024 MONODESK. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
