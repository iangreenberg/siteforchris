import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Shop | Infused Canna Drops',
  description: 'Browse our selection of premium nano cannabinoid infusers for any drink or food.',
};

// This would normally be fetched from a database or API
const products = [
  {
    id: 1,
    name: 'THC Canna Drops',
    description: 'Fast-acting THC nano drops with 10mg per serving. Perfect for social occasions and relaxation.',
    price: 39.99,
    image: '/images/products/thc-drops.jpg', // Placeholder
    category: 'thc',
    effects: ['Relaxation', 'Euphoria', 'Creativity'],
    rating: 4.8,
  },
  {
    id: 2,
    name: 'CBD Canna Drops',
    description: 'Relief-focused CBD nano drops with 25mg per serving. Great for recovery and stress relief.',
    price: 34.99,
    image: '/images/products/cbd-drops.jpg', // Placeholder
    category: 'cbd',
    effects: ['Calm', 'Relief', 'Focus'],
    rating: 4.9,
  },
  {
    id: 3,
    name: 'CBG Canna Drops',
    description: 'Energy-boosting CBG nano drops with 15mg per serving. Ideal for daytime use and productivity.',
    price: 44.99,
    image: '/images/products/cbg-drops.jpg', // Placeholder
    category: 'cbg',
    effects: ['Energy', 'Focus', 'Clarity'],
    rating: 4.7,
  },
  {
    id: 4,
    name: 'CBN Canna Drops',
    description: 'Sleep-enhancing CBN nano drops with 10mg per serving. Perfect for nighttime routines and deep rest.',
    price: 49.99,
    image: '/images/products/cbn-drops.jpg', // Placeholder
    category: 'cbn',
    effects: ['Sleep', 'Relaxation', 'Recovery'],
    rating: 4.9,
  },
  {
    id: 5,
    name: 'THC:CBD 1:1 Canna Drops',
    description: 'Balanced 1:1 ratio of THC and CBD for a harmonious effect. 5mg THC and 5mg CBD per serving.',
    price: 42.99,
    image: '/images/products/thc-cbd-drops.jpg', // Placeholder
    category: 'thc',
    effects: ['Balance', 'Relaxation', 'Mood'],
    rating: 4.8,
  },
  {
    id: 6,
    name: 'CBD:CBG 2:1 Canna Drops',
    description: 'Daytime formula with 20mg CBD and 10mg CBG per serving. Great for focus without intoxication.',
    price: 39.99,
    image: '/images/products/cbd-cbg-drops.jpg', // Placeholder
    category: 'cbd',
    effects: ['Focus', 'Calm', 'Productivity'],
    rating: 4.6,
  },
  {
    id: 7,
    name: 'THC:CBN 2:1 Canna Drops',
    description: 'Evening formula with 10mg THC and 5mg CBN per serving. Perfect for deep relaxation and sleep.',
    price: 46.99,
    image: '/images/products/thc-cbn-drops.jpg', // Placeholder
    category: 'thc',
    effects: ['Sleep', 'Relaxation', 'Dreams'],
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Full Spectrum Canna Drops',
    description: 'Complete entourage effect with THC, CBD, CBG, and CBN in balanced ratios. 20mg total cannabinoids per serving.',
    price: 54.99,
    image: '/images/products/full-spectrum-drops.jpg', // Placeholder
    category: 'full-spectrum',
    effects: ['Balance', 'Wellness', 'Harmony'],
    rating: 5.0,
  },
];

export default function ShopPage() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Shop <span className="text-brand">Canna Drops</span>
          </h1>
          <p className="text-neutral-700">
            Browse our selection of premium nano cannabinoid infusers, designed to dissolve instantly in your favorite drinks and foods.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-brand text-white">
              All Products
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              THC
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              CBD
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              CBG
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              CBN
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              Full Spectrum
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-neutral-300 text-neutral-700 py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select className="appearance-none bg-white border border-neutral-300 text-neutral-700 py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm">
                <option>Purchase Type: All</option>
                <option>One-time Purchase</option>
                <option>Subscription</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="aspect-square relative overflow-hidden bg-neutral-100">
                {/* This would normally have a real image */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand/10">
                  <div className="text-brand font-bold">{product.name}</div>
                </div>
                
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/shop/${product.id}`} className="btn btn-primary text-sm">
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="text-lg font-semibold text-brand">${product.price}</div>
                </div>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.effects.map((effect, idx) => (
                    <span key={idx} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">
                      {effect}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="text-yellow-500 flex">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-xs text-neutral-500 ml-1">{product.rating}</span>
                  </div>
                  
                  <button className="btn btn-primary text-sm py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 