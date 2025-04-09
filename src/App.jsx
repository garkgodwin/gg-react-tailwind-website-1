import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router';
import PageLoader from './pages/PageLoader';

function App() {
  const location = useLocation();
  const [ready, setReady] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true))
  }, [])

  if(ready){
    return (
      <>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </>
    )
  }
  else{
    return <PageLoader/>
  }
}

export default App
