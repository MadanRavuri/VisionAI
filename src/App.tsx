import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BotVision from './pages/BotVision';
import ITStaffing from './pages/ITStaffing';
import FullCycleDevelopment from './pages/FullCycleDevelopment';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
// Admin pages removed as part of cleanup
import RouteTransitionVideo from './components/RouteTransitionVideo';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
  <RouteTransitionVideo />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/bot-vision" element={<BotVision />} />
            <Route path="services/it-staffing" element={<ITStaffing />} />
            <Route path="services/full-cycle-development" element={<FullCycleDevelopment />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;