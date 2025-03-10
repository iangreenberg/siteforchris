'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    content: "The Canna Drops have completely changed my routine. I add a few drops to my evening tea and feel the effects within 15 minutes. So much better than waiting hours for edibles to kick in!",
    author: "Sarah K.",
    location: "Denver, CO",
    avatar: "/images/testimonials/avatar1.jpg",  // Placeholder
  },
  {
    id: 2,
    content: "As someone with chronic pain, the CBD Canna Drops have been a game changer. I can add them to any drink without that typical cannabis taste, and the relief comes on quickly.",
    author: "Michael T.",
    location: "Portland, OR",
    avatar: "/images/testimonials/avatar2.jpg",  // Placeholder
  },
  {
    id: 3,
    content: "I love how precise the dosing is with these drops. No more guesswork like with other products. The CBN drops have totally transformed my sleep quality.",
    author: "Jessica R.",
    location: "Austin, TX",
    avatar: "/images/testimonials/avatar3.jpg",  // Placeholder
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our <span className="text-brand">Customers</span> Say
          </h2>
          <p className="text-neutral-700">
            Hear from our community about how Infused Canna Drops have enhanced their wellness routines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 p-6 rounded-xl relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-4xl text-brand-light/30 font-serif">
                "
              </div>

              <div className="mb-4">
                <div className="text-yellow-500 flex">
                  {"★".repeat(5)}
                </div>
              </div>

              <p className="text-neutral-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="mr-4">
                  {/* This would normally have a real image */}
                  <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-sm">
                    {testimonial.author.split(' ')[0][0] + testimonial.author.split(' ')[1][0]}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">{testimonial.author}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-brand-light/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* These would be replaced with actual logos */}
            {['Forbes', 'High Times', 'Leafly', 'Weedmaps', 'Cannabis Now'].map((publication, index) => (
              <div key={index} className="text-neutral-400 font-bold text-xl">
                {publication}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 