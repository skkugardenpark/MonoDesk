export default function HomePage() {
  return (
    <div className="min-h-screen bg-wood-cream flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-wood-charcoal mb-4">
          MONODESK
        </h1>
        <p className="text-xl text-wood-oak mb-8">
          감성적인 데스크테리어 소품 브랜드
        </p>
        <div className="space-y-4">
          <p className="text-wood-charcoal">배포 테스트 중입니다...</p>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <a 
              href="/shop" 
              className="bg-wood-sage text-white px-4 py-2 rounded hover:bg-wood-terracotta transition-colors"
            >
              SHOP
            </a>
            <a 
              href="/about" 
              className="bg-wood-oak text-white px-4 py-2 rounded hover:bg-wood-terracotta transition-colors"
            >
              ABOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 