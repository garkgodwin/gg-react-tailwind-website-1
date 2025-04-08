import React from 'react'
import { Route, Routes } from 'react-router'

// pages
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Service from './../pages/service/Service';
import Contact from './../pages/contact/Contact';
import Listings from '../pages/listings/Listings';
import ListingDetails from './../pages/listings/ListingDetails';
import TermsConditions from './../pages/terms-conditions/TermsConditions';
import PrivacyPolicy from './../pages/privacy-policy/PrivacyPolicy';

import NotFound from './../pages/not-found/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/listings' element={<Listings/>}/>
      <Route path='/listings/:id' element={<ListingDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/terms' element={<TermsConditions/>}/>
      <Route path='/privacy' element={<PrivacyPolicy/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes