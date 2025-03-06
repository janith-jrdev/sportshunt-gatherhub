
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft,
  Search,
  Plus,
  UserPlus,
  RefreshCw,
  Download,
  Edit,
  Trash2
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for teams and players
const teamData = {
  categories: [
    { id: "1", name: "Men's Singles", gender: "Men", ageGroup: "Open" },
    { id: "2", name: "Women's Singles", gender: "Women", ageGroup: "Open" },
    { id: "3", name: "Mixed Doubles", gender: "Mixed", ageGroup: "Under 18" }
  ],
  players: [
    { id: "p1", name: "Nivan", category: "1", registrationType: "Online", status: "Confirmed" },
    { id: "p2", name: "Bhavith L", category: "1", registrationType: "Online", status: "Confirmed" },
    { id: "p3", name: "Tushar", category: "1", registrationType: "Offline", status: "Confirmed" },
    { id: "p4", name: "Ishant", category: "1", registrationType: "Offline", status: "Confirmed" },
    { id: "p5", name: "Sharwin", category: "1", registrationType: "Online", status: "Confirmed" },
    { id: "p6", name: "Chirag", category: "1", registrationType: "Online", status: "Confirmed" },
    { id: "p7", name: "Vihaan", category: "1", registrationType: "Online", status: "Confirmed" },
    
    { id: "p8", name: "Anjali", category: "2", registrationType: "Online", status: "Confirmed" },
    { id: "p9", name: "Riya", category: "2", registrationType: "Online", status: "Confirmed" },
    
    { id: "p10", name: "Ravi & Anjali", category: "3", registrationType: "Offline", status: "Confirmed" },
    { id: "p11", name: "Vikram & Neha", category: "3", registrationType: "Online", status: "Confirmed" }
  ]
};

const TournamentTeams = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = teamData.players.filter(player => 
    player.category === activeCategory && 
    (searchTerm === "" || player.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              <h1 className="text-2xl font-bold">Teams & Participants</h1>
              <p className="text-muted-foreground mt-1">Manage players and teams for your tournament</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Tournament Participants</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <Select value={activeCategory} onValueChange={setActiveCategory}>
                    <SelectTrigger className="w-[220px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamData.categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search participants..." 
                      className="pl-10 w-full md:w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Participant
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Category</th>
                      <th className="text-left py-3 px-4 font-medium">Registration</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPlayers.length > 0 ? (
                      filteredPlayers.map((player) => (
                        <tr key={player.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="font-medium">{player.name}</div>
                          </td>
                          <td className="py-3 px-4">
                            {teamData.categories.find(c => c.id === player.category)?.name}
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className={player.registrationType === "Online" ? "bg-blue-50 text-blue-600 hover:bg-blue-50" : "bg-orange-50 text-orange-600 hover:bg-orange-50"}>
                              {player.registrationType}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={player.status === "Confirmed" ? "default" : "outline"} className={player.status === "Confirmed" ? "bg-green-100 text-green-600 hover:bg-green-100" : ""}>
                              {player.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-muted-foreground">
                          No participants found for this category.
                        </td>
                      </tr>
                    )}
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

export default TournamentTeams;
