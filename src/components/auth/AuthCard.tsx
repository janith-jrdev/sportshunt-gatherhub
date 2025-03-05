
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthCard = ({ children, title, subtitle }: AuthCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl"
    >
      <div className="text-center mb-6">
        <Link to="/" className="inline-block mb-6">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SportsHunt</span>
          </div>
        </Link>
        <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      {children}
    </motion.div>
  );
};
