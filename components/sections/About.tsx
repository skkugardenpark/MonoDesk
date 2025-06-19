'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      title: "감성적 디자인",
      description: "일상에 따뜻함을 더하는 감성적이고 미니멀한 디자인으로 당신의 공간을 특별하게 만들어드립니다.",
      icon: "🎨"
    },
    {
      title: "프리미엄 품질",
      description: "엄선된 소재와 정교한 제작 과정을 통해 오래도록 사용할 수 있는 고품질 제품을 제공합니다.",
      icon: "✨"
    },
    {
      title: "나만의 공간",
      description: "개성 있는 라이프스타일을 반영한 맞춤형 솔루션으로 당신만의 특별한 작업 공간을 연출합니다.",
      icon: "🏠"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* 섹션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            About MONODESK
          </h2>
          <p className="font-pretendard text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            MONODESK는 당신의 책상을 더욱 아름답고 기능적으로 만들어주는 
            프리미엄 데스크테리어 브랜드입니다.
            <br className="hidden md:block" />
            감성적인 디자인과 실용성을 겸비한 제품으로 
            일상에 특별함을 더해드립니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-6 text-center">{feature.icon}</div>
              <h3 className="font-playfair text-xl md:text-2xl font-light text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="font-pretendard text-gray-300 leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 하단 강조 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-playfair text-2xl md:text-3xl font-light text-white/90 italic">
            &ldquo;당신의 공간이 곧 당신의 이야기입니다&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 