'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

// 샘플 제품 데이터
const products = [
  {
    id: 1,
    name: "미니멀 LED 데스크 램프",
    description: "부드러운 조명으로 완성하는 감성 작업 공간",
    price: "89,000",
    category: "DESK LIGHTING",
    image: "💡",
    isLimited: false,
    isNew: true
  },
  {
    id: 2,
    name: "원목 펜홀더 세트",
    description: "따뜻한 우드 소재의 깔끔한 정리 솔루션",
    price: "45,000",
    category: "ORGANIZER",
    image: "📝",
    isLimited: false,
    isNew: false
  },
  {
    id: 3,
    name: "프리미엄 키보드 팜레스트",
    description: "편안한 타이핑을 위한 인체공학적 디자인",
    price: "65,000",
    category: "KEYBOARD ACCS.",
    image: "⌨️",
    isLimited: false,
    isNew: false
  },
  {
    id: 4,
    name: "세라믹 플랜트 포트",
    description: "공간에 생기를 더하는 감성적 화분",
    price: "35,000",
    category: "PLANT OBJECT",
    image: "🌱",
    isLimited: false,
    isNew: true
  },
  {
    id: 5,
    name: "한정판 골드 펜스탠드",
    description: "특별한 당신을 위한 리미티드 에디션",
    price: "120,000",
    category: "LIMITED",
    image: "✨",
    isLimited: true,
    isNew: false
  },
  {
    id: 6,
    name: "커스텀 네임플레이트",
    description: "나만의 개성을 담은 맞춤 제작 상품",
    price: "25,000",
    category: "CUSTOM",
    image: "🏷️",
    isLimited: false,
    isNew: false
  },
  {
    id: 7,
    name: "데스크테리어 스타터 번들",
    description: "처음 시작하는 분들을 위한 완벽한 세트",
    price: "199,000",
    category: "BUNDLE / SET",
    image: "📦",
    isLimited: false,
    isNew: true
  },
  {
    id: 8,
    name: "모던 케이블 정리함",
    description: "복잡한 선들을 깔끔하게 정리하는 솔루션",
    price: "32,000",
    category: "ORGANIZER",
    image: "🔌",
    isLimited: false,
    isNew: false
  },
  {
    id: 9,
    name: "RGB 백라이트 키캡",
    description: "화려한 조명 효과로 완성하는 게이밍 셋업",
    price: "78,000",
    category: "KEYBOARD ACCS.",
    image: "🎮",
    isLimited: false,
    isNew: true
  }
];

const categories = [
  "ALL",
  "DESK LIGHTING", 
  "ORGANIZER",
  "KEYBOARD ACCS.",
  "PLANT OBJECT",
  "LIMITED",
  "CUSTOM",
  "BUNDLE / SET"
];

// ShopContent 컴포넌트 - useSearchParams 사용
function ShopContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // URL 파라미터에서 카테고리 읽어오기
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
      setFilteredProducts(products.filter(product => product.category === categoryParam));
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "ALL") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
    
    // URL 업데이트 (선택사항)
    const url = new URL(window.location.href);
    if (category === "ALL") {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.replaceState({}, '', url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wood-sand via-wood-cream to-wood-sand">
      <Header />
      
      {/* 배경 패턴 */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #7A5230 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #A9B9A3 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <main className="relative z-10">
        {/* 헤더 섹션 */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-wood-oak/95 via-wood-charcoal/90 to-wood-oak/95" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-wood-cream mb-4 font-playfair tracking-wider">
                SHOP
              </h1>
              <p className="text-lg md:text-xl text-wood-cream/90 font-light tracking-widest font-pretendard">
                당신의 공간을 위한 정돈된 감성
              </p>
            </motion.div>
          </div>
        </section>

        {/* 카테고리 탭 섹션 */}
        <section className="py-8 bg-wood-cream/10 backdrop-blur-sm border-b border-wood-sage/20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 md:gap-6"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative px-4 py-2 text-sm md:text-base font-medium tracking-wider transition-all duration-300 font-pretendard ${
                    activeCategory === category
                      ? 'text-wood-charcoal font-bold'
                      : 'text-wood-charcoal/70 hover:text-wood-charcoal'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-wood-sage to-wood-terracotta"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 제품 그리드 */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="bg-wood-cream/15 backdrop-blur-sm rounded-3xl overflow-hidden border border-wood-sage/20 hover:border-wood-sage/40 transition-all duration-500 hover:shadow-2xl hover:shadow-wood-sage/20">
                    {/* 제품 이미지 */}
                    <div className="relative h-64 bg-gradient-to-br from-wood-cream/20 to-wood-oak/10 flex items-center justify-center">
                      {product.isLimited && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                          LIMITED
                        </div>
                      )}
                      {product.isNew && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-pink to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          NEW
                        </div>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-6xl opacity-80"
                      >
                        {product.image}
                      </motion.div>
                    </div>

                    {/* 제품 정보 */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-wood-charcoal mb-2 font-pretendard group-hover:text-wood-sage transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-wood-charcoal/70 text-sm mb-4 leading-relaxed font-pretendard">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-wood-oak font-serif">
                          {product.price}원
                        </span>
                        <span className="text-xs text-wood-charcoal/70 bg-wood-cream/30 px-2 py-1 rounded-full font-pretendard">
                          {product.category}
                        </span>
                      </div>

                      {/* 자세히 보기 버튼 */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn w-full bg-gradient-to-r from-wood-sage/20 to-wood-terracotta/20 border border-wood-sage/30 text-wood-charcoal py-3 rounded-xl font-medium hover:from-wood-sage hover:to-wood-terracotta hover:text-wood-cream hover:border-transparent transition-all duration-300 font-pretendard"
                      >
                                                  <span className="group-hover/btn:text-wood-cream transition-colors duration-300">
                            자세히 보기
                          </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 빈 상태 */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4 opacity-50">🔍</div>
                <h3 className="text-xl text-wood-charcoal/80 mb-2 font-pretendard">
                  해당 카테고리에 상품이 없습니다
                </h3>
                <p className="text-wood-charcoal/60 font-pretendard">
                  다른 카테고리를 선택해보세요
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Loading 컴포넌트
function ShopLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wood-sand via-wood-cream to-wood-sand">
      <Header />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wood-sage mx-auto mb-4"></div>
          <p className="text-wood-charcoal/70 font-pretendard">Loading...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Main ShopPage 컴포넌트 - Suspense로 감싸기
export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopContent />
    </Suspense>
  );
}