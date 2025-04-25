"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface AddToCartAnimationProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
  startPosition: { x: number; y: number };
  onComplete: () => void;
}

export default function AddToCartAnimation({ product, startPosition, onComplete }: AddToCartAnimationProps) {
  const [position, setPosition] = useState(startPosition);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const cartIconPosition = { x: window.innerWidth - 50, y: 50 };
    const duration = 1000; // 1 saniye
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Bezier eğrisi için kontrol noktaları
      const p0 = startPosition;
      const p1 = { x: startPosition.x + (cartIconPosition.x - startPosition.x) * 0.5, y: startPosition.y - 100 };
      const p2 = { x: cartIconPosition.x - 50, y: cartIconPosition.y + 50 };
      const p3 = cartIconPosition;

      // Bezier eğrisi hesaplama
      const x = Math.pow(1 - progress, 3) * p0.x + 
                3 * Math.pow(1 - progress, 2) * progress * p1.x + 
                3 * (1 - progress) * Math.pow(progress, 2) * p2.x + 
                Math.pow(progress, 3) * p3.x;
      
      const y = Math.pow(1 - progress, 3) * p0.y + 
                3 * Math.pow(1 - progress, 2) * progress * p1.y + 
                3 * (1 - progress) * Math.pow(progress, 2) * p2.y + 
                Math.pow(progress, 3) * p3.y;

      setPosition({ x, y });
      setOpacity(1 - progress);
      setScale(1 - progress * 0.5);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [startPosition, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        opacity,
        transform: `scale(${scale})`,
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
          className="object-cover"
        />
      </div>
    </div>
  );
} 