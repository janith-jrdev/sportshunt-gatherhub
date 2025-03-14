
import React from "react";
import { motion } from "framer-motion";
import { Truck, Award, Gift, Leaf } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Free Shipping",
    description: "On orders above ₹999 within India. Fast delivery within 3-5 business days.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Premium Quality",
    description: "Handpicked products from trusted farmers and suppliers across India.",
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Gifting Options",
    description: "Custom gift boxes and packaging for all occasions with personalized messages.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Natural & Organic",
    description: "No preservatives, chemicals, or artificial additives in any of our products.",
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg border border-border"
            >
              <div className="inline-flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
