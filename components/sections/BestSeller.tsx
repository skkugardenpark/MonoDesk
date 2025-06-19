'use client';

import { motion } from 'framer-motion';
import { StarIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const BestSeller = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "모던 우드 펜홀더",
      description: "천연 원목으로 제작된 미니멀 디자인 펜홀더",
      price: "29,000",
      originalPrice: "35,000",
      rating: 4.9,
      reviews: 247,
      image: "🖊️",
      category: "ORGANIZER",
      badge: "BEST",
      colors: ["오크", "월넛", "체리"]
    },
    {
      id: 2,
      name: "감성 LED 무드등",
      description: "따뜻한 빛과 세련된 디자인을 겸비한 데스크 조명",
      price: "45,000",
      originalPrice: "52,000",
      rating: 4.8,
      reviews: 189,
      image: "💡",
      category: "DESK LIGHTING",
      badge: "HOT",
      colors: ["화이트", "블랙", "실버"]
    },
    {
      id: 3,
      name: "미니멀 플랜트 스탠드",
      description: "작은 공간에도 어울리는 세련된 식물 거치대",
      price: "22,000",
      originalPrice: "28,000",
      rating: 4.7,
      reviews: 156,
      image: "🌱",
      category: "PLANT OBJECT",
      badge: "NEW",
      colors: ["내추럴", "화이트", "블랙"]
    },
    {
      id: 4,
      name: "프리미엄 키보드 패드",
      description: "고급 가죽 소재의 키보드 받침대",
      price: "38,000",
      originalPrice: "45,000",
      rating: 4.9,
      reviews: 203,
      image: "⌨️",
      category: "KEYBOARD ACCS.",
      badge: "PREMIUM",
      colors: ["브라운", "블랙", "네이비"]
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BEST': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'HOT': return 'bg-gradient-to-r from-red-400 to-pink-500';  
      case 'NEW': return 'bg-gradient-to-r from-green-400 to-blue-500';
      case 'PREMIUM': return 'bg-gradient-to-r from-purple-400 to-indigo-500';
      default: return 'bg-gradient-to-r from-wood-sage to-wood-terracotta';
    }
  };

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden bg-gradient-to-br from-wood-cream via-wood-sand to-wood-cream">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23%7A5230' fill-opacity='1'%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-wood-sage/10 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative inline-block mb-8"
          >
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-wood-charcoal leading-tight relative"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Best Sellers
              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wood-sage via-wood-terracotta to-wood-sage origin-center"
              />
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-wood-charcoal/80 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            고객들이 가장 사랑하는 MONODESK의 인기 제품들을 만나보세요
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 mt-8"
          >
            {[
              { number: "1,000+", label: "판매량" },
              { number: "4.8", label: "평균 평점" },
              { number: "98%", label: "만족도" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-wood-oak" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-wood-charcoal/60" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                duration: 0.8, 
                delay: index * 0.15,
                stiffness: 100
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-3xl border border-wood-sage/20 p-8 h-full group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Enhanced Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  animate={hoveredProduct === product.id ? {
                    background: [
                      'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)',
                      'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                      'linear-gradient(45deg, transparent 0%, transparent 50%, rgba(255,255,255,0.1) 100%)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute top-4 right-4 px-3 py-1 ${getBadgeColor(product.badge)} text-white text-xs font-bold rounded-full shadow-lg z-10`}
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {product.badge}
                </motion.div>

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 z-10"
                >
                  <HeartIcon className="w-5 h-5" />
                </motion.button>

                {/* Enhanced Product Image */}
                <motion.div 
                  className="text-center mb-8 relative"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-8xl mb-4 filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500">
                    {product.image}
                  </div>
                  
                  {/* Floating Ring Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-wood-sage/30 rounded-full opacity-0 group-hover:opacity-100"
                    animate={hoveredProduct === product.id ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Enhanced Product Info */}
                <div className="text-center mb-6 space-y-4">
                  <motion.h3 
                    className="text-xl font-medium text-wood-charcoal group-hover:text-wood-oak transition-colors duration-300 line-clamp-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <p 
                    className="text-sm text-wood-charcoal/70 line-clamp-2 leading-relaxed group-hover:text-wood-charcoal/90 transition-colors duration-300"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {product.description}
                  </p>

                  {/* Color Options */}
                  <div className="flex justify-center space-x-2">
                    {product.colors.map((color, colorIndex) => (
                      <motion.div
                        key={colorIndex}
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 rounded-full bg-gradient-to-br from-wood-sage to-wood-terracotta border border-wood-sage/30 cursor-pointer"
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Rating */}
                <motion.div 
                  className="flex items-center justify-center mb-6 space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <StarIcon
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 drop-shadow-lg'
                              : 'text-wood-sage/30'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span 
                    className="text-sm text-wood-charcoal/80 font-medium"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {product.rating} ({product.reviews})
                  </span>
                </motion.div>

                {/* Enhanced Price */}
                <motion.div 
                  className="text-center mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <motion.span 
                      className="text-2xl font-bold text-wood-oak"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {product.price}원
                    </motion.span>
                    <span 
                      className="text-sm text-wood-charcoal/50 line-through"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {product.originalPrice}원
                    </span>
                  </div>
                  
                  {/* Discount Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                    className="mt-2 inline-block px-3 py-1 bg-red-500/10 text-red-600 text-xs font-medium rounded-full"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {Math.round((1 - parseInt(product.price.replace(',', '')) / parseInt(product.originalPrice.replace(',', ''))) * 100)}% OFF
                  </motion.div>
                </motion.div>

                {/* Enhanced Action Buttons */}
                <div className="space-y-3">
                  <Link href={`/shop?category=${product.category}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: '0 10px 30px rgba(169, 185, 163, 0.3)',
                        y: -2
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-wood-sage to-wood-terracotta text-wood-cream font-medium text-sm tracking-wider hover:from-wood-terracotta hover:to-wood-sage transition-all duration-500 shadow-lg group/btn overflow-hidden relative"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {/* Button Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <span className="relative z-10 flex items-center justify-center space-x-2 group-hover/btn:tracking-[0.2em] transition-all duration-300">
                        <EyeIcon className="w-4 h-4" />
                        <span>자세히 보기</span>
                      </span>
                    </motion.button>
                  </Link>

                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 8px 25px rgba(122, 82, 48, 0.2)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-wood-cream/50 border border-wood-sage/30 text-wood-charcoal font-medium text-sm tracking-wider hover:bg-wood-cream hover:border-wood-sage transition-all duration-300 backdrop-blur-sm group/cart"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    <span className="flex items-center justify-center space-x-2 group-hover/cart:tracking-[0.15em] transition-all duration-300">
                      <ShoppingBagIcon className="w-4 h-4" />
                      <span>장바구니</span>
                    </span>
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-wood-sage/10 to-wood-terracotta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  animate={hoveredProduct === product.id ? {
                    boxShadow: [
                      '0 0 20px rgba(169, 185, 163, 0.2)',
                      '0 0 40px rgba(216, 140, 111, 0.3)',
                      '0 0 20px rgba(169, 185, 163, 0.2)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced More Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 40px rgba(122, 82, 48, 0.3)',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-16 py-6 bg-gradient-to-r from-wood-oak to-wood-charcoal text-wood-cream font-medium text-lg tracking-[0.2em] hover:from-wood-charcoal hover:to-wood-oak transition-all duration-500 shadow-xl overflow-hidden"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">
                더 많은 상품 보기
              </span>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-wood-cream/50"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-wood-cream/50"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-wood-cream/50"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-wood-cream/50"></div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSeller; 