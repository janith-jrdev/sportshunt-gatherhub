
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Calendar, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";

const tournaments = [
  {
    id: 1,
    title: "City Basketball Championship",
    date: "May 15, 2023",
    location: "Central Park Courts",
    slots: "8/16 spots filled",
    status: "Upcoming",
    sport: "Basketball"
  },
  {
    id: 2,
    title: "Regional Soccer Tournament",
    date: "June 5, 2023",
    location: "Riverside Fields",
    slots: "12/24 spots filled",
    status: "Upcoming",
    sport: "Soccer"
  },
  {
    id: 3,
    title: "Tennis Open",
    date: "July 10, 2023",
    location: "Metro Tennis Club",
    slots: "16/32 spots filled",
    status: "Open for registration",
    sport: "Tennis"
  },
];

const PlayerDashboard = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Find Tournaments</h1>
              <p className="text-muted-foreground mt-1">Discover and register for sports events near you</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search tournaments..."
                  className="pl-10 w-full md:w-80"
                />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <div 
                  className="h-40 bg-gray-100 relative"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/random/800x600?${tournament.sport})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute top-3 right-3 bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {tournament.sport}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{tournament.title}</h3>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {tournament.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {tournament.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Trophy className="h-4 w-4 mr-2" />
                      {tournament.slots}
                    </div>
                  </div>
                  
                  <Button className="w-full">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PlayerDashboard;
