'use client';

import { motion } from 'framer-motion';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "김*민",
      rating: 5,
      date: "2024.12.20",
      content: "정말 예상보다 훨씬 예쁘고 품질도 좋아요! 책상이 한결 깔끔해졌어요. 강력 추천드립니다 ✨",
      product: "모던 우드 펜홀더",
      avatar: "👩‍💻"
    },
    {
      id: 2,
      name: "박*준",
      rating: 5,
      date: "2024.12.18",
      content: "조명 색감이 너무 따뜻하고 좋아요. 야근할 때 눈이 덜 피로해져서 만족스럽습니다 💡",
      product: "감성 LED 무드등",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "이*영",
      rating: 5,
      date: "2024.12.15",
      content: "플랜트 스탠드가 정말 세련되어요! 작은 다육이를 올려두니 책상이 훨씬 생동감 있어 보여요 🌱",
      product: "미니멀 플랜트 스탠드",
      avatar: "👩‍🎨"
    },
    {
      id: 4,
      name: "최*호",
      rating: 5,
      date: "2024.12.12",
      content: "키보드 패드 촉감이 너무 좋아요. 타이핑하는 재미가 늘었어요. 가죽 소재라 고급스럽기도 하고요 ⌨️",
      product: "프리미엄 키보드 패드",
      avatar: "👨‍💻"
    },
    {
      id: 5,
      name: "정*수",
      rating: 5,
      date: "2024.12.10",
      content: "배송도 빠르고 포장도 정성스럽게 되어있어서 선물받는 기분이었어요. 품질 대비 가성비도 훌륭합니다 🎁",
      product: "데스크 오거나이저 세트",
      avatar: "👩‍🏫"
    }
  ];

  const stats = {
    totalReviews: 1247,
    averageRating: 4.8,
    ratingDistribution: [
      { stars: 5, count: 892, percentage: 72 },
      { stars: 4, count: 218, percentage: 17 },
      { stars: 3, count: 87, percentage: 7 },
      { stars: 2, count: 31, percentage: 2 },
      { stars: 1, count: 19, percentage: 2 }
    ]
  };

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
            Customer Reviews
          </h2>
          <p className="font-pretendard text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            MONODESK를 사용하는 고객들의 생생한 후기를 확인해보세요
          </p>
        </motion.div>

        {/* 리뷰 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="font-playfair text-6xl font-light text-white mb-2">
                {stats.averageRating}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(stats.averageRating)
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <div className="font-pretendard text-gray-300">
                총 {stats.totalReviews.toLocaleString()}개의 리뷰
              </div>
            </div>
            
            <div className="space-y-3">
              {stats.ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="font-pretendard text-sm text-gray-300">{item.stars}</span>
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="font-pretendard text-sm text-gray-300 w-8 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 리뷰 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
            >
              {/* 리뷰 헤더 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{review.avatar}</div>
                  <div>
                    <div className="font-pretendard text-sm text-white">
                      {review.name}
                    </div>
                    <div className="font-pretendard text-xs text-gray-400">
                      {review.date}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 리뷰 내용 */}
              <p className="font-pretendard text-gray-300 leading-relaxed mb-4">
                {review.content}
              </p>

              {/* 제품 정보 */}
              <div className="pt-4 border-t border-white/10">
                <span className="font-pretendard text-xs text-gray-400">구매 제품</span>
                <div className="font-pretendard text-sm text-white mt-1">
                  {review.product}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-playfair text-xl md:text-2xl font-light text-white/90 mb-6 italic">
            "당신도 MONODESK와 함께 특별한 경험을 시작해보세요"
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white/10 border border-white/20 text-white font-pretendard font-light tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
          >
            더 많은 리뷰 보기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Review; 