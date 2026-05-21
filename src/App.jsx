import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import Architectural from './components/Architectural';
import Engineering from './components/Engineering';
import ProjectManagement from './components/ProjectManagement';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <CompanyProfile />
        <Architectural />
        <Engineering />
        <ProjectManagement />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
