
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, PlusCircle, Calendar, Edit, Eye, BarChart, Table, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const tournaments = [
  {
    id: 1,
    title: "Summer Basketball League",
    date: "Starting June 15, 2023",
    participants: 32,
    status: "Active",
    sport: "Basketball"
  },
  {
    id: 2,
    title: "Fall Tennis Tournament",
    date: "Starting Sept 5, 2023",
    participants: 24,
    status: "Draft",
    sport: "Tennis"
  },
];

const fixtures = [
  {
    id: 1,
    tournamentId: 1,
    homeTeam: "Team Alpha",
    awayTeam: "Team Bravo",
    date: "June 15, 2023",
    time: "10:00 AM",
    location: "Court 1",
    status: "Scheduled",
    category: "Men's Open"
  },
  {
    id: 2,
    tournamentId: 1,
    homeTeam: "Team Charlie",
    awayTeam: "Team Delta",
    date: "June 15, 2023",
    time: "12:00 PM",
    location: "Court 2",
    status: "Scheduled",
    category: "Men's Open"
  },
  {
    id: 3,
    tournamentId: 1,
    homeTeam: "Team Echo",
    awayTeam: "Team Foxtrot",
    date: "June 16, 2023",
    time: "10:00 AM",
    location: "Court 1",
    status: "Scheduled",
    category: "Women's Open"
  }
];

const OrganizerDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your tournaments and participants</p>
            </div>
            
            <Button 
              className="flex items-center gap-2"
              onClick={() => navigate("/tournament-creation")}
            >
              <PlusCircle className="h-4 w-4" />
              Create Tournament
            </Button>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Trophy className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">GET.SET.HUNT</h3>
                <p className="text-green-700 text-sm">Create and manage your tournaments, track participants, and oversee matches all in one place.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  <span className="text-3xl font-bold">2</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-3xl font-bold">56</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-3xl font-bold">3</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="active" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="mt-0">
              <div className="grid grid-cols-1 gap-4">
                {tournaments.filter(t => t.status === "Active").map((tournament) => (
                  <Card key={tournament.id} className="overflow-hidden">
                    <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Trophy className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{tournament.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-sm text-muted-foreground">{tournament.date}</span>
                            <span className="text-sm text-muted-foreground">
                              <Users className="h-3 w-3 inline mr-1" />
                              {tournament.participants} participants
                            </span>
                            <span className="text-xs bg-green-50 text-green-600 py-0.5 px-2 rounded-full font-medium">
                              {tournament.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-1"
                          onClick={() => navigate(`/tournament-management/${tournament.id}`)}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Edit className="h-4 w-4" />
                          <span className="hidden sm:inline">Edit</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <BarChart className="h-4 w-4" />
                          <span className="hidden sm:inline">Stats</span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="drafts" className="mt-0">
              <div className="grid grid-cols-1 gap-4">
                {tournaments.filter(t => t.status === "Draft").map((tournament) => (
                  <Card key={tournament.id} className="overflow-hidden">
                    <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Trophy className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{tournament.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-sm text-muted-foreground">{tournament.date}</span>
                            <span className="text-sm text-muted-foreground">
                              <Users className="h-3 w-3 inline mr-1" />
                              {tournament.participants} participants
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full font-medium">
                              {tournament.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span className="hidden sm:inline">Preview</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Edit className="h-4 w-4" />
                          <span className="hidden sm:inline">Edit</span>
                        </Button>
                        <Button variant="default" size="sm">
                          Publish
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No upcoming tournaments</h3>
                <p className="text-muted-foreground mb-4">You don't have any upcoming tournaments scheduled.</p>
                <Button onClick={() => navigate("/tournament-creation")}>Create Tournament</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No past tournaments</h3>
                <p className="text-muted-foreground mb-4">You haven't organized any tournaments yet.</p>
                <Button onClick={() => navigate("/tournament-creation")}>Create Tournament</Button>
              </div>
            </TabsContent>

            <TabsContent value="fixtures" className="mt-0">
              {fixtures.length > 0 ? (
                <Card>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold">Tournament Fixtures</h2>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => navigate(`/tournament-fixtures/1`)}
                      >
                        <PlusCircle className="h-4 w-4" />
                        Add Fixture
                      </Button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Match</th>
                            <th className="text-left py-3 px-4 font-medium">Date & Time</th>
                            <th className="text-left py-3 px-4 font-medium">Location</th>
                            <th className="text-left py-3 px-4 font-medium">Category</th>
                            <th className="text-left py-3 px-4 font-medium">Status</th>
                            <th className="text-left py-3 px-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fixtures.map((fixture) => (
                            <tr key={fixture.id} className="border-b hover:bg-muted/50">
                              <td className="py-3 px-4">
                                <div className="font-medium">{fixture.homeTeam} vs {fixture.awayTeam}</div>
                              </td>
                              <td className="py-3 px-4">
                                <div>{fixture.date}</div>
                                <div className="text-sm text-muted-foreground">{fixture.time}</div>
                              </td>
                              <td className="py-3 px-4">{fixture.location}</td>
                              <td className="py-3 px-4">
                                <Badge variant="outline">{fixture.category}</Badge>
                              </td>
                              <td className="py-3 px-4">
                                <Badge 
                                  variant={fixture.status === "Completed" ? "default" : 
                                          fixture.status === "In Progress" ? "secondary" : "outline"}
                                >
                                  {fixture.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => navigate(`/tournament-fixtures/${fixture.tournamentId}`)}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Table className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No fixtures available</h3>
                  <p className="text-muted-foreground mb-4">You haven't created any fixtures yet.</p>
                  <Button>Create Fixtures</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </MainLayout>
    </>
  );
};

export default OrganizerDashboard;
