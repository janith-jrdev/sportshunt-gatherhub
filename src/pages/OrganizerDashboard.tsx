
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, PlusCircle, Calendar, Edit, Eye, BarChart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const OrganizerDashboard = () => {
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
            
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Create Tournament
            </Button>
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
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
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
                <Button>Create Tournament</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No past tournaments</h3>
                <p className="text-muted-foreground mb-4">You haven't organized any tournaments yet.</p>
                <Button>Create Tournament</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </MainLayout>
    </>
  );
};

export default OrganizerDashboard;
