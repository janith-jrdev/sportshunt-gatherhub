
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const UserTypeSelection = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedOption === "player") {
      navigate("/player-dashboard");
    } else if (selectedOption === "organizer") {
      navigate("/organizer-dashboard");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-lg mx-auto p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl"
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">Choose Your Role</h1>
        <p className="text-muted-foreground mt-2">
          Select how you want to use SportsHunt
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedOption("player")}
          className={`relative cursor-pointer rounded-xl p-6 border-2 transition-all ${
            selectedOption === "player"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className={`rounded-full p-4 ${
              selectedOption === "player" ? "bg-primary/10" : "bg-secondary"
            }`}>
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Player</h3>
              <p className="text-sm text-muted-foreground">
                Find and register for tournaments in your area
              </p>
            </div>
          </div>
          {selectedOption === "player" && (
            <div className="absolute top-4 right-4">
              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedOption("organizer")}
          className={`relative cursor-pointer rounded-xl p-6 border-2 transition-all ${
            selectedOption === "organizer"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className={`rounded-full p-4 ${
              selectedOption === "organizer" ? "bg-primary/10" : "bg-secondary"
            }`}>
              <CalendarDays className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Organizer</h3>
              <p className="text-sm text-muted-foreground">
                Create and manage your own tournaments
              </p>
            </div>
          </div>
          {selectedOption === "organizer" && (
            <div className="absolute top-4 right-4">
              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Button
        onClick={handleContinue}
        disabled={!selectedOption}
        className="w-full py-6"
      >
        Continue
      </Button>
    </motion.div>
  );
};
