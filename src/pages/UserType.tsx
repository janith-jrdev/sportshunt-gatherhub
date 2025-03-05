
import { motion } from "framer-motion";
import { UserTypeSelection } from "@/components/auth/UserTypeSelection";
import { AuthBackground } from "@/components/auth/AuthBackground";

const UserType = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <AuthBackground />
      <UserTypeSelection />
    </motion.div>
  );
};

export default UserType;
