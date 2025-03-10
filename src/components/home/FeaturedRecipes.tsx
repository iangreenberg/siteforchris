'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpenIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Calm Chamomile CBD Latte",
    description: "A soothing evening beverage combining the relaxing properties of chamomile tea with our CBD Canna Drops for the ultimate wind-down ritual.",
    image: "/images/recipes/cbd-latte.jpg", // Placeholder
    prepTime: "5 min",
    servings: 1,
    difficulty: "Easy",
    tags: ["beverage", "relaxation", "cbd"],
  },
  {
    id: 2,
    title: "Energizing Citrus Spritzer",
    description: "A refreshing daytime drink with a burst of citrus, enhanced with our CBG Canna Drops for focus and energy without the caffeine crash.",
    image: "/images/recipes/citrus-spritzer.jpg", // Placeholder
    prepTime: "10 min",
    servings: 2,
    difficulty: "Easy",
    tags: ["beverage", "energy", "cbg"],
  },
  {
    id: 3,
    title: "Spiced Chocolate Truffles",
    description: "Decadent chocolate truffles with a hint of chili, infused with THC Canna Drops for a delightful dessert experience.",
    image: "/images/recipes/chocolate-truffles.jpg", // Placeholder
    prepTime: "45 min",
    servings: 12,
    difficulty: "Medium",
    tags: ["dessert", "chocolate", "thc"],
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Infused <span className="text-brand">Recipes</span>
          </h2>
          <p className="text-neutral-700">
            Discover creative ways to incorporate Canna Drops into delicious food and drinks.
            From morning smoothies to evening cocktails, the possibilities are endless.
          </p>
          
          <Link href="/recipes" className="btn btn-secondary mt-6 inline-flex">
            Browse All Recipes
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden bg-neutral-100">
                {/* This would normally have a real image */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand/10">
                  <div className="text-brand font-bold">{recipe.title}</div>
                </div>
                
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/recipes/${recipe.id}`} className="btn btn-primary text-sm">
                    View Recipe
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-brand/10 text-brand text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-brand transition-colors">
                  {recipe.title}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {recipe.prepTime}
                  </div>
                  
                  <div className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    {recipe.servings} {recipe.servings === 1 ? 'serving' : 'servings'}
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    {recipe.difficulty}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 