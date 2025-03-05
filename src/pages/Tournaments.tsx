
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";

const Tournaments = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedOption === "player") {
      navigate("/player-tournaments");
    } else if (selectedOption === "organizer") {
      navigate("/tournament-creation");
    }
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-24 pb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-primary">GET.</span>
              <span>SET.</span>
              <span className="text-primary">HUNT</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-4">Choose how you want to proceed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="max-w-4xl w-full mx-auto"
          >
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
                      Browse and register for upcoming tournaments in your area
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
                    <Trophy className="h-8 w-8 text-primary" />
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
        </div>
      </MainLayout>
    </>
  );
};

export default Tournaments;
