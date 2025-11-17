
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: '// about' },
        { href: '#skills', label: '// skills' },
        { href: '#projects', label: '// projects' },
        { href: '#contact', label: '// contact' },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false); // Close mobile menu on click
    };
    
    const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const NavLinksList = () => (
        <>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={handleSmoothScroll}
                    className="group text-text-secondary hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-0 group-hover:mr-1 duration-300 text-accent">&gt;</span>
                    {link.label}
                </a>
            ))}
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-lg border-b border-accent/20' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" onClick={handleScrollToTop} className="flex items-center gap-2 text-xl font-bold hover:text-accent transition-colors duration-300">
                        <Shield className="w-6 h-6 text-accent animate-pulse" />
                        <span>S.Mondal</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLinksList />
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-accent" />}
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-secondary/90 backdrop-blur-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                       <NavLinksList />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;