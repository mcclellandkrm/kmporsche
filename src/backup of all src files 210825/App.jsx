


import Navbar from './Navbar';
import StackedCards from './StackedCards';
import ClientsSection from './ClientsSection';
import Footer from './Footer';
// import ScrollSpySection from './ScrollSpySection';
import BentoCTA from './BentoCTA';
import Contact from './Contact';
import Hero from './Hero';
import LetsGetStarted from './LetsGetStarted';

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
        <StackedCards />
        <ClientsSection />
        {/* <ScrollSpySection /> */}
        <BentoCTA />
        <LetsGetStarted />
        <Footer />
      </>
    );
  };

  return getPage();
}

export default App;
