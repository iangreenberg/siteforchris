import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// Components
import Hero from '@/components/home/Hero';
import ProductBenefits from '@/components/home/ProductBenefits';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Testimonials from '@/components/home/Testimonials';
import FeaturedRecipes from '@/components/home/FeaturedRecipes';
import SubscriptionCTA from '@/components/home/SubscriptionCTA';

export const metadata: Metadata = {
  title: 'Infused | Premium Canna Drops',
  description: 'Fast-absorbing, high-potency nano cannabinoid infusers for any drink or food.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductBenefits />
      <FeaturedProducts />
      <Testimonials />
      <FeaturedRecipes />
      <SubscriptionCTA />
    </>
  );
}
