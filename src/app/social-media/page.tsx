import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Header with back button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfa
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Sosyal Medya Çalışmaları
        </h1>

        {/* Social Media Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Instagram Kampanyaları
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Marka bilinirliğini artırmak için yürütülen başarılı Instagram kampanyaları ve etkileşim stratejileri.
              </p>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  500K+ Takipçi
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  3.5% Etkileşim
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                YouTube İçerikleri
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Eğitici ve bilgilendirici video içerikleri ile geniş bir izleyici kitlesine ulaşma.
              </p>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                  100K+ Abone
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                  1M+ Görüntülenme
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                LinkedIn Profesyonel Ağ
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                İş dünyasında profesyonel bağlantılar kurma ve sektörel içerik paylaşımı.
              </p>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  10K+ Bağlantı
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Top 1% Etkileşim
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500K+</div>
            <div className="text-gray-600 dark:text-gray-400">Toplam Takipçi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-400">Aylık Etkileşim</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Başarılı Kampanya</div>
          </div>
        </div>
      </main>
    </div>
  );
} 