import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserAuth from "./pages/auth/UserAuth";
import LawyerAuth from "./pages/auth/LawyerAuth";
import UserDashboard from "./pages/dashboards/UserDashboard";
import LawyerDashboard from "./pages/dashboards/LawyerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/user" element={<UserAuth />} />
          <Route path="/auth/lawyer" element={<LawyerAuth />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/lawyer" element={<LawyerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
