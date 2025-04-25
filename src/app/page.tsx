import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Özcan Yıldızdoğan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Girişimci & İş İnsanı
          </p>
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Social Media Section */}
          <Link 
            href="/social-media"
            className="group p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Sosyal Medya
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Sosyal medya çalışmalarımı ve projelerimi keşfedin
              </p>
            </div>
          </Link>

          {/* E-commerce Section */}
          <Link 
            href="/e-commerce"
            className="group p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                E-Ticaret
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ürünlerimi inceleyin ve alışveriş yapın
              </p>
            </div>
          </Link>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">İletişim</h3>
          <div className="flex justify-center space-x-4">
            <a href="mailto:info@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              Email
            </a>
            <a href="tel:+901234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
              Telefon
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
