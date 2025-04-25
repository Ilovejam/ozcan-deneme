"use client";
import { useState, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import Cart, { CartRef } from "@/components/Cart";
import AddToCartAnimation from "@/components/AddToCartAnimation";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Özel Tasarım T-Shirt",
    price: 299.99,
    description: "%100 pamuk, özel baskılı t-shirt",
    category: "Giyim",
    image: "/placeholder-tshirt.jpg"
  },
  {
    id: 2,
    name: "Özel Tasarım Çanta",
    price: 599.99,
    description: "Deri çanta, el yapımı detaylar",
    category: "Aksesuarlar",
    image: "/placeholder-bag.jpg"
  },
  {
    id: 3,
    name: "Özel Koleksiyon Saat",
    price: 1299.99,
    description: "Sınırlı sayıda üretilen özel tasarım saat",
    category: "Özel Ürünler",
    image: "/placeholder-watch.jpg"
  },
  {
    id: 4,
    name: "Deri Cüzdan",
    price: 399.99,
    description: "El yapımı deri cüzdan, özel tasarım",
    category: "Aksesuarlar",
    image: "/placeholder-wallet.jpg"
  },
  {
    id: 5,
    name: "Özel Tasarım Sweatshirt",
    price: 499.99,
    description: "Yumuşak kumaş, özel baskılı sweatshirt",
    category: "Giyim",
    image: "/placeholder-sweatshirt.jpg"
  },
  {
    id: 6,
    name: "Koleksiyon Gözlük",
    price: 799.99,
    description: "Sınırlı sayıda üretilen özel tasarım güneş gözlüğü",
    category: "Özel Ürünler",
    image: "/placeholder-glasses.jpg"
  }
];

export default function ECommerce() {
  const cartRef = useRef<CartRef>(null);
  const [animation, setAnimation] = useState<{
    product: { id: number; name: string; image: string };
    startPosition: { x: number; y: number };
  } | null>(null);

  const handleAddToCart = (product: Product, event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const startPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    setAnimation({
      product: {
        id: product.id,
        name: product.name,
        image: product.image
      },
      startPosition
    });

    // Animasyon tamamlandıktan sonra sepete ekle
    setTimeout(() => {
      if (cartRef.current) {
        cartRef.current.addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        });
      }
    }, 1000); // Animasyon süresi kadar bekle
  };

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
          E-Ticaret Ürünleri
        </h1>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Giyim
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Özel tasarım giyim ürünleri ve koleksiyonlar
              </p>
              <Link 
                href="/e-commerce/clothing"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ürünleri Gör →
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Aksesuarlar
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Özel tasarım aksesuarlar ve hediyelik eşyalar
              </p>
              <Link 
                href="/e-commerce/accessories"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ürünleri Gör →
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Özel Ürünler
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sınırlı sayıda üretilen özel koleksiyon ürünleri
              </p>
              <Link 
                href="/e-commerce/special"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ürünleri Gör →
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Öne Çıkan Ürünler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.price.toFixed(2)} TL
                  </span>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Component */}
      <Cart ref={cartRef} />

      {/* Add to Cart Animation */}
      {animation && (
        <AddToCartAnimation
          product={animation.product}
          startPosition={animation.startPosition}
          onComplete={() => setAnimation(null)}
        />
      )}
    </div>
  );
} 