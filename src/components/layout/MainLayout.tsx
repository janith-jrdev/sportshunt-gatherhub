
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
};
