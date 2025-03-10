import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpenIcon, ClockIcon, UserGroupIcon, FireIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Recipes | Infused Canna Drops',
  description: 'Discover delicious food and drink recipes infused with Canna Drops.',
};

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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    id: 4,
    title: "Berry Bliss Smoothie Bowl",
    description: "A nutrient-packed breakfast bowl with mixed berries, banana, and CBD Canna Drops to start your day with balance and focus.",
    image: "/images/recipes/smoothie-bowl.jpg", // Placeholder
    prepTime: "15 min",
    servings: 1,
    difficulty: "Easy",
    tags: ["breakfast", "healthy", "cbd"],
    featured: false,
  },
  {
    id: 5,
    title: "Infused Honey Ginger Tea",
    description: "A warming tea with anti-inflammatory properties, enhanced with CBD Canna Drops for additional wellness benefits.",
    image: "/images/recipes/honey-tea.jpg", // Placeholder
    prepTime: "8 min",
    servings: 1,
    difficulty: "Easy",
    tags: ["beverage", "wellness", "cbd"],
    featured: false,
  },
  {
    id: 6,
    title: "Coconut Mango Popsicles",
    description: "Tropical frozen treats made with coconut milk, fresh mango, and CBG Canna Drops for a refreshing summer snack.",
    image: "/images/recipes/mango-popsicles.jpg", // Placeholder
    prepTime: "20 min",
    servings: 8,
    difficulty: "Easy",
    tags: ["dessert", "summer", "cbg"],
    featured: false,
  },
  {
    id: 7,
    title: "Infused Olive Oil Pasta",
    description: "A simple yet elegant pasta dish with olive oil infused with CBD Canna Drops, garlic, and fresh herbs.",
    image: "/images/recipes/olive-oil-pasta.jpg", // Placeholder
    prepTime: "25 min",
    servings: 4,
    difficulty: "Easy",
    tags: ["dinner", "savory", "cbd"],
    featured: false,
  },
  {
    id: 8,
    title: "Relaxing Bedtime Hot Chocolate",
    description: "Rich and creamy hot chocolate with CBN Canna Drops to help you unwind and prepare for a restful night's sleep.",
    image: "/images/recipes/hot-chocolate.jpg", // Placeholder
    prepTime: "10 min",
    servings: 1,
    difficulty: "Easy",
    tags: ["beverage", "sleep", "cbn"],
    featured: false,
  },
  {
    id: 9,
    title: "THC Infused Guacamole",
    description: "A party favorite with a twist - fresh guacamole with THC Canna Drops for a social gathering hit.",
    image: "/images/recipes/guacamole.jpg", // Placeholder
    prepTime: "15 min",
    servings: 6,
    difficulty: "Easy",
    tags: ["appetizer", "social", "thc"],
    featured: false,
  },
];

export default function RecipesPage() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Infused <span className="text-brand">Recipes</span>
          </h1>
          <p className="text-neutral-700">
            Discover creative ways to incorporate Canna Drops into delicious food and drinks.
            From morning smoothies to evening cocktails, the possibilities are endless.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-brand text-white">
              All Recipes
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              Beverages
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              Desserts
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              Meals
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              Snacks
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-neutral-300 text-neutral-700 py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm">
                <option>Filter by: All</option>
                <option>THC Recipes</option>
                <option>CBD Recipes</option>
                <option>CBG Recipes</option>
                <option>CBN Recipes</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select className="appearance-none bg-white border border-neutral-300 text-neutral-700 py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm">
                <option>Sort by: Newest</option>
                <option>Prep Time: Low to High</option>
                <option>Difficulty: Easy to Hard</option>
                <option>Most Popular</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Recipes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Featured Recipes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recipes.filter(recipe => recipe.featured).map((recipe) => (
              <div key={recipe.id} className="card overflow-hidden group">
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
                      <FireIcon className="h-4 w-4 mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Recipes */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            All Recipes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recipes.filter(recipe => !recipe.featured).map((recipe) => (
              <div key={recipe.id} className="card overflow-hidden group">
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
                      <FireIcon className="h-4 w-4 mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Recipe CTA */}
        <div className="mt-20 bg-neutral-50 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Have a Great Recipe?
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto mb-6">
            We love seeing how our community uses Canna Drops in creative ways. Share your recipe with us for a chance to be featured on our website and social media.
          </p>
          <Link href="/contact?subject=Recipe%20Submission" className="btn btn-primary">
            Submit Your Recipe
          </Link>
        </div>
      </div>
    </div>
  );
} 