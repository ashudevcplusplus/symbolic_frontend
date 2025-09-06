import React from 'react';

// Type definitions for better type safety
interface Problem {
  id: number;
  title: string;
  description: string;
  impact: string;
  solution: string;
}

const problems: Problem[] = [
  {
    id: 1,
    title: 'Your AI breaks when it matters most',
    description:
      'Your prompts work perfectly in testing, then fail silently in production. The same request that worked yesterday returns garbage today. Your team spends more time debugging AI than building features.',
    impact:
      'Lost revenue from failed transactions, angry customers, and your team losing confidence in AI.',
    solution:
      'Synergize enforces strict contracts that guarantee consistent results. Your AI will work the same way every time, no matter what.',
  },
  {
    id: 2,
    title: 'AI costs are spiraling out of control',
    description:
      'Your monthly AI bill keeps growing, but you have no idea where the money is going. You\'re paying for failed requests, unnecessary complexity, and inefficient routing.',
    impact:
      'Budget overruns, CFO questions, and pressure to cut AI features that actually work.',
    solution:
      'Get granular cost control with per-request budgets, automatic routing, and detailed attribution. Know exactly what you\'re paying for.',
  },
];

const Problems: React.FC = React.memo(() => {
  return (
    <section className="py-26 bg-surface-1/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            Why Your AI Keeps Failing
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Every AI team faces these problems. Here's what's really breaking your production systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {problems.map((problem) => (
            <div
              key={`problem-${problem.id}`}
              className="bg-surface-1-augmented p-8 rounded-2xl border border-surface-3/50"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold font-heading text-text-primary mb-4">
                  {problem.title}
                </h3>
                <p className="text-text-secondary font-light text-pretty mb-6">
                  {problem.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-negative/10 rounded-lg border border-negative/20" role="region" aria-labelledby={`impact-${problem.id}`}>
                  <h4 id={`impact-${problem.id}`} className="text-sm font-semibold text-negative mb-2">
                    Business Impact
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {problem.impact}
                  </p>
                </div>

                <div className="p-4 bg-positive/10 rounded-lg border border-positive/20" role="region" aria-labelledby={`solution-${problem.id}`}>
                  <h4 id={`solution-${problem.id}`} className="text-sm font-semibold text-positive mb-2">
                    Our Solution
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-accent-primary/10 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-extrabold font-heading text-text-primary mb-2">
              Sound Familiar?
            </h3>
            <p className="text-text-secondary font-light">
              If you're shipping AI to customers, managing AI budgets, or building AI-powered products, 
              you've probably experienced these exact problems. Synergize fixes them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Problems.displayName = 'Problems';

export default Problems;
