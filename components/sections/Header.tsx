'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { name: 'MAIN', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { 
      name: 'SHOP', 
      href: '/shop',
      dropdown: [
        { name: 'ALL', href: '/shop' },
        { name: 'DESK LIGHTING', href: '/shop?category=DESK%20LIGHTING' },
        { name: 'ORGANIZER', href: '/shop?category=ORGANIZER' },
        { name: 'KEYBOARD ACCS.', href: '/shop?category=KEYBOARD%20ACCS.' },
        { name: 'PLANT OBJECT', href: '/shop?category=PLANT%20OBJECT' },
        { name: 'LIMITED', href: '/shop?category=LIMITED' },
        { name: 'CUSTOM', href: '/shop?category=CUSTOM' },
        { name: 'BUNDLE / SET', href: '/shop?category=BUNDLE%20%2F%20SET' }
      ]
    },
    { 
      name: 'COMMUNITY', 
      href: '/community/notice',
      dropdown: [
        { name: 'NOTICE', href: '/community/notice' },
        { name: 'CUSTOMER CARE', href: '/community/customer-care' }
      ]
    },
    { name: 'CONTACT', href: '/contact' }
  ];

  const rightNavItems = [
    { name: 'LOGIN', href: '/auth/login' },
    { name: 'JOIN', href: '/auth/join' },
    { name: 'MYCART', href: '/cart' }
  ];

  const sideMenuItems = [
    { name: 'TOP', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }), icon: '↑' },
    { name: 'KakaoTalk', href: 'https://pf.kakao.com/_monodesk', icon: '💬' },
    { name: 'Instagram', href: 'https://instagram.com/monodesk_official', icon: '📷' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-wood-cream/95 backdrop-blur-xl shadow-xl border-b border-wood-sage/20' 
            : 'bg-wood-cream/80 backdrop-blur-sm'
        }`}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(253, 246, 236, 0.95) 0%, rgba(230, 220, 209, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(253, 246, 236, 0.8) 0%, rgba(230, 220, 209, 0.8) 100%)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300 group ${
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-wood-oak'
                          : 'text-wood-charcoal/80 hover:text-wood-oak'
                      }`}
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      <div className="flex items-center space-x-1">
                        <span>{item.name}</span>
                        {item.dropdown && (
                          <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        )}
                      </div>
                      
                      {/* Hover underline effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-wood-sage to-wood-terracotta"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Active indicator */}
                      {(pathname === item.href || pathname.startsWith(item.href + '/')) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-wood-sage to-wood-terracotta"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-wood-cream/95 backdrop-blur-xl rounded-xl shadow-2xl border border-wood-sage/20 overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(253, 246, 236, 0.95) 0%, rgba(230, 220, 209, 0.95) 100%)',
                        }}
                      >
                        {item.dropdown.map((dropdownItem, index) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link href={dropdownItem.href}>
                              <motion.div
                                whileHover={{ backgroundColor: 'rgba(169, 185, 163, 0.1)', x: 4 }}
                                className="px-4 py-3 text-sm text-wood-charcoal/80 hover:text-wood-oak transition-all duration-300"
                                style={{ fontFamily: 'Pretendard, sans-serif' }}
                              >
                                {dropdownItem.name}
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Center Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center group"
              >
                <motion.div
                  className="text-xl md:text-2xl font-light tracking-widest text-wood-oak group-hover:text-wood-sage transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  whileHover={{ letterSpacing: '0.2em' }}
                  transition={{ duration: 0.3 }}
                >
                  MONODESK
                </motion.div>
                <motion.div
                  className="text-xs tracking-[0.2em] text-wood-charcoal/60 group-hover:text-wood-sage/80 transition-colors duration-300"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  DESK INTERIOR
                </motion.div>
              </motion.div>
            </Link>

            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {rightNavItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wider transition-all duration-300 group ${
                      pathname === item.href
                        ? 'text-wood-oak'
                        : 'text-wood-charcoal/80 hover:text-wood-oak'
                    }`}
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {item.name}
                    
                    {/* Subtle glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-wood-sage/0 to-wood-terracotta/0 group-hover:from-wood-sage/10 group-hover:to-wood-terracotta/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-wood-charcoal hover:bg-wood-sage/10 transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-wood-sage/20 bg-wood-cream/95 backdrop-blur-xl"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {[...mainNavItems, ...rightNavItems].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <motion.div
                        whileHover={{ x: 10, backgroundColor: 'rgba(169, 185, 163, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        className="block px-4 py-3 text-wood-charcoal hover:text-wood-oak transition-all duration-300 rounded-lg"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Enhanced Side Menu */}
      <div className="fixed right-6 bottom-6 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-3">
          {sideMenuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: '0 10px 25px rgba(122, 82, 48, 0.3)',
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-12 h-12 bg-gradient-to-br from-wood-cream to-wood-sand border border-wood-sage/30 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                    title={item.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute right-full mr-3 px-3 py-1 bg-wood-charcoal/90 text-wood-cream text-xs rounded-lg whitespace-nowrap pointer-events-none"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.name}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-wood-charcoal/90 border-y-2 border-y-transparent"></div>
                    </motion.div>
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 10px 25px rgba(122, 82, 48, 0.3)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={item.action}
                  className="group relative w-12 h-12 bg-gradient-to-br from-wood-cream to-wood-sand border border-wood-sage/30 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                  title={item.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-3 px-3 py-1 bg-wood-charcoal/90 text-wood-cream text-xs rounded-lg whitespace-nowrap pointer-events-none"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {item.name}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-wood-charcoal/90 border-y-2 border-y-transparent"></div>
                  </motion.div>
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header; 