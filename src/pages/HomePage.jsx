
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import HomeAboutSection from '@/components/home/HomeAboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <HomeAboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
