'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import { MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '미니멀 우드 펜홀더',
      price: 28000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'ORGANIZER'
    },
    {
      id: 2,
      name: '따뜻한 터치 LED 조명',
      price: 45000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'DESK LIGHTING'
    },
    {
      id: 3,
      name: '천연 나무 플랜트 홀더',
      price: 35000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'PLANT OBJECT'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingFee = totalAmount >= 50000 ? 0 : 3000;
  const finalAmount = totalAmount + shippingFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-sand via-wood-cream to-wood-sand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23%7A5230' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-wood-oak/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-wood-cream mb-4 font-playfair">
              MY CART
            </h1>
            <p className="text-xl text-wood-cream/90 max-w-2xl mx-auto">
              당신이 선택한 특별한 아이템들
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            // Empty Cart
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <ShoppingBagIcon className="w-24 h-24 text-wood-charcoal/60 mx-auto mb-6" />
              <h2 
                className="text-2xl font-light text-wood-charcoal mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                장바구니가 비어있습니다
              </h2>
              <p 
                className="text-wood-charcoal/80 mb-8"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                MONODESK의 특별한 제품들을 둘러보세요
              </p>
                            <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-wood-sage text-wood-cream font-medium rounded-lg hover:bg-wood-terracotta transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  쇼핑 계속하기
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            // Cart with Items
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-wood-cream/20 backdrop-blur-sm border border-wood-sage/20 rounded-2xl shadow-2xl p-6 md:p-8"
                >
                  <h2 
                    className="text-2xl font-light text-wood-charcoal mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    장바구니 ({cartItems.length}개 상품)
                  </h2>

                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-wood-cream/30 border border-wood-sage/20 rounded-lg hover:bg-wood-cream/40 transition-all duration-300 backdrop-blur-sm"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <p 
                            className="text-xs text-wood-charcoal/60 mb-1"
                            style={{ fontFamily: 'Pretendard, sans-serif' }}
                          >
                            {item.category}
                          </p>
                          <h3 
                            className="text-lg font-medium text-wood-charcoal mb-2"
                            style={{ fontFamily: 'Pretendard, sans-serif' }}
                          >
                            {item.name}
                          </h3>
                          <p 
                            className="text-lg font-semibold text-wood-sage"
                            style={{ fontFamily: 'Pretendard, sans-serif' }}
                          >
                            {item.price.toLocaleString()}원
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-wood-sage/30 bg-wood-cream/30 rounded-lg backdrop-blur-sm">
                                                          <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-wood-sage/20 transition-colors"
                              >
                                <MinusIcon className="w-4 h-4 text-wood-charcoal" />
                              </button>
                              <span 
                                className="px-4 py-2 text-center min-w-[3rem] text-wood-charcoal"
                                style={{ fontFamily: 'Pretendard, sans-serif' }}
                              >
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-wood-sage/20 transition-colors"
                              >
                                <PlusIcon className="w-4 h-4 text-wood-charcoal" />
                              </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-wood-terracotta hover:bg-wood-terracotta/20 rounded-lg transition-colors"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Continue Shopping */}
                  <div className="mt-8 pt-6 border-t border-wood-sage/30">
                    <Link href="/shop">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="text-wood-sage hover:text-wood-terracotta font-medium transition-colors"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        ← 쇼핑 계속하기
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-wood-cream/20 backdrop-blur-sm border border-wood-sage/20 rounded-2xl shadow-2xl p-6 md:p-8 sticky top-8"
                >
                  <h3 
                    className="text-xl font-light text-wood-charcoal mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    주문 요약
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span 
                        className="text-wood-charcoal/70"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        상품 금액
                      </span>
                      <span 
                        className="font-medium text-wood-charcoal"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {totalAmount.toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span 
                        className="text-wood-charcoal/70"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        배송비
                      </span>
                      <span 
                        className={`font-medium ${shippingFee === 0 ? 'text-wood-sage' : 'text-wood-charcoal'}`}
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}
                      </span>
                    </div>
                    {totalAmount < 50000 && (
                      <p 
                        className="text-sm text-wood-charcoal/60"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        50,000원 이상 주문 시 배송비 무료
                      </p>
                    )}
                  </div>

                  <div className="border-t border-wood-sage/30 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-lg font-semibold text-wood-charcoal"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        총 결제 금액
                      </span>
                      <span 
                        className="text-xl font-bold text-wood-sage"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {finalAmount.toLocaleString()}원
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-wood-sage text-wood-cream font-medium rounded-lg hover:bg-wood-terracotta transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    주문하기
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-3 border border-wood-sage/30 text-wood-charcoal font-medium rounded-lg hover:bg-wood-sage/20 transition-all duration-300 backdrop-blur-sm"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    관심상품에 담기
                  </motion.button>

                  {/* Payment Methods */}
                  <div className="mt-8 pt-6 border-t border-wood-sage/30">
                    <h4 
                      className="text-sm font-medium text-wood-charcoal mb-3"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      결제 방법
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 border border-wood-sage/30 bg-wood-cream/30 rounded text-xs text-wood-charcoal">카드</div>
                      <div className="text-center p-2 border border-wood-sage/30 bg-wood-cream/30 rounded text-xs text-wood-charcoal">계좌이체</div>
                      <div className="text-center p-2 border border-wood-sage/30 bg-wood-cream/30 rounded text-xs text-wood-charcoal">무통장</div>
                    </div>
                  </div>

                  {/* Security Info */}
                  <div className="mt-6 p-4 bg-wood-cream/30 backdrop-blur-sm rounded-lg border border-wood-sage/30">
                    <p 
                      className="text-xs text-wood-charcoal/80 text-center"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      🔒 SSL 보안 결제 시스템으로<br />
                      안전하게 보호됩니다
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 