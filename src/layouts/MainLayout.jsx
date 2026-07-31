import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToHash from '../components/ScrollToHash';

export default function MainLayout() {
  return (
    <>
      <ScrollToHash />
      <header aria-label="Site header">
        <Topbar />
        <Navbar />
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
