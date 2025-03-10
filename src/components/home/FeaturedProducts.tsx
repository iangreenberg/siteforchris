'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

// Sample product data
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
];

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);
  
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Shop Our <span className="text-brand">Canna Drops</span>
          </h2>
          <p className="text-neutral-700">
            Browse our selection of premium nano cannabinoid infusers, designed to dissolve instantly in your favorite drinks and foods.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['all', 'thc', 'cbd', 'cbg', 'cbn'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeFilter === filter 
                    ? 'bg-brand text-white' 
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card group"
            >
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
                  
                  <button className="p-2 rounded-full bg-brand/10 hover:bg-brand/20 text-brand transition-colors">
                    <ShoppingCartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/shop" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
} 