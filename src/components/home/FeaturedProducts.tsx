
import React from "react";
import { ProductCard } from "@/components/products/ProductCard";

// Sample product data (in a real application, this would come from an API or database)
const products = [
  {
    id: "1",
    name: "Premium California Almonds",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: true,
    isLowStock: false,
    isWholesaleOnly: false,
  },
  {
    id: "2",
    name: "Organic Medjool Dates",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1606050627722-3646950682e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: false,
    isLowStock: true,
    isWholesaleOnly: false,
  },
  {
    id: "3",
    name: "Kashmir Saffron (Grade A)",
    price: 699,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1632056204478-af03ab15fb14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: true,
    isLowStock: false,
    isWholesaleOnly: false,
  },
  {
    id: "4",
    name: "Mixed Dry Fruits Gift Box",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1603100972152-851752c3f74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: false,
    isLowStock: false,
    isWholesaleOnly: false,
  },
  {
    id: "5",
    name: "Organic Turmeric Powder",
    price: 299,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: false,
    isLowStock: false,
    isWholesaleOnly: false,
  },
  {
    id: "6",
    name: "Bulk Pistachios",
    price: 1999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1580822815688-5f1a5834a735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: false,
    isLowStock: false,
    isWholesaleOnly: true,
  },
  {
    id: "7",
    name: "Garam Masala Blend",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: true,
    isLowStock: false,
    isWholesaleOnly: false,
  },
  {
    id: "8",
    name: "Premium Cashews",
    price: 899,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1600189020840-e99106c75df1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isBestseller: false,
    isLowStock: false,
    isWholesaleOnly: false,
  },
];

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, subtitle }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice || undefined}
              image={product.image}
              isBestseller={product.isBestseller}
              isLowStock={product.isLowStock}
              isWholesaleOnly={product.isWholesaleOnly}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
