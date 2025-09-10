import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedInIcon, MailIcon } from './icons';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // This is a mock submission. In a real application, you would connect this
    // to a backend service. A 1.5-second delay is used to simulate a network request.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setForm({ name: "", email: "", message: "" });
  };
  
  // Conditionally render the success message or the contact form
  if (isSuccess) {
    return (
      <SectionWrapper id="contact" title="Message Sent!">
        <div className="text-center max-w-xl mx-auto py-12">
            <div className="w-24 h-24 mx-auto mb-6">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Thank You!</h3>
            <p className="text-lg text-slate-400 mb-8">
                Your message has been sent successfully. I'll get back to you as soon as possible.
            </p>
            <button
                onClick={handleReset}
                className="w-full md:w-auto px-8 py-3 bg-cyan-500 text-white font-semibold rounded-md shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
                Send Another Message
            </button>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-lg text-slate-400 mb-8">
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          {/* Email Icon with Tooltip */}
          <div className="relative group">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Email">
                <MailIcon className="w-8 h-8"/>
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-700 text-slate-200 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Email
            </div>
          </div>

          {/* GitHub Icon with Tooltip */}
          <div className="relative group">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <GithubIcon className="w-8 h-8"/>
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-700 text-slate-200 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                GitHub
            </div>
          </div>

          {/* LinkedIn Icon with Tooltip */}
          <div className="relative group">
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-8 h-8"/>
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-700 text-slate-200 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                LinkedIn
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow"
              required
              disabled={isSubmitting}
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow h-32"
            rows={4}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-cyan-500 text-white font-semibold rounded-md shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;