
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft,
  Save,
  RefreshCw,
  ArrowLeftRight
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for the match
const matchData = {
  id: "m3",
  categoryId: "1",
  round: "Final",
  player1: "Nivan",
  player2: "Bhavith L",
  court: "Court 4",
  time: "2:00 PM",
  date: "2023-06-17",
  status: "In Progress",
  bestOf: 3,
  sets: [
    { player1Score: 0, player2Score: 0 }
  ]
};

const TournamentScoring = () => {
  const { id, matchId } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(matchData);
  
  // Handle score update
  const updateScore = (setIndex: number, player: 'player1Score' | 'player2Score', value: number) => {
    const newSets = [...match.sets];
    newSets[setIndex][player] = value;
    setMatch({...match, sets: newSets});
  };
  
  // Handle adding a new set
  const addSet = () => {
    if (match.sets.length < match.bestOf) {
      setMatch({...match, sets: [...match.sets, { player1Score: 0, player2Score: 0 }]});
    }
  };
  
  // Handle incrementing score
  const incrementScore = (setIndex: number, player: 'player1Score' | 'player2Score') => {
    const newSets = [...match.sets];
    newSets[setIndex][player] += 1;
    setMatch({...match, sets: newSets});
  };
  
  // Handle saving the match
  const saveMatch = () => {
    // Calculate the winner
    let player1Sets = 0;
    let player2Sets = 0;
    
    match.sets.forEach(set => {
      if (set.player1Score > set.player2Score) player1Sets++;
      if (set.player2Score > set.player1Score) player2Sets++;
    });
    
    const winner = player1Sets > player2Sets ? match.player1 : player2Sets > player1Sets ? match.player2 : null;
    const completed = (player1Sets > match.bestOf / 2) || (player2Sets > match.bestOf / 2);
    
    console.log("Match saved:", {
      ...match,
      winner,
      status: completed ? "Completed" : "In Progress"
    });
    
    // In a real app, you would send this to your API
    navigate(`/tournament-fixtures/${id}`);
  };
  
  // Determine if we have a winner for a set
  const getSetWinner = (setIndex: number) => {
    const set = match.sets[setIndex];
    if (set.player1Score > set.player2Score) return match.player1;
    if (set.player2Score > set.player1Score) return match.player2;
    return null;
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-16 pb-12">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mr-2"
              onClick={() => navigate(`/tournament-fixtures/${id}`)}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Fixtures
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Match Scoring</h1>
              <p className="text-muted-foreground mt-1">{match.player1} vs {match.player2} - {match.round}</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Scoreboard</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowLeftRight className="h-4 w-4 mr-2" />
                  Swap
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-4 items-center mb-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{match.player1}</h3>
                  </div>
                  <div className="text-center text-xl font-semibold text-muted-foreground">
                    VS
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{match.player2}</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {match.sets.map((set, index) => (
                    <div key={index} className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Set {index + 1}</h4>
                        {getSetWinner(index) && (
                          <span className="text-sm font-medium text-green-600">
                            {getSetWinner(index)} won this set
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="flex flex-col items-center">
                          <div className="text-6xl font-bold mb-4">{set.player1Score}</div>
                          <div className="flex gap-2">
                            <Button 
                              onClick={() => incrementScore(index, 'player1Score')}
                              className="w-16"
                            >
                              +1
                            </Button>
                            <Input 
                              type="number" 
                              value={set.player1Score}
                              onChange={(e) => updateScore(index, 'player1Score', parseInt(e.target.value) || 0)}
                              className="w-16 text-center"
                              min={0}
                            />
                          </div>
                        </div>
                        
                        <div className="text-center text-xl font-semibold text-muted-foreground">
                          -
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="text-6xl font-bold mb-4">{set.player2Score}</div>
                          <div className="flex gap-2">
                            <Button 
                              onClick={() => incrementScore(index, 'player2Score')}
                              className="w-16"
                            >
                              +1
                            </Button>
                            <Input 
                              type="number" 
                              value={set.player2Score}
                              onChange={(e) => updateScore(index, 'player2Score', parseInt(e.target.value) || 0)}
                              className="w-16 text-center"
                              min={0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6">
                  {match.sets.length < match.bestOf && (
                    <Button variant="outline" onClick={addSet}>
                      Add Set
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between pt-4 border-t">
                <Button variant="outline" onClick={() => navigate(`/tournament-fixtures/${id}`)}>
                  Cancel
                </Button>
                <Button onClick={saveMatch}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Result
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Match Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Date & Time</h4>
                  <p>{new Date(match.date).toLocaleDateString()} at {match.time}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Court</h4>
                  <p>{match.court}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Format</h4>
                  <p>Best of {match.bestOf}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default TournamentScoring;
