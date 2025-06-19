'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">문의하기</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MONODESK에 대한 궁금한 점이나 문의사항이 있으시면 언제든 연락해 주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">연락처 정보</h3>
            
            <div className="space-y-6">
              {/* 카카오톡 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-yellow-100 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  💬
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-brand-dark">카카오톡 문의</h4>
                  <p className="text-gray-600">@monodesk (24시간 상담 가능)</p>
                  <motion.a
                    href="https://pf.kakao.com/_monodesk"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mt-2 text-yellow-600 font-medium hover:text-yellow-800 transition-colors"
                  >
                    바로 문의하기 →
                  </motion.a>
                </div>
              </motion.div>

              {/* 이메일 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-blue-50 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-brand-dark">이메일</h4>
                  <p className="text-gray-600">contact@monodesk.co.kr</p>
                  <p className="text-sm text-gray-500 mt-1">업무일 기준 24시간 내 답변</p>
                </div>
              </motion.div>

              {/* 전화 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-pink-50 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-brand-dark">고객센터</h4>
                  <p className="text-gray-600">1588-1234</p>
                  <p className="text-sm text-gray-500 mt-1">평일 9:00 - 18:00</p>
                </div>
              </motion.div>

              {/* 운영시간 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-green-50 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-brand-dark">운영시간</h4>
                  <p className="text-gray-600">평일 9:00 - 18:00</p>
                  <p className="text-sm text-gray-500 mt-1">주말/공휴일 휴무</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 문의 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">직접 문의하기</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-300"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-300"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 유형
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-300">
                    <option>선택해주세요</option>
                    <option>제품 문의</option>
                    <option>주문/배송 문의</option>
                    <option>교환/환불 문의</option>
                    <option>기타 문의</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="문의하실 내용을 자세히 적어주세요"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-pink text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  문의 보내기
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ 링크 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md mx-auto">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-xl font-bold mb-4">자주 묻는 질문</h3>
            <p className="text-gray-600 mb-6">
              빠른 답변이 필요하시다면 FAQ를 먼저 확인해보세요
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              FAQ 보기
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 