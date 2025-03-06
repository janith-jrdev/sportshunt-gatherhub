
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  RefreshCw, 
  Maximize, 
  Printer, 
  Trash2, 
  ChevronLeft,
  ChevronRight,
  Settings,
  Check,
  Plus,
  Clock
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TournamentBracket } from "@/components/tournaments/TournamentBracket";
import { TournamentRoundRobin } from "@/components/tournaments/TournamentRoundRobin";

// Fixture mock data
const fixtureData = {
  categories: [
    { id: "1", name: "Men's Singles", gender: "Men", ageGroup: "Open" },
    { id: "2", name: "Women's Singles", gender: "Women", ageGroup: "Open" },
    { id: "3", name: "Mixed Doubles", gender: "Mixed", ageGroup: "Under 18" }
  ],
  activeCategory: "1",
  format: "knockout", // "knockout", "league", "both"
  rounds: ["Round 1", "Quarter Finals", "Semi Finals", "Final"],
  matches: [
    {
      id: "m1",
      categoryId: "1",
      round: "Semi Finals",
      player1: "Nivan",
      player2: "Bhavith L",
      court: "Court 4",
      time: "10:00 AM",
      date: "2023-06-16",
      scores: "15-4, 15-2",
      winner: "Bhavith L",
      status: "Completed"
    },
    {
      id: "m2",
      categoryId: "1",
      round: "Semi Finals",
      player1: "Tushar",
      player2: "Ishant",
      court: "Court 2", 
      time: "11:00 AM",
      date: "2023-06-16",
      scores: "10-15, 15-7, 15-11",
      winner: "Ishant",
      status: "Completed"
    },
    {
      id: "m3",
      categoryId: "1",
      round: "Final",
      player1: "Bhavith L",
      player2: "Ishant",
      court: "Court 4",
      time: "2:00 PM",
      date: "2023-06-17",
      scores: "15-7, 15-6",
      winner: "Bhavith L",
      status: "Completed"
    }
  ],
  // For round robin format
  groups: [
    {
      id: "g1",
      name: "Group A",
      categoryId: "1",
      teams: [
        { id: "t1", name: "Sharwin", played: 2, won: 0, lost: 2, tied: 0 },
        { id: "t2", name: "Chirag", played: 2, won: 2, lost: 0, tied: 0 },
        { id: "t3", name: "Vihaan", played: 2, won: 1, lost: 1, tied: 0 }
      ],
      matches: [
        {
          id: "gm1",
          team1: "Chirag",
          team2: "Sharwin",
          scores: "15-10, 15-7",
          winner: "Chirag",
          status: "Completed"
        },
        {
          id: "gm2",
          team1: "Vihaan",
          team2: "Sharwin",
          scores: "15-12, 15-9",
          winner: "Vihaan",
          status: "Completed"
        },
        {
          id: "gm3",
          team1: "Chirag",
          team2: "Vihaan",
          scores: "15-8, 15-10",
          winner: "Chirag",
          status: "Completed"
        }
      ]
    }
  ]
};

const TournamentFixtures = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(fixtureData.activeCategory);
  const [activeView, setActiveView] = useState(fixtureData.format === "both" ? "groups" : fixtureData.format);

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
              onClick={() => navigate(`/tournament-management/${id}`)}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Management
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Tournament Fixtures</h1>
              <p className="text-muted-foreground mt-1">Manage fixtures, schedules, and match results</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Select value={activeCategory} onValueChange={setActiveCategory}>
                    <SelectTrigger className="w-[220px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {fixtureData.categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {fixtureData.format === "both" && (
                    <div className="flex items-center">
                      <Button 
                        variant={activeView === "groups" ? "default" : "outline"}
                        size="sm"
                        className="rounded-r-none"
                        onClick={() => setActiveView("groups")}
                      >
                        Groups
                      </Button>
                      <Button 
                        variant={activeView === "knockout" ? "default" : "outline"}
                        size="sm"
                        className="rounded-l-none"
                        onClick={() => setActiveView("knockout")}
                      >
                        Knockout
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                  <Button variant="outline" size="sm">
                    <Maximize className="h-4 w-4 mr-2" />
                    Fullscreen
                  </Button>
                  <Button variant="outline" size="sm">
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                </div>
              </div>

              {/* Round Robin / League Format */}
              {(fixtureData.format === "league" || (fixtureData.format === "both" && activeView === "groups")) && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Group A</h3>
                  <TournamentRoundRobin 
                    group={fixtureData.groups[0]} 
                    onMatchClick={(matchId) => console.log("Match clicked", matchId)}
                  />
                </div>
              )}

              {/* Knockout Format */}
              {(fixtureData.format === "knockout" || (fixtureData.format === "both" && activeView === "knockout")) && (
                <div>
                  <TournamentBracket 
                    matches={fixtureData.matches.filter(m => m.categoryId === activeCategory)}
                    onMatchClick={(matchId) => navigate(`/tournament-scoring/${id}/${matchId}`)}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Scheduled Matches</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Match
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Match</th>
                      <th className="text-left py-3 px-4 font-medium">Date & Time</th>
                      <th className="text-left py-3 px-4 font-medium">Court</th>
                      <th className="text-left py-3 px-4 font-medium">Round</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixtureData.matches.filter(m => m.categoryId === activeCategory).map((match) => (
                      <tr key={match.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="font-medium">{match.player1} vs {match.player2}</div>
                          <div className="text-xs text-muted-foreground">
                            {match.scores && `Score: ${match.scores}`}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span>{new Date(match.date).toLocaleDateString()} {match.time}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{match.court}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{match.round}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge 
                            variant={match.status === "Completed" ? "default" : 
                                   match.status === "In Progress" ? "secondary" : "outline"}
                            className={match.status === "Completed" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                          >
                            {match.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/tournament-scoring/${id}/${match.id}`)}
                            >
                              {match.status === "Completed" ? 
                                <Check className="h-4 w-4" /> : 
                                <Trophy className="h-4 w-4" />
                              }
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default TournamentFixtures;
