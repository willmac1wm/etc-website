
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ProjectDetail from './components/ProjectDetail';
import BlogSection from './components/BlogSection';
import BlogPost from './components/BlogPost';
import LocationPage from './components/LocationPage';
import ServiceLocationPage from './components/ServiceLocationPage';
import CountyPage from './components/CountyPage';
import ServicePage from './components/ServicePage';
import Services from './components/Services';
import Contact from './components/Contact';
import ContactFooter from './components/ContactFooter';
import CapabilityStatement from './components/CapabilityStatement';

// Define a Home component that includes the Hero and a preview of services
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-yellow-200 selection:text-slate-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Service Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            
            {/* Gallery Routes */}
            <Route path="/gallery" element={<ProjectGallery />} />
            <Route path="/gallery/:id" element={<ProjectDetail />} />
            
            {/* Location Routes */}
            <Route path="/locations/county/:countySlug" element={<CountyPage />} />
            <Route path="/locations/:slug" element={<LocationPage />} />
            <Route path="/locations/:townSlug/:serviceSlug" element={<ServiceLocationPage />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            <Route path="/contact" element={<Contact />} />
            
            {/* Capability Statement Route */}
            <Route path="/capability-statement" element={<CapabilityStatement />} />
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </HashRouter>
  );
};

export default App;
