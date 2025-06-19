'use client';


import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { 
  HeartIcon
} from '@heroicons/react/24/solid';

const Footer = () => {

  const footerLinks = {
    company: [
      { name: '브랜드 스토리', href: '/about' },
      { name: '채용정보', href: '#' },
      { name: '투자정보', href: '#' }
    ],
    shop: [
      { name: '전체 상품', href: '/shop' },
      { name: '데스크 조명', href: '/shop?category=DESK%20LIGHTING' },
      { name: '오거나이저', href: '/shop?category=ORGANIZER' }
    ],
    support: [
      { name: '고객센터', href: '/community/customer-care' },
      { name: '공지사항', href: '/community/notice' },
      { name: '배송안내', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/monodesk_official', icon: '📷' },
    { name: 'KakaoTalk', href: 'https://pf.kakao.com/_monodesk', icon: '💬' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-wood-charcoal via-wood-oak to-wood-charcoal text-wood-cream">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 
                className="text-2xl font-light tracking-widest text-wood-cream"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                MONODESK
              </h2>
              <p 
                className="text-wood-cream/70 text-sm leading-relaxed"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                당신의 공간을 특별하게 만드는 데스크테리어 브랜드
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                {[
                  { icon: PhoneIcon, text: '02-1234-5678' },
                  { icon: EnvelopeIcon, text: 'hello@monodesk.co.kr' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-wood-cream/70 text-sm">
                    <item.icon className="w-4 h-4" />
                    <span style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 
                  className="text-sm font-medium text-wood-cream border-b border-wood-cream/10 pb-2"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {category === 'company' && '회사소개'}
                  {category === 'shop' && '쇼핑'}
                  {category === 'support' && '고객지원'}
                </h3>
                <ul className="space-y-1">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href}>
                        <span
                          className="text-wood-cream/60 hover:text-wood-sage transition-colors duration-300 text-xs"
                          style={{ fontFamily: 'Pretendard, sans-serif' }}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-wood-cream/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div
                className="text-wood-cream/60 text-xs"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                <div className="flex items-center space-x-2">
                  <span>© 2024 MONODESK. All rights reserved.</span>
                  <span>Made with</span>
                  <HeartIcon className="w-3 h-3 text-red-400" />
                  <span>in Seoul</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-wood-cream/10 rounded-full flex items-center justify-center hover:bg-wood-sage/20 transition-all duration-300 text-sm"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 bg-wood-sage/20 border border-wood-cream/20 text-wood-cream text-xs rounded-full hover:bg-wood-sage/30 transition-all duration-300"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                ↑ TOP
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 