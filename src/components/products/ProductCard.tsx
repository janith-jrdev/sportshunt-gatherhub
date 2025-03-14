
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isBestseller?: boolean;
  isWholesaleOnly?: boolean;
  isLowStock?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  isBestseller = false,
  isWholesaleOnly = false,
  isLowStock = false,
}) => {
  const addToCart = () => {
    toast.success(`${name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
        <div className="relative overflow-hidden pt-[100%]">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isBestseller && (
              <Badge variant="default">Bestseller</Badge>
            )}
            {isWholesaleOnly && (
              <Badge variant="secondary">Wholesale Only</Badge>
            )}
            {isLowStock && (
              <Badge variant="destructive">Low Stock</Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-medium text-base mb-1 line-clamp-2">{name}</h3>
          
          <div className="flex items-baseline mb-3">
            <span className="text-lg font-semibold">₹{price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">
                ₹{originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            onClick={addToCart}
            size="sm"
            className="w-full"
            variant="default"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
