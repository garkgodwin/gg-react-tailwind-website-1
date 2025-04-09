import React, {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router'

// pages
const  Home = lazy(() => import('../pages/home/Home'));
const  About = lazy(() => import('../pages/about/About'));
const  Contact = lazy(() => import('./../pages/contact/Contact'));
const  Listings = lazy(() => import('../pages/listings/Listings'));
const  ListingDetails = lazy(() => import('./../pages/listings/ListingDetails'));
const  TermsConditions = lazy(() => import('./../pages/terms-conditions/TermsConditions'));
const  PrivacyPolicy = lazy(() => import('./../pages/privacy-policy/PrivacyPolicy'));

import NotFound from './../pages/not-found/NotFound';
import PageLoader from './../pages/PageLoader';

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
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

    </Suspense>
  )
}

export default AppRoutes