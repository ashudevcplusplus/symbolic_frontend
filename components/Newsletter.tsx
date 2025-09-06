import React, { useState, FormEvent } from 'react';

interface NewsletterProps {
  action?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ action = '#' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would send the email to your backend
      console.log('Newsletter signup:', email);

      setStatus('success');
      setMessage('Thanks for joining! We\'ll notify you when we\'re ready for broader access.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-lg p-8 text-center"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              border: 'inset 0 0 0 1px hsl(var(--surface-3) / .6)',
            }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Join the Waitlist
            </h3>
            <p className="text-text-secondary mb-8">
              Be among the first to experience the precision layer for mission-critical AI. Enter your email address below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'submitting'}
                  className="flex-1 px-4 py-3 rounded-md border border-surface-2 bg-surface-1 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting' || !email.trim()}
                  className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-md hover:bg-accent-mid focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>

              {message && (
                <p
                  className={`text-sm ${status === 'success' ? 'text-positive' : 'text-danger'}`}
                >
                  {message}
                </p>
              )}
            </form>

            <p className="text-xs text-text-muted mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
