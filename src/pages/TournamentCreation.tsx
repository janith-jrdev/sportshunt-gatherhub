
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";
import { OrganizerNameForm } from "@/components/tournaments/OrganizerNameForm";
import { TournamentDetailsForm } from "@/components/tournaments/TournamentDetailsForm";
import { TournamentCategoriesForm } from "@/components/tournaments/TournamentCategoriesForm";
import { TournamentFormatForm } from "@/components/tournaments/TournamentFormatForm";
import { TournamentFinalize } from "@/components/tournaments/TournamentFinalize";

// Define the steps in the tournament creation process
const STEPS = {
  ORGANIZER_NAME: 0,
  TOURNAMENT_DETAILS: 1,
  CATEGORIES: 2,
  FORMAT: 3,
  FINALIZE: 4
};

// Initial tournament data
const initialTournamentData = {
  organizerName: "",
  tournamentName: "",
  sport: "",
  location: "",
  startDate: undefined,
  endDate: undefined,
  startTime: "",
  description: "",
  entryFee: "",
  posterImage: "",
  categories: [],
  format: "",
  fixtureFormat: "",
  allowOfflineEntries: false,
};

const TournamentCreation = () => {
  const [step, setStep] = useState(STEPS.ORGANIZER_NAME);
  const [tournamentData, setTournamentData] = useState(initialTournamentData);
  const navigate = useNavigate();

  // Function to update tournament data
  const updateTournamentData = (data: Partial<typeof tournamentData>) => {
    setTournamentData(prev => ({ ...prev, ...data }));
  };

  // Function to navigate to the next step
  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  // Function to navigate to the previous step
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  // Function to handle submission
  const handleSubmit = () => {
    // In a real application, this would send the data to a backend
    console.log("Tournament created:", tournamentData);
    navigate("/organizer-dashboard");
  };

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case STEPS.ORGANIZER_NAME:
        return (
          <OrganizerNameForm 
            organizerName={tournamentData.organizerName}
            updateData={updateTournamentData}
            onNext={nextStep}
          />
        );
      case STEPS.TOURNAMENT_DETAILS:
        return (
          <TournamentDetailsForm 
            tournamentData={tournamentData}
            updateData={updateTournamentData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case STEPS.CATEGORIES:
        return (
          <TournamentCategoriesForm 
            categories={tournamentData.categories}
            updateData={updateTournamentData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case STEPS.FORMAT:
        return (
          <TournamentFormatForm 
            format={tournamentData.format}
            fixtureFormat={tournamentData.fixtureFormat}
            allowOfflineEntries={tournamentData.allowOfflineEntries}
            updateData={updateTournamentData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case STEPS.FINALIZE:
        return (
          <TournamentFinalize 
            tournamentData={tournamentData}
            onSubmit={handleSubmit}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-24 pb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create Tournament</h1>
            <p className="text-muted-foreground mt-2">
              Set up your tournament in a few easy steps
            </p>
          </div>
          
          {renderStep()}
        </div>
      </MainLayout>
    </>
  );
};

export default TournamentCreation;
