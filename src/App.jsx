import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import TradeTestCentre from './pages/TradeTestCentre';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/trade-test-centre" element={<TradeTestCentre />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
