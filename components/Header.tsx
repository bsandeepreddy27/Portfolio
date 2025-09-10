import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // This IntersectionObserver tracks which section is currently in the middle of the viewport.
        // It's used to highlight the corresponding link in the navigation bar.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                // `rootMargin` creates a horizontal "detection zone" in the middle of the screen.
                // A section is considered "active" when it enters this zone.
                rootMargin: "-40% 0px -40% 0px",
            }
        );

        // Attach the observer to all sections with an ID
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove listeners and observers
        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector<HTMLElement>(href);
        if (targetElement) {
            const headerElement = document.querySelector('header');
            const headerHeight = headerElement ? headerElement.offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            
            // Calculate the final scroll position, offsetting by the header's height
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={handleNavClick}
              className={`font-medium transition-colors ${
                activeSection === link.href 
                ? 'text-cyan-400' 
                : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;