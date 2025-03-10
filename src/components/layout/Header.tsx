'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Wholesale', href: '/wholesale' },
  { name: 'COAs', href: '/coa' },
  { name: 'Affiliate', href: '/affiliate' },
  { name: 'Recipes', href: '/recipes' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Infused</span>
              <div className="h-10 w-auto relative">
                {/* Replace with your actual logo */}
                <div className="text-2xl font-display font-bold text-brand-dark">Infused</div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-neutral-700 hover:text-brand transition duration-150 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right section with cart */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center p-2 rounded-full text-neutral-700 hover:text-brand hover:bg-neutral-100 transition duration-150 ease-in-out">
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Items in cart</span>
              <span className="ml-2 text-sm font-medium">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="pt-2 pb-4 px-4 space-y-1 sm:px-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-brand hover:bg-neutral-100 transition duration-150 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-neutral-200 pt-4 pb-3">
                <div className="flex items-center justify-between px-3">
                  <div className="text-sm font-medium text-neutral-500">Cart</div>
                  <button className="inline-flex items-center p-2 rounded-full text-neutral-700 hover:text-brand hover:bg-neutral-100 transition duration-150 ease-in-out">
                    <ShoppingBagIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="ml-1 text-sm font-medium">0</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 