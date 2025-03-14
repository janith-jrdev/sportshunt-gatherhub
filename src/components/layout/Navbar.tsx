
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Search, ChevronDown, LogIn } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Niraa</span>
            <span className="text-sm font-medium text-muted-foreground">Dry Fruits & Spices</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center w-1/3 relative">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4"
            />
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 z-50">
                  <Link to="/category/dry-fruits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                    Dry Fruits
                  </Link>
                  <Link to="/category/spices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                    Spices
                  </Link>
                  <Link to="/category/wholesale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                    Wholesale Deals
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden lg:inline">Account</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <button 
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">×</span>
              ) : (
                <span className="text-xl">≡</span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden relative">
          <Input 
            type="text" 
            placeholder="Search products..." 
            className="pl-10 pr-4 w-full"
          />
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="py-3 border-b">
              <button 
                className="flex items-center justify-between w-full text-foreground py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    to="/category/dry-fruits" 
                    className="block py-2 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dry Fruits
                  </Link>
                  <Link 
                    to="/category/spices" 
                    className="block py-2 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Spices
                  </Link>
                  <Link 
                    to="/category/wholesale" 
                    className="block py-2 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wholesale Deals
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/login" className="flex items-center gap-2 py-2">
              <User className="h-4 w-4" />
              <span>Account</span>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
