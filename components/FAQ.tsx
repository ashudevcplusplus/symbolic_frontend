import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

// Type definitions for better type safety
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      'What makes this different from existing prompt management tools?',
    answer:
      'We focus on deterministic contracts, cost discipline, and proving coverage rather than just versioning prompts. Built for high-stakes environments where "probably correct" isn\'t enough—we enforce executable contracts at runtime with typed I/O, budgets, guardrails, and continuous evaluation.',
  },
  {
    question: 'Who should join the waitlist?',
    answer:
      'Researchers needing low-variance, reproducible runs; high-precision teams in fintech, health, or safety-critical domains who must bound failure modes and prove coverage; and AI platform owners who need cost control, governance, and audit trails.',
  },
  {
    question: 'When will this be available?',
    answer:
      "We're working with select organizations to shape the standard. Join the waitlist to be notified when we're ready for broader access—we're focusing on getting the foundation right before scaling.",
  },
  {
    question: 'How does contract-based communication work?',
    answer:
      'Instead of free-form natural language prompts that can be interpreted differently each time, you define typed contracts with specific input/output schemas, validation rules, and execution constraints. The AI must satisfy these contracts, eliminating ambiguity and ensuring deterministic results.',
  },
  {
    question: 'What kind of cost control and attribution do you provide?',
    answer:
      'We provide granular cost attribution down to individual requests, per-step budgets, automatic routing based on cost targets, and detailed analytics showing $/correct-answer ratios. You can set policies that prevent overspending while maintaining quality.',
  },
];

const FaqItem: React.FC<{
  item: (typeof faqData)[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div
      className="mb-4"
      style={{ borderBottom: '1px solid hsl(var(--surface-2))' }}
    >
      <button
        onClick={onClick}
        className={`flex justify-between items-center w-full text-left focus:outline-none focus-visible:shadow-focus-glow rounded-md`}
        style={{
          paddingBlock: 24,
          backgroundColor: isOpen ? 'var(--accent-tint)' : 'transparent',
        }}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-text-primary">
          {item.question}
        </span>
        <ChevronDownIcon
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-primary' : 'rotate-0 text-text-muted'}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        style={{ willChange: 'opacity' }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-text-secondary font-light text-pretty">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-26 bg-surface-1">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Everything you need to know about our platform for precision AI
            communication.
          </p>
        </div>
        <div className="max-w-reading mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={`faq-${index}`}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
