'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

interface Notice {
  id: number;
  title: string;
  author: string;
  date: string;
  isImportant?: boolean;
}

const mockNotices: Notice[] = [
  { id: 1, title: '2024년 설날 배송 일정 안내', author: 'MONODESK', date: '2024-01-25', isImportant: true },
  { id: 2, title: '신제품 출시 안내 - 미니멀 데스크 조명 시리즈', author: 'MONODESK', date: '2024-01-20' },
  { id: 3, title: '회원 등급제 시행 안내', author: 'MONODESK', date: '2024-01-15' },
  { id: 4, title: '12월 이벤트 당첨자 발표', author: 'MONODESK', date: '2024-01-10' },
  { id: 5, title: '배송비 정책 변경 안내', author: 'MONODESK', date: '2024-01-05' },
  { id: 6, title: '겨울 시즌 할인 이벤트 종료 안내', author: 'MONODESK', date: '2023-12-30' },
  { id: 7, title: '사이트 점검 안내 (12월 25일)', author: 'MONODESK', date: '2023-12-22' },
  { id: 8, title: '크리스마스 특별 이벤트 안내', author: 'MONODESK', date: '2023-12-20' },
];

export default function NoticePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotices = mockNotices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-sand via-wood-cream to-wood-sand pattern-dots relative">
      <Header />
      
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
              COMMUNITY
            </h1>
            <p className="font-pretendard text-lg md:text-xl text-wood-cream/90 max-w-2xl mx-auto">
              MONODESK와 함께하는 공간
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-wood-cream/10 backdrop-blur-sm border-b border-wood-sage/20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <Link href="/community/notice">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 font-pretendard font-light text-lg text-wood-charcoal border-b-2 border-wood-charcoal/50 tracking-wide"
                >
                  NOTICE
                </motion.button>
              </Link>
              <Link href="/community/customer-care">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 font-pretendard font-light text-lg text-wood-charcoal/70 border-b-2 border-transparent hover:text-wood-charcoal hover:border-wood-charcoal/30 transition-all duration-300 tracking-wide"
                >
                  CUSTOMER CARE
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header with Write Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-light text-wood-charcoal">공지사항</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-wood-sage/30 border border-wood-sage text-wood-charcoal font-pretendard font-light hover:bg-wood-sage hover:text-wood-cream transition-all duration-300 backdrop-blur-sm"
              >
                <PencilSquareIcon className="w-5 h-5" />
                글쓰기
              </motion.button>
            </div>

            {/* Table */}
                          <div className="bg-wood-cream/20 backdrop-blur-sm rounded-lg border border-wood-sage/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                                      <thead className="bg-wood-sage/10 border-b border-wood-sage/20">
                    <tr>
                                              <th className="px-6 py-4 text-left text-sm font-pretendard font-medium text-wood-charcoal w-20">No</th>
                        <th className="px-6 py-4 text-left text-sm font-pretendard font-medium text-wood-charcoal">제목</th>
                        <th className="px-6 py-4 text-left text-sm font-pretendard font-medium text-wood-charcoal w-32">글쓴이</th>
                        <th className="px-6 py-4 text-left text-sm font-pretendard font-medium text-wood-charcoal w-32">작성일자</th>
                    </tr>
                  </thead>
                                      <tbody className="divide-y divide-wood-sage/20">
                    {filteredNotices.map((notice, index) => (
                      <motion.tr
                        key={notice.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-wood-sage/10 transition-colors duration-200 cursor-pointer"
                      >
                                                  <td className="px-6 py-4 text-sm text-wood-charcoal">
                            {notice.isImportant ? (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-pretendard font-medium bg-wood-terracotta/20 text-wood-terracotta border border-wood-terracotta/30">
                                공지
                              </span>
                            ) : (
                              notice.id
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              {notice.isImportant && (
                                <span className="text-wood-terracotta mr-2">📢</span>
                              )}
                              <span className={`text-sm font-pretendard ${notice.isImportant ? 'font-medium text-wood-charcoal' : 'text-wood-charcoal/80'} hover:text-wood-charcoal transition-colors duration-200`}>
                                {notice.title}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-pretendard text-wood-charcoal/80">{notice.author}</td>
                          <td className="px-6 py-4 text-sm font-pretendard text-wood-charcoal/80">{notice.date}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Search Section */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 px-4 py-3 bg-wood-cream/30 border border-wood-sage/30 text-wood-charcoal placeholder-wood-charcoal/60 focus:bg-wood-cream/40 focus:border-wood-sage/50 transition-all duration-300 backdrop-blur-sm font-pretendard"
                  />
                  <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-wood-charcoal/60" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-wood-sage/30 border border-wood-sage text-wood-charcoal font-pretendard font-light hover:bg-wood-sage hover:text-wood-cream transition-all duration-300 backdrop-blur-sm"
                >
                  검색
                </motion.button>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-2 text-sm font-pretendard text-wood-charcoal/60 hover:text-wood-charcoal disabled:opacity-50 transition-colors duration-200"
                  disabled
                >
                  이전
                </motion.button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-2 text-sm font-pretendard transition-all duration-200 ${
                      page === 1
                        ? 'bg-wood-sage/30 text-wood-charcoal border border-wood-sage/50'
                        : 'text-wood-charcoal/60 hover:text-wood-charcoal hover:bg-wood-sage/20'
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-2 text-sm font-pretendard text-wood-charcoal/60 hover:text-wood-charcoal transition-colors duration-200"
                >
                  다음
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 