import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Events from "./pages/Events";   
// import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import PrivacyPolicy from "./pages/privacy-policy";
import ProductDetail from "@/components/ProductDetail";
import ServiceDetails from "@/components/ServiceDetails";
import IndustryDetails from "./components/IndustryDetails";
import ScrollToTop from "./components/ScrollToTop";

import EventDetails from "./components/EventDetails";

import BlogDetails from "./components/BlogDetails";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/industries/:id" element={<IndustryDetails />} />

          {/* This route correctly defines the parameter as `eventId` */}
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          {/* 👇 Catch-all route should always be last */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// chitti changes 
