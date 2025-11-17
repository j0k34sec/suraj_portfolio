
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import MatrixRain from './components/MatrixRain';

const App: React.FC = () => {
    return (
        <div className="bg-primary text-text-primary font-mono">
            <MatrixRain />
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <footer className="py-8 border-t border-accent/20">
                    <div className="container mx-auto px-6 text-center text-text-secondary">
                        <p>&copy; 2024 Suraj Mondal. All rights reserved.</p>
                        <p className="text-sm mt-2">SYSTEM STATUS: <span className="text-accent animate-blink">SECURE</span></p>
                    </div>
                </footer>
                <ScrollToTopButton />
            </div>
        </div>
    );
}

export default App;