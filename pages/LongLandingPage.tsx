import React, { Suspense, lazy } from 'react';

// Lazy load all major components for better performance
const Header = lazy(() => import('../components/Header'));
const Hero = lazy(() => import('../components/Hero'));
const SocialProofBar = lazy(() => import('../components/SocialProofBar'));
const Features = lazy(() => import('../components/Features'));
const StatsKPI = lazy(() => import('../components/StatsKPI'));
const VideoLightbox = lazy(() => import('../components/VideoLightbox'));
const ComparisonTable = lazy(() => import('../components/ComparisonTable'));
const Integrations = lazy(() => import('../components/Integrations'));
const SecurityCompliance = lazy(
  () => import('../components/SecurityCompliance')
);
const Pricing = lazy(() => import('../components/Pricing'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));
const Newsletter = lazy(() => import('../components/Newsletter'));
const Footer = lazy(() => import('../components/Footer'));
const ChangelogTicker = lazy(() => import('../components/ChangelogTicker'));
const CookieConsent = lazy(() => import('../components/CookieConsent'));
const ProgressBackToTop = lazy(() => import('../components/ProgressBackToTop'));
const Problems = lazy(() => import('../components/Problems'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
  </div>
);

const LongLandingPage: React.FC = () => {
  // Sample data for new components
  const statsData = [
    { label: 'Active Users', value: '50K+', footnote: 'and growing daily' },
    { label: 'Uptime', value: '99.9%', footnote: 'industry leading' },
    { label: 'Response Time', value: '<100ms', footnote: 'lightning fast' },
  ];

  const comparisonData = {
    columns: [{ label: 'Synergize' }, { label: 'Competitor X' }],
    rows: [
      {
        feature: 'AI Model Integration',
        ours: true,
        theirs: false,
        note: 'Native support for 50+ models',
      },
      { feature: 'Real-time Processing', ours: true, theirs: true },
      { feature: 'Enterprise Security', ours: true, theirs: false },
      { feature: 'Custom Workflows', ours: true, theirs: true },
      {
        feature: 'API Rate Limits',
        ours: false,
        theirs: true,
        note: "We don't limit your creativity",
      },
    ],
  };

  const changelogEntries = [
    {
      date: 'Dec 15',
      tag: 'NEW',
      summary: 'Added support for GPT-4 Turbo',
      href: '/changelog#gpt4-turbo',
    },
    {
      date: 'Dec 12',
      tag: 'IMPROVED',
      summary: 'Enhanced prompt playground with templates',
      href: '/changelog#prompt-templates',
    },
    {
      date: 'Dec 10',
      tag: 'FIXED',
      summary: 'Resolved memory leak in long-running sessions',
      href: '/changelog#memory-fix',
    },
  ];

  return (
    <>
      {/* Navigation */}
      <Suspense fallback={<LoadingFallback />}>
        <Header />
      </Suspense>

      <main>
        {/* Hero Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>

        {/* Problems Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Problems />
        </Suspense>

        {/* Social Proof */}
        <Suspense fallback={<LoadingFallback />}>
          <SocialProofBar blurb="Trusted by leading companies worldwide" />
        </Suspense>

        {/* Features */}
        <Suspense fallback={<LoadingFallback />}>
          <Features />
        </Suspense>

        {/* Stats KPI */}
        <Suspense fallback={<LoadingFallback />}>
          <StatsKPI stats={statsData} />
        </Suspense>

        {/* Video Demo */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-8">
                See It In Action
              </h2>
              <VideoLightbox
                thumbnail="/api/placeholder/800/450"
                videoUrl="/demo-video.mp4"
              />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <Suspense fallback={<LoadingFallback />}>
          <ComparisonTable {...comparisonData} />
        </Suspense>

        {/* Integrations */}
        <Suspense fallback={<LoadingFallback />}>
          <Integrations />
        </Suspense>

        {/* Security & Compliance */}
        <Suspense fallback={<LoadingFallback />}>
          <SecurityCompliance />
        </Suspense>

        {/* Pricing */}
        <Suspense fallback={<LoadingFallback />}>
          <Pricing />
        </Suspense>

        {/* Testimonials */}
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>

        {/* FAQ */}
        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>

        {/* Newsletter */}
        <Suspense fallback={<LoadingFallback />}>
          <Newsletter />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

      {/* Changelog Ticker */}
      <Suspense fallback={null}>
        <ChangelogTicker entries={changelogEntries} />
      </Suspense>

      {/* Utility Components */}
      <Suspense fallback={null}>
        <ProgressBackToTop />
      </Suspense>

      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </>
  );
};

export default LongLandingPage;
