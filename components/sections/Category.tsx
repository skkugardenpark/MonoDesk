'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Category = () => {
  const categories = [
    {
      title: "데스크 오거나이저",
      description: "정리정돈의 미학을 더하는 스마트한 수납 솔루션",
      icon: "📚",
      href: "/shop?category=ORGANIZER"
    },
    {
      title: "조명",
      description: "따뜻한 빛으로 공간의 분위기를 완성하는 감성 조명",
      icon: "💡",
      href: "/shop?category=DESK+LIGHTING"
    },
    {
      title: "플랜트 홀더",
      description: "자연의 생명력을 담아내는 세련된 식물 액세서리",
      icon: "🌱",
      href: "/shop?category=PLANT+OBJECT"
    },
    {
      title: "키보드 액세서리",
      description: "타이핑의 즐거움을 높여주는 프리미엄 키보드 용품",
      icon: "⌨️",
      href: "/shop?category=KEYBOARD+ACCS."
    },
    {
      title: "리미티드 에디션",
      description: "특별한 당신을 위한 한정판 프리미엄 컬렉션",
      icon: "⭐",
      href: "/shop?category=LIMITED"
    },
    {
      title: "번들 세트",
      description: "완벽한 조화를 이루는 큐레이션된 제품 세트",
      icon: "🎁",
      href: "/shop?category=BUNDLE+%2F+SET"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Categories
          </h2>
          <p className="font-pretendard text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            당신의 취향과 필요에 맞는 완벽한 데스크테리어 아이템을 찾아보세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-light text-white mb-4 text-center group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="font-pretendard text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {category.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white/10 border border-white/20 text-white font-pretendard font-light tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            >
              전체 상품 보기
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Category; 