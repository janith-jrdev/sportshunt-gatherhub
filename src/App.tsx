
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserType from "./pages/UserType";
import PlayerDashboard from "./pages/PlayerDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import NotFound from "./pages/NotFound";
import Tournaments from "./pages/Tournaments";
import PlayerTournaments from "./pages/PlayerTournaments";
import TournamentCreation from "./pages/TournamentCreation";
import TournamentRegistration from "./pages/TournamentRegistration";
import TournamentManagement from "./pages/TournamentManagement";
import TournamentFixtures from "./pages/TournamentFixtures";
import TournamentTeams from "./pages/TournamentTeams";
import TournamentScoring from "./pages/TournamentScoring";

// E-commerce Pages (to be implemented later)
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import UserDashboard from "./pages/UserDashboard";
// import CategoryPage from "./pages/CategoryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-type" element={<UserType />} />
            <Route path="/player-dashboard" element={<PlayerDashboard />} />
            <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/player-tournaments" element={<PlayerTournaments />} />
            <Route path="/tournament-creation" element={<TournamentCreation />} />
            <Route path="/tournament-registration" element={<TournamentRegistration />} />
            <Route path="/tournament-management/:id" element={<TournamentManagement />} />
            <Route path="/tournament-fixtures/:id" element={<TournamentFixtures />} />
            <Route path="/tournament-teams/:id" element={<TournamentTeams />} />
            <Route path="/tournament-scoring/:id/:matchId" element={<TournamentScoring />} />
            
            {/* E-commerce Routes (uncomment when implementing) */}
            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/user-dashboard" element={<UserDashboard />} /> */}
            {/* <Route path="/category/:slug" element={<CategoryPage />} /> */}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
