'use client';

import { motion } from 'framer-motion';
import { 
  BeakerIcon, 
  ClockIcon, 
  SparklesIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Fast Absorption',
    description: 'Our nano-emulsification technology delivers effects in as little as 15 minutes, compared to 1-2 hours with traditional edibles.',
    icon: ClockIcon,
  },
  {
    title: 'High Potency',
    description: 'Advanced formulation ensures maximum bioavailability, meaning more cannabinoids reach your system for stronger effects with smaller doses.',
    icon: SparklesIcon,
  },
  {
    title: 'Mix with Anything',
    description: 'Water-soluble drops mix perfectly into any drink or food without affecting the taste or texture of your favorite beverages and meals.',
    icon: BoltIcon,
  },
  {
    title: 'Lab Tested',
    description: 'Every batch is third-party tested for potency and purity, with certificates of analysis readily available for complete transparency.',
    icon: BeakerIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductBenefits() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The <span className="text-brand">Canna Drops</span> Difference
          </h2>
          <p className="text-neutral-700">
            Our breakthrough nano-cannabinoid technology is changing how people experience cannabis with faster onset, higher potency, and ultimate versatility.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:shadow-soft transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-neutral-700 text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 