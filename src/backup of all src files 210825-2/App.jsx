



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


function App() {
  // Simple page routing for demonstration (replace with React Router for real app)
  const getPage = () => {
    if (window.location.pathname === "/contact") {
      return <Contact />;
    }
    return (
      <>
  <Navbar />
  <Hero />
  <FeaturesHowItWorks />
  <KeyReasons />
  <BusinessDevelopment />
  <OperationalEfficiency />
  <CustomerExperience />
  <SectorApplications />
  <StackedCards />
  <ClientsSection />
  <CaseStudy />
  <BentoCTA />
  <LetsGetStarted />
  <Footer />
      </>
    );
  };

  return getPage();
}

export default App;
