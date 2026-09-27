import React, { useState } from 'react';
import { FAQS, GYM_INFO } from '../data/gymData';
import { ChevronDown, MessageSquare, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const categories = ['All', 'Access', 'Coaching', 'CrossFit', 'Ramadan', 'Membership'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 border-t border-[#B8BAC0]/30">
      
      {/* 1. Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
          Clear Answers · Operations & Access
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Frequently Asked Questions.
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          Everything you need to know about our 24-hour access protocols, personal training booking, CrossFit scaling, and Ramadan schedule synchronization.
        </p>

        {/* Search Bar */}
        <div className="relative pt-4">
          <Search className="w-4 h-4 absolute left-3.5 top-7 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g., 24 hours, Ramadan, coaches, parking)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#064E3B]"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#064E3B] text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Interactive Accordion */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#064E3B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-600">
            No matching questions found for "{searchQuery}". Ask our desk directly below!
          </div>
        )}
      </div>

      {/* 3. Have Another Question */}
      <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-editorial text-xl font-bold text-slate-900">
            Have an unlisted question?
          </h3>
          <p className="text-xs text-slate-600">
            Our front desk is staffed around the clock to assist you via WhatsApp.
          </p>
        </div>
        <a
          href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
            "Hi, I have a specific question about Xtreme Fitness DHA Phase 8 that wasn't in the FAQs"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#064E3B] hover:bg-[#043629] text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

    </section>
  );
};
