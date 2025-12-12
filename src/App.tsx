import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutTour from "./pages/AboutTour";
import ExtraServices from "./pages/ExtraServices";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import { ToTop } from "./components/ToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<AboutTour />} />
            <Route path="/servicos" element={<ExtraServices />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/produto/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
