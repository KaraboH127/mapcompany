import Hero from '../components/Hero';
import CompanyProfile from '../components/CompanyProfile';
import Architectural from '../components/Architectural';
import Engineering from '../components/Engineering';
import ProjectManagement from '../components/ProjectManagement';
import TradeTestCentrePromo from '../components/TradeTestCentrePromo';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyProfile />
      <Architectural />
      <Engineering />
      <ProjectManagement />
      <TradeTestCentrePromo />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
