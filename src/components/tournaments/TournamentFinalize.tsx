
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Clock, Users, Coins, CheckCircle2 } from "lucide-react";

interface TournamentFinalizeProps {
  tournamentData: any;
  onSubmit: () => void;
  onBack: () => void;
}

export function TournamentFinalize({ 
  tournamentData, 
  onSubmit, 
  onBack 
}: TournamentFinalizeProps) {
  const formatDate = (date: Date) => {
    if (!date) return "Not set";
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Review Tournament Details</h2>
        <p className="text-muted-foreground">Please review the details before creating your tournament</p>
      </div>

      <div className="space-y-6">
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-4">Tournament Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Tournament Name</p>
              <p className="font-medium">{tournamentData.tournamentName || "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Organizer</p>
              <p className="font-medium">{tournamentData.organizerName || "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Sport</p>
              <p className="font-medium">{tournamentData.sport || "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Entry Fee</p>
              <p className="font-medium">{tournamentData.entryFee || "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Start Date</p>
              <p className="font-medium">{tournamentData.startDate ? formatDate(tournamentData.startDate) : "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">End Date</p>
              <p className="font-medium">{tournamentData.endDate ? formatDate(tournamentData.endDate) : "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{tournamentData.location || "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Start Time</p>
              <p className="font-medium">{tournamentData.startTime || "Not provided"}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-4">Categories ({tournamentData.categories?.length || 0})</h3>
          
          {tournamentData.categories && tournamentData.categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tournamentData.categories.map((category: any, index: number) => (
                <div key={index} className="bg-card p-3 rounded-md border">
                  <p className="font-medium">{category.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {category.gender} • {category.ageGroup}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No categories added</p>
          )}
        </div>
        
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-4">Format</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Tournament Format</p>
              <p className="font-medium capitalize">{tournamentData.format || "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Fixture Format</p>
              <p className="font-medium capitalize">{tournamentData.fixtureFormat === "bestOfThree" ? "Best of Three" : 
                tournamentData.fixtureFormat === "bestOfFive" ? "Best of Five" : 
                tournamentData.fixtureFormat === "timed" ? "Timed Matches" : 
                tournamentData.fixtureFormat === "single" ? "Single Match" : 
                "Not provided"}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Offline Entries</p>
              <p className="font-medium">{tournamentData.allowOfflineEntries ? "Allowed" : "Not allowed"}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="text-sm">{tournamentData.description || "No description provided"}</p>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onSubmit} className="gap-2">
          <Trophy className="h-4 w-4" />
          Create Tournament
        </Button>
      </div>
    </Card>
  );
}
