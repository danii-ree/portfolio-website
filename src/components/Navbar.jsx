'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { to: 'home', label: 'HOME' },
        { to: 'about', label: 'ABOUT' },
        { to: 'journey', label: 'JOURNEY' },
        { to: 'projects', label: 'PROJECTS' },
        { to: 'skills', label: 'SKILLS' },
        { to: 'contact', label: 'CONTACT' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">DANIEL</span>
                <span className="logo-bracket">/&gt;</span>
            </div>

            <button
                className={`navbar__burger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>

            <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                {navLinks.map(({ to, label }) => (
                    <li key={to}>
                        <Link
                            to={to}
                            smooth={true}
                            duration={600}
                            offset={-70}
                            spy={true}
                            activeClass="active"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;