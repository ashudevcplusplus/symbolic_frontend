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
      'How is this different from just using better prompts?',
    answer:
      'Better prompts help, but they\'re still unpredictable. promtflow.ai enforces strict contracts that guarantee your AI will work the same way every time. No more "it worked in testing but broke in production" moments.',
  },
  {
    question: 'Will this slow down my AI responses?',
    answer:
      'Actually, it speeds them up. By eliminating failed requests and unnecessary complexity, most teams see faster response times and lower costs. Plus, you\'ll spend less time debugging.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'We\'re launching with a simple pricing model: pay for what you use, with no hidden fees. Most teams save money by eliminating failed requests and optimizing their AI usage.',
  },
  {
    question: 'Can I try it with my existing AI setup?',
    answer:
      'Yes! promtflow.ai works with your existing AI models and infrastructure. You can start with a single feature and gradually add more contracts as you see the benefits.',
  },
  {
    question: 'What if my AI needs to be creative or flexible?',
    answer:
      'Contracts don\'t limit creativity—they ensure reliability. You can still get varied outputs, but within predictable bounds. Think of it like having guardrails on a highway: you can still drive anywhere, but you won\'t crash.',
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
            Questions You're Probably Asking
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Real questions from AI teams who are tired of unreliable systems and unpredictable costs.
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
