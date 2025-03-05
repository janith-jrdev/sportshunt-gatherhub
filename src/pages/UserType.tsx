
import { motion } from "framer-motion";
import { UserTypeSelection } from "@/components/auth/UserTypeSelection";
import { AuthBackground } from "@/components/auth/AuthBackground";

const UserType = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <AuthBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          GET.<span className="text-foreground">SET.</span>HUNT
        </h1>
        <p className="text-muted-foreground mt-2">Find and join tournaments or create your own</p>
      </motion.div>
      <UserTypeSelection />
    </motion.div>
  );
};

export default UserType;
