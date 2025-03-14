
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BannerSlider } from "@/components/home/BannerSlider";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryHighlight } from "@/components/home/CategoryHighlight";
import { FeatureSection } from "@/components/home/FeatureSection";
import { Testimonials } from "@/components/home/Testimonials";

// Sample data for slider
const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1622040806062-07e27aca83e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Diwali Sale: 30% Off Almonds!",
    description: "Celebrate the festival of lights with premium California almonds. Limited time offer.",
    link: "/category/dry-fruits",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596097635121-14b43daa686b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Spice Up Your Cooking",
    description: "Explore our premium selection of authentic Indian spices sourced directly from farms.",
    link: "/category/spices",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609525313344-a56f580b9096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Wholesale Deals for Businesses",
    description: "Special bulk pricing for restaurants, caterers, and retailers. Save more when you buy more.",
    link: "/category/wholesale",
  },
];

// Sample data for categories
const categories = [
  {
    id: "dry-fruits",
    name: "Dry Fruits",
    description: "Premium nuts and dried fruits from around the world",
    image: "https://images.unsplash.com/photo-1546383644-6e3fdae07ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/category/dry-fruits",
  },
  {
    id: "spices",
    name: "Spices",
    description: "Authentic spices to enhance your culinary creations",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/category/spices",
  },
  {
    id: "wholesale",
    name: "Wholesale",
    description: "Bulk quantities at special prices for businesses",
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/category/wholesale",
  },
];

// Sample testimonials
const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "The quality of dry fruits from Niraa is exceptional. I've been ordering from them for over a year and have never been disappointed. Their packaging ensures freshness every time.",
  },
  {
    id: "2",
    name: "Arjun Patel",
    location: "Delhi",
    rating: 4,
    comment: "Great variety of spices, all authentic and aromatic. The Kashmir saffron is definitely worth the premium price. Fast delivery and good customer service.",
  },
  {
    id: "3",
    name: "Meera Reddy",
    location: "Bangalore",
    rating: 5,
    comment: "I ordered a gift box for Diwali, and it was beautifully packaged. Everyone loved the selection of dry fruits and the personalized message. Will definitely order again!",
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Banner Slider */}
        <section className="pt-16 md:pt-20">
          <BannerSlider banners={banners} />
        </section>
        
        {/* Feature Icons */}
        <FeatureSection />
        
        {/* Featured Products */}
        <FeaturedProducts 
          title="Best Sellers" 
          subtitle="Our most popular products based on sales. Updated weekly." 
        />
        
        {/* Category Highlight */}
        <CategoryHighlight categories={categories} />
        
        {/* New Arrivals */}
        <FeaturedProducts 
          title="New Arrivals" 
          subtitle="Check out our latest additions to the Niraa collection." 
        />
        
        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
