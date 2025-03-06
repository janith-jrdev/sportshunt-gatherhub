
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Calendar, Trophy, Users, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tournaments = [
  {
    id: 1,
    title: "Summer Basketball Championship",
    sport: "Basketball",
    date: "June 15 - June 30, 2023",
    location: "Central Park Courts",
    slots: "16/32 spots filled",
    status: "Open for registration",
    entryFee: "$25",
    categories: ["Men's Open", "Women's Open", "Under 18"],
    image: "https://source.unsplash.com/random/800x600?basketball"
  },
  {
    id: 2,
    title: "Regional Soccer Tournament",
    sport: "Soccer",
    date: "July 10 - July 24, 2023",
    location: "Riverside Sports Complex",
    slots: "12/24 teams registered",
    status: "Open for registration",
    entryFee: "$150 per team",
    categories: ["Men's Division", "Women's Division", "Youth Division"],
    image: "https://source.unsplash.com/random/800x600?soccer"
  },
  {
    id: 3,
    title: "Annual Tennis Open",
    sport: "Tennis",
    date: "August 5 - August 12, 2023",
    location: "Metro Tennis Club",
    slots: "24/64 spots filled",
    status: "Open for registration",
    entryFee: "$35",
    categories: ["Singles", "Doubles", "Mixed Doubles", "Junior"],
    image: "https://source.unsplash.com/random/800x600?tennis"
  },
  {
    id: 4,
    title: "Volleyball Beach Tournament",
    sport: "Volleyball",
    date: "July 15 - July 16, 2023",
    location: "Sunny Beach",
    slots: "8/16 teams registered",
    status: "Open for registration",
    entryFee: "$100 per team",
    categories: ["Men's Doubles", "Women's Doubles", "Mixed Doubles"],
    image: "https://source.unsplash.com/random/800x600?volleyball"
  },
];

const PlayerTournaments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const filteredTournaments = tournaments.filter(tournament => 
    tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tournament.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tournament.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRegister = (tournament) => {
    navigate("/tournament-registration", { state: { tournament } });
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Upcoming Tournaments</h1>
              <p className="text-muted-foreground mt-1">Find and register for sports events near you</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search tournaments..."
                  className="pl-10 w-full md:w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <div 
                  className="h-40 bg-gray-100 relative"
                  style={{
                    backgroundImage: `url(${tournament.image})`,
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
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      {tournament.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      {tournament.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      {tournament.slots}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Trophy className="h-4 w-4 mr-2 flex-shrink-0" />
                      Entry Fee: {tournament.entryFee}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tournament.categories.slice(0, 2).map((category, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                    {tournament.categories.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{tournament.categories.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => handleRegister(tournament)}
                  >
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PlayerTournaments;
