
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center p-6 bg-gray-50"
    >
      <div className="max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
            <span className="text-primary text-4xl font-bold">404</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Page not found</h1>
          
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
