




import Navbar from './Navbar';
import StackedCards from './StackedCards';
import KeyReasons from './KeyReasons';
import BusinessDevelopment from './BusinessDevelopment';
import OperationalEfficiency from './OperationalEfficiency';
import CustomerExperience from './CustomerExperience';
import SectorApplications from './SectorApplications';
import ClientsSection from './ClientsSection';
import Footer from './Footer';
import BentoCTA from './BentoCTA';
import Contact from './Contact';
import Hero from './Hero';
import LetsGetStarted from './LetsGetStarted';
import FeaturesHowItWorks from './FeaturesHowItWorks';
import CaseStudy from './CaseStudy';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';



function Home() {
  return (
    <><div>Hello World</div>
      <Navbar />
      <Hero />
      <ClientsSection />
      <KeyReasons />
      <FeaturesHowItWorks />
      <StackedCards />
      <CaseStudy />
      <BentoCTA />
      <LetsGetStarted />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-development" element={<><Navbar /><BusinessDevelopment /><Footer /></>} />
        <Route path="/operational-efficiency" element={<><Navbar /><OperationalEfficiency /><Footer /></>} />
        <Route path="/customer-experience" element={<><Navbar /><CustomerExperience /><Footer /></>} />
        <Route path="/sector-applications" element={<><Navbar /><SectorApplications /><Footer /></>} />
  <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
