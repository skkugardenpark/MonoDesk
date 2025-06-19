'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Instagram = () => {
  const posts = [
    {
      id: 1,
      image: "📱",
      title: "데스크 셋업 영감",
      description: "미니멀한 작업 공간 연출법",
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      image: "✨",
      title: "조명과 분위기",
      description: "따뜻한 무드등으로 만든 감성 공간",
      likes: 189,
      comments: 12
    },
    {
      id: 3,
      image: "🌱",
      title: "그린 인테리어",
      description: "작은 식물로 생기를 더한 책상",
      likes: 298,
      comments: 24
    },
    {
      id: 4,
      image: "🎨",
      title: "컬러 매칭",
      description: "조화로운 색감의 데스크테리어",
      likes: 156,
      comments: 9
    },
    {
      id: 5,
      image: "📚",
      title: "정리의 미학",
      description: "깔끔한 수납으로 완성한 공간",
      likes: 267,
      comments: 15
    },
    {
      id: 6,
      image: "⌨️",
      title: "타이핑의 즐거움",
      description: "키보드 액세서리와 함께하는 작업",
      likes: 178,
      comments: 7
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
            Follow Us on Instagram
          </h2>
          <p className="font-pretendard text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            @monodesk_official에서 다양한 데스크테리어 영감과<br />
            고객들의 실제 사용 후기를 만나보세요
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <span className="text-2xl">📷</span>
            <span className="font-pretendard text-lg font-light tracking-wide">
              @monodesk_official
            </span>
          </div>
        </motion.div>

        {/* Instagram 포스트 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group aspect-square flex flex-col"
              >
                {/* 포스트 이미지/이모지 */}
                <div className="text-4xl md:text-5xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
                
                {/* 포스트 정보 */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-playfair text-sm font-light text-white mb-1 text-center">
                      {post.title}
                    </h4>
                    <p className="font-pretendard text-xs text-gray-300 text-center line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  
                  {/* 좋아요 & 댓글 */}
                  <div className="flex items-center justify-center gap-3 mt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <span>❤️</span>
                      <span className="font-pretendard">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>💬</span>
                      <span className="font-pretendard">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 팔로우 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 max-w-lg mx-auto">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="font-playfair text-xl md:text-2xl font-light text-white mb-4">
              더 많은 영감을 원하신다면?
            </h3>
            <p className="font-pretendard text-gray-300 mb-6 leading-relaxed">
              매일 업데이트되는 데스크테리어 아이디어와<br />
              고객 스토리를 인스타그램에서 확인하세요
            </p>
            
            <Link 
              href="https://instagram.com/monodesk_official" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 border border-white/20 text-white font-pretendard font-light tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
              >
                팔로우하기
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram; 