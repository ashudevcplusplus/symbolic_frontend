import React, { useState, FormEvent } from 'react';

interface NewsletterProps {
  action?: string;
}

const Newsletter: React.FC<NewsletterProps> = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    setEmailError('');
    setMessage('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would send the email to your backend
      console.log('Newsletter signup:', email);

      setStatus('success');
      setMessage(
        "Thanks for joining! We'll notify you when early access is ready."
      );
      setEmail('');
    } catch {
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
              Stop Losing Sleep Over AI Failures
            </h3>
            <p className="text-text-secondary mb-8">
              Be among the first to fix your AI reliability problems. 
              Get early access to promtflow.ai and join teams who've already solved this.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'submitting'}
                  className={`flex-1 px-4 py-3 rounded-md border bg-surface-1 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${
                    emailError 
                      ? 'border-danger focus:ring-danger' 
                      : 'border-surface-2 focus:ring-accent-primary'
                  }`}
                  aria-label="Email address"
                  aria-invalid={emailError ? 'true' : 'false'}
                  aria-describedby={emailError ? 'email-error' : undefined}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting' || !email.trim()}
                  className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-md hover:bg-accent-mid focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'submitting' ? 'Getting Access...' : 'Get Early Access'}
                </button>
              </div>

              {emailError && (
                <p id="email-error" className="text-sm text-danger">
                  {emailError}
                </p>
              )}

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
