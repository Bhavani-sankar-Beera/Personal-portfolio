import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Check, Copy, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/myezojgy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || 'Failed to dispatch message. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-10 sm:py-16 lg:py-24 border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-10">
        {/* Section Header directly matching "Lets Talk" */}
        <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Lets <span className="font-light italic text-neutral-400">Talk</span>
          </h2>
          <p className="text-[11px] sm:text-sm text-neutral-400 tracking-wider font-light max-w-lg mx-auto px-2">
            You can follow me on my social media handles or write a direct inquiry if you would like to collaborate.
          </p>
        </div>

        {/* 3 Info Columns side-by-side on ALL screens matching template layout */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 text-center pb-6 sm:pb-10 border-b border-neutral-900">
          {/* Address */}
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
              Address
            </h3>
            <p className="text-[9px] sm:text-xs text-neutral-400 leading-relaxed font-light">
              GMRIT, Rajam<br />
              Andhra Pradesh, India
            </p>
          </div>

          {/* Phone */}
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
              Phone
            </h3>
            <div className="text-[9px] sm:text-xs text-neutral-400 leading-relaxed font-light">
              <p>
                <a href="tel:+917396179921" className="hover:text-white transition-colors">
                  +91 7396179921
                </a>
              </p>
              <p className="text-neutral-500 hidden sm:block">WhatsApp Available</p>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
              Email
            </h3>
            <div className="text-[9px] sm:text-xs text-neutral-400 leading-relaxed font-light">
              <p className="break-all sm:break-normal">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-[8px] sm:text-[11px] text-neutral-500 hover:text-white transition-colors mt-0.5 sm:mt-1 font-mono"
              >
                {copied ? <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" /> : <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Contact Form hooked to Formspree https://formspree.io/f/myezojgy */}
        <form
          action="https://formspree.io/f/myezojgy"
          method="POST"
          onSubmit={handleSubmit}
          className="pt-6 sm:pt-10 max-w-3xl mx-auto space-y-4 sm:space-y-8"
        >
          {errorMessage && (
            <div className="p-3 sm:p-4 border border-red-500/40 bg-red-950/20 text-center rounded flex items-center justify-center gap-2 text-red-400 text-xs font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name *"
                className="w-full bg-transparent border-b border-neutral-700 py-2 sm:py-3 text-[11px] sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-mail *"
                className="w-full bg-transparent border-b border-neutral-700 py-2 sm:py-3 text-[11px] sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Message *"
              className="w-full bg-transparent border-b border-neutral-700 py-2 sm:py-3 text-[11px] sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2 sm:pt-4">
            {submitted ? (
              <div className="p-4 sm:p-6 border border-emerald-500/40 bg-emerald-950/20 text-center rounded space-y-2">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Message Received
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-300">
                  Thank you! Your inquiry was sent to Rahul's inbox. You will receive a response shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-[10px] font-mono tracking-widest uppercase text-neutral-400 hover:text-white underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 border border-neutral-700 hover:border-white text-[10px] sm:text-xs font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-300 focus:outline-none disabled:opacity-50"
              >
                {isSubmitting ? 'DISPATCHING...' : 'SUBMIT'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
