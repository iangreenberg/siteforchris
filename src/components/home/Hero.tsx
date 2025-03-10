'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/20 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
      </div>
      
      <div className="container relative z-10 pt-20 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 font-display">
              Elevate Your <span className="text-brand">Experience</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-neutral-700 max-w-xl mx-auto md:mx-0">
              Premium nano cannabis drops that dissolve instantly in any drink or food. Fast-acting, precise dosing, and amazing flavors.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/shop" className="btn btn-primary">
                Shop Now
              </Link>
              <Link href="/science" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-brand font-bold text-xl">Fast</span>
                <span className="text-sm text-neutral-600">15 min onset</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <span className="text-brand font-bold text-xl">Precise</span>
                <span className="text-sm text-neutral-600">Exact dosing</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <span className="text-brand font-bold text-xl">Versatile</span>
                <span className="text-sm text-neutral-600">Any drink/food</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* This would be replaced with actual product image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-elevated flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-light/30 to-brand-dark/30 animate-pulse-slow" />
                <div className="text-2xl font-bold text-brand">Product Image</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 