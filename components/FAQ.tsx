import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqData = [
  {
    question: 'What kind of data can I integrate with Synergize?',
    answer:
      'Synergize supports a wide range of data sources, including popular cloud services, databases, and APIs. You can connect everything from your CRM and project management tools to custom internal systems to create a unified data constellation.',
  },
  {
    question: 'Is Synergize secure for sensitive enterprise data?',
    answer:
      'Absolutely. Security is our prime directive. We employ end-to-end encryption, role-based access controls, and regular security audits to ensure your data is protected with enterprise-grade security protocols.',
  },
  {
    question: 'How do the AI automation agents work?',
    answer:
      'Our AI agents are easy to configure through a no-code visual interface. You can define triggers, actions, and decision logic to automate complex workflows. They operate 24/7 to execute tasks, analyze data, and even generate reports.',
  },
  {
    question: 'Can I customize the analytics dashboards?',
    answer:
      'Yes, the dashboards are fully customizable. You can create your own views, charts, and reports by dragging and dropping widgets. Tailor your command center to focus on the metrics that matter most to your mission.',
  },
  {
    question: 'What is your uptime and reliability SLA?',
    answer:
      'We guarantee a 99.9% uptime as part of our SLA for all Galaxy plan customers. Our infrastructure is built on a distributed, fault-tolerant architecture to ensure your operations are always online.',
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
            Frequently Charted Questions
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Navigating the cosmos of information. If your question isn't here,
            our mission control is ready to assist.
          </p>
        </div>
        <div className="max-w-reading mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
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
