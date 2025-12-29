import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

interface BrandCardProps {
  name: string;
  image: string;
  href: string;
  description?: string;
}

const brands: BrandCardProps[] = [
  {
    name: 'HP',
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800&q=80',
    href: '/brands/hp',
    description: 'Find your Hp companion Laptop at best market price.'
  },
  {
    name: 'DELL',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    href: '/brands/dell'
  },
  {
    name: 'APPLE',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=800&q=80',
    href: '/brands/apple'
  },
  {
    name: 'LENOVO',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&q=80',
    href: '/brands/lenovo'
  },
  {
    name: 'ASUS',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    href: '/brands/asus'
  },
  {
    name: 'MSI',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    href: '/brands/msi'
  }
];

const BrandCard = ({ name, image, href }: BrandCardProps) => {
  return (
      <div className="group flex flex-col items-center">
        <Link 
          href={href} 
          className="relative w-full aspect-[16/9] overflow-hidden rounded-[20px] border border-black/5 glass-card transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <Image
            src={image}
            alt={`${name} Laptop Collection`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <Link 
          href={href} 
          className="mt-4 flex items-center gap-2 text-foreground font-medium tracking-wider uppercase text-lg group-hover:text-foreground/70 transition-colors"
        >
          {name}
          <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
  );
};

export default function BrandGrid() {
  return (
    <section className="px-6 sm:px-10">
      <div className="container">
        <h2 className="mb-12">
          Explore Laptops By Top Brands
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {brands.map((brand) => (
            <BrandCard 
              key={brand.name}
              name={brand.name}
              image={brand.image}
              href={brand.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
