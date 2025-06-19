'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { MagnifyingGlassIcon, PencilSquareIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface CustomerCare {
  id: number;
  title: string;
  author: string;
  date: string;
  isPrivate?: boolean;
  status?: 'waiting' | 'answered' | 'completed';
}

const mockCustomerCare: CustomerCare[] = [
  { id: 1, title: '주문 취소 요청드립니다', author: 'user****', date: '2024-01-25', isPrivate: true, status: 'answered' },
  { id: 2, title: '배송 지연 문의', author: 'customer***', date: '2024-01-24', isPrivate: true, status: 'completed' },
  { id: 3, title: '제품 불량 교환 요청', author: 'buyer**', date: '2024-01-23', isPrivate: true, status: 'waiting' },
  { id: 4, title: '적립금 사용 방법 문의', author: 'member****', date: '2024-01-22', isPrivate: false, status: 'answered' },
  { id: 5, title: '회원가입 오류 관련 문의', author: 'new_user**', date: '2024-01-21', isPrivate: false, status: 'completed' },
  { id: 6, title: '결제 실패 문의', author: 'user123***', date: '2024-01-20', isPrivate: true, status: 'answered' },
  { id: 7, title: '반품 절차 문의', author: 'return_user', date: '2024-01-19', isPrivate: true, status: 'completed' },
  { id: 8, title: '카드 결제 관련 문의', author: 'payment***', date: '2024-01-18', isPrivate: false, status: 'answered' },
];

export default function CustomerCarePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomerCare = mockCustomerCare.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'waiting':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-pretendard font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
            대기중
          </span>
        );
      case 'answered':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-pretendard font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
            답변완료
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-pretendard font-medium bg-green-500/20 text-green-300 border border-green-500/30">
            처리완료
          </span>
        );
      default:
        return null;
    }
  };

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
                  className="px-6 py-3 font-pretendard font-light text-lg text-wood-charcoal/70 border-b-2 border-transparent hover:text-wood-charcoal hover:border-wood-charcoal/30 transition-all duration-300 tracking-wide"
                >
                  NOTICE
                </motion.button>
              </Link>
              <Link href="/community/customer-care">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 font-pretendard font-light text-lg text-wood-charcoal border-b-2 border-wood-charcoal/50 tracking-wide"
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
              <h2 className="font-playfair text-2xl md:text-3xl font-light text-wood-charcoal">고객지원</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-wood-sage/30 border border-wood-sage text-wood-charcoal font-pretendard font-light hover:bg-wood-sage hover:text-wood-cream transition-all duration-300 backdrop-blur-sm"
              >
                <PencilSquareIcon className="w-5 h-5" />
                문의하기
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
                        <th className="px-6 py-4 text-left text-sm font-pretendard font-medium text-wood-charcoal w-24">상태</th>
                      </tr>
                    </thead>
                                      <tbody className="divide-y divide-wood-sage/20">
                    {filteredCustomerCare.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-wood-sage/10 transition-colors duration-200 cursor-pointer"
                      >
                        <td className="px-6 py-4 text-sm font-pretendard text-wood-charcoal">{item.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {item.isPrivate && (
                              <LockClosedIcon className="w-4 h-4 text-wood-charcoal/60 mr-2" />
                            )}
                            <span className="text-sm font-pretendard text-wood-charcoal/80 hover:text-wood-charcoal transition-colors duration-200">
                              {item.title}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-pretendard text-wood-charcoal/80">{item.author}</td>
                        <td className="px-6 py-4 text-sm font-pretendard text-wood-charcoal/80">{item.date}</td>
                        <td className="px-6 py-4">
                          {item.status && getStatusBadge(item.status)}
                        </td>
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

            {/* Info Notice */}
            <div className="mt-12 bg-wood-cream/30 backdrop-blur-sm border border-wood-sage/30 rounded-lg p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-wood-sage" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-pretendard font-medium text-wood-charcoal">고객지원 안내</h3>
                  <div className="mt-2 text-sm text-wood-charcoal/80">
                    <ul className="list-disc list-inside space-y-1 font-pretendard">
                      <li>🔒 표시는 비공개 게시물로 작성자와 관리자만 확인 가능합니다</li>
                      <li>문의사항은 평일 9시~18시 내에 답변드립니다</li>
                      <li>긴급한 문의는 고객센터 02-1234-5678로 연락주세요</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 