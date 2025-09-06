import React from 'react';

const problems = [
  {
    id: 1,
    title: 'Communicate with LLMs efficiently',
    description: 'Natural language entropy (aliasing, coreference drift) creates instruction variance. Unbounded decoding and schema-free replies yield nondeterministic I/O and brittle post-processing.',
    impact: 'Higher defect rate, ops toil, and increased latency/cost when retries occur.',
    solution: 'Replace raw prompts with contracts—typed inputs/outputs, enumerations, and decoding rules the model must satisfy.'
  },
  {
    id: 2,
    title: 'Control cost without degrading quality',
    description: 'Context bloat, verbose system prompts, and inefficient routing inflate tokens. Lack of attribution hides $/correct-answer and latency tail blowups.',
    impact: 'Unpredictable OpenAI bills, hidden quality/latency trade-offs, and wasted resources.',
    solution: 'Set per-step budgets, attribute costs to outcomes, and route based on intent, budget, and targets.'
  }
];

const Problems: React.FC = () => {
  return (
    <section className="py-26 bg-surface-1/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            The Problems We're Solving
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Natural language ambiguity is the root cause. Here's what we solve for high-stakes AI systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {problems.map((problem) => (
            <div
              key={problem.id}
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
                <div className="p-4 bg-negative/10 rounded-lg border border-negative/20">
                  <h4 className="text-sm font-semibold text-negative mb-2">Business Impact</h4>
                  <p className="text-sm text-text-secondary">{problem.impact}</p>
                </div>

                <div className="p-4 bg-positive/10 rounded-lg border border-positive/20">
                  <h4 className="text-sm font-semibold text-positive mb-2">Our Solution</h4>
                  <p className="text-sm text-text-secondary">{problem.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-accent-primary/10 rounded-2xl border border-accent-primary/20">
            <h3 className="text-xl font-extrabold font-heading text-text-primary mb-2">
              Who This Impacts
            </h3>
            <p className="text-text-secondary font-light">
              Built for professionals who can't afford uncertainty: researchers needing reproducible runs,
              high-precision teams in fintech/health/safety-critical domains, and AI engineers owning SLAs, budgets, and routing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;