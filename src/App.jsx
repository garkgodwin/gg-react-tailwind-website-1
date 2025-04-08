import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);


  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App
