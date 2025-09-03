import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
const Features = lazy(() => import('../components/Features'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Integrations = lazy(() => import('../components/Integrations'));
const Pricing = lazy(() => import('../components/Pricing'));
const FAQ = lazy(() => import('../components/FAQ'));
const CTA = lazy(() => import('../components/CTA'));
const Footer = lazy(() => import('../components/Footer'));

const LongLandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}><Features /></Suspense>
        <Suspense fallback={null}><HowItWorks /></Suspense>
        <Suspense fallback={null}><Testimonials /></Suspense>
        <Suspense fallback={null}><Integrations /></Suspense>
        <Suspense fallback={null}><Pricing /></Suspense>
        <Suspense fallback={null}><FAQ /></Suspense>
        <Suspense fallback={null}><CTA /></Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </>
  );
};

export default LongLandingPage;
