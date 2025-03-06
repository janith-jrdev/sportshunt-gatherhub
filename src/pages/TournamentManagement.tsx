
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Info,
  FileText,
  ChevronLeft
} from "lucide-react";

// Mock data for the tournament
const tournament = {
  id: "1",
  name: "Summer Sports Championship 2023",
  organizer: "SportsHunt Official",
  status: "Active",
  sport: "Badminton",
  startDate: "2023-06-15",
  endDate: "2023-06-20",
  startTime: "09:00 AM",
  venue: "SportsHunt Arena, Block 7",
  description: "Join us for an exciting summer of competitive sports at the SportsHunt Arena.",
  entryFee: "$25",
  categories: [
    { id: "1", name: "Men's Singles", gender: "Men", ageGroup: "Open" },
    { id: "2", name: "Women's Singles", gender: "Women", ageGroup: "Open" },
    { id: "3", name: "Mixed Doubles", gender: "Mixed", ageGroup: "Under 18" }
  ],
  format: "both",
  fixtureFormat: "bestOfThree",
  allowOfflineEntries: true
};

const TournamentManagement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");

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
              onClick={() => navigate("/organizer-dashboard")}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{tournament.name}</h1>
                <Badge variant={tournament.status === "Active" ? "default" : "outline"}>
                  {tournament.status}
                </Badge>
              </div>
              <p className="text-muted-foreground mt-1">Tournament ID: {id}</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Trophy className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">GET.SET.HUNT</h3>
                <p className="text-green-700 text-sm">Manage your tournament, track participants, and generate fixtures.</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
              <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Tournament Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-muted-foreground">Tournament Name</Label>
                        <p className="font-medium">{tournament.name}</p>
                      </div>
                      
                      <div>
                        <Label className="text-muted-foreground">Organizer</Label>
                        <p className="font-medium">{tournament.organizer}</p>
                      </div>
                      
                      <div>
                        <Label className="text-muted-foreground">Sport</Label>
                        <p className="font-medium">{tournament.sport}</p>
                      </div>
                      
                      <div>
                        <Label className="text-muted-foreground">Format</Label>
                        <p className="font-medium capitalize">
                          {tournament.format === "knockout" ? "Knockout" : 
                           tournament.format === "league" ? "League / Round Robin" : 
                           "Mixed Format (Group + Knockout)"}
                        </p>
                      </div>
                      
                      <div>
                        <Label className="text-muted-foreground">Fixture Format</Label>
                        <p className="font-medium">
                          {tournament.fixtureFormat === "bestOfThree" ? "Best of Three" : 
                           tournament.fixtureFormat === "bestOfFive" ? "Best of Five" : 
                           tournament.fixtureFormat === "timed" ? "Timed Matches" : 
                           "Single Match"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <Label className="text-muted-foreground">Tournament Dates</Label>
                          <p className="font-medium">{new Date(tournament.startDate).toLocaleDateString()} to {new Date(tournament.endDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <Label className="text-muted-foreground">Start Time</Label>
                          <p className="font-medium">{tournament.startTime}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <Label className="text-muted-foreground">Venue</Label>
                          <p className="font-medium">{tournament.venue}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <Label className="text-muted-foreground">Offline Entries</Label>
                          <p className="font-medium">{tournament.allowOfflineEntries ? "Allowed" : "Not allowed"}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <Label className="text-muted-foreground">Entry Fee</Label>
                          <p className="font-medium">{tournament.entryFee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-muted-foreground">Description</Label>
                    <p className="text-sm mt-1">{tournament.description}</p>
                  </div>

                  <div className="pt-4">
                    <Label className="text-muted-foreground mb-2 block">Categories</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {tournament.categories.map((category) => (
                        <div key={category.id} className="bg-muted p-3 rounded-md">
                          <p className="font-medium">{category.name}</p>
                          <p className="text-sm text-muted-foreground">{category.gender} • {category.ageGroup}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button variant="outline" className="mr-2">
                      <Info className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button>
                      Edit Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teams" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Teams & Participants</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigate(`/tournament-teams/${id}`)}>
                      Manage Teams
                    </Button>
                    <Button size="sm">
                      Add Participants
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between border-b pb-3 mb-4">
                    <p className="font-medium text-muted-foreground">Total registered: 32 participants</p>
                    <div className="flex gap-2">
                      <Badge variant="outline">Men's Singles (12)</Badge>
                      <Badge variant="outline">Women's Singles (8)</Badge>
                      <Badge variant="outline">Mixed Doubles (6 teams)</Badge>
                    </div>
                  </div>
                  
                  <div className="text-center py-12">
                    <Button onClick={() => navigate(`/tournament-teams/${id}`)}>
                      View All Teams & Participants
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fixtures" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Tournament Fixtures</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigate(`/tournament-fixtures/${id}`)}>
                      View Fixtures
                    </Button>
                    <Button size="sm">
                      Generate Fixtures
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Info className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-yellow-800">Fixtures Management</h3>
                        <p className="text-yellow-700 text-sm">Generate and manage tournament fixtures for all categories and rounds.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center py-8">
                    <Button onClick={() => navigate(`/tournament-fixtures/${id}`)}>
                      Manage Tournament Fixtures
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Tournament Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-muted-foreground">No results available yet</p>
                    <Button className="mt-4" variant="outline">
                      Enter Match Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Tournament Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tournament-status">Tournament Status</Label>
                      <select 
                        id="tournament-status" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                      >
                        <option value="draft">Draft</option>
                        <option value="registration">Registration Open</option>
                        <option value="active" selected>Active</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="registration-deadline">Registration Deadline</Label>
                      <Input 
                        id="registration-deadline" 
                        type="date" 
                        defaultValue="2023-06-14"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label>Danger Zone</Label>
                      <div className="border border-destructive/20 rounded-md p-4 mt-1">
                        <h4 className="font-medium text-destructive">Cancel Tournament</h4>
                        <p className="text-sm text-muted-foreground mt-1 mb-3">Once cancelled, all fixtures and registrations will be void.</p>
                        <Button variant="destructive" size="sm">Cancel Tournament</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button>
                      Save Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </MainLayout>
    </>
  );
};

export default TournamentManagement;
