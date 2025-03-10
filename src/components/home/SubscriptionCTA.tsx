'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const benefits = [
  'Save 15% on every order',
  'Customize your delivery schedule',
  'Skip or cancel anytime',
  'Free shipping on all subscription orders',
  'Early access to new product releases',
];

export default function SubscriptionCTA() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-light/10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-light/10 rounded-tr-full" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-elevated overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Never Run <span className="text-brand">Out</span>
                </h2>
                <p className="text-neutral-700 mb-6">
                  Subscribe to your favorite Canna Drops and enjoy savings, convenience, and priority delivery. The perfect way to maintain your wellness routine.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center text-neutral-700"
                    >
                      <CheckIcon className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/shop?subscription=true" className="btn btn-primary">
                    Start Saving Now
                  </Link>
                  <Link href="/subscription" className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-light/20 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1 bg-brand-light/20 text-brand rounded-full text-sm font-medium mb-2">Most Popular</span>
                  <h3 className="text-2xl font-bold text-neutral-900">Monthly Box</h3>
                  <div className="mt-2 flex items-center justify-center">
                    <span className="text-3xl font-bold text-brand">$89</span>
                    <span className="text-neutral-500 ml-2">/month</span>
                  </div>
                  <p className="text-neutral-600 text-sm mt-2">Save $19 compared to one-time purchase</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-neutral-700">
                    <CheckIcon className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                    <span>3 full-size Canna Drops (your choice)</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <CheckIcon className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                    <span>Free recipe guide with each delivery</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <CheckIcon className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                    <span>Exclusive subscriber-only products</span>
                  </div>
                </div>
                
                <Link href="/shop/subscribe/monthly" className="btn btn-primary w-full">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 