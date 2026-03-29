'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            color: ['#FF2D78', '#00FFF1', '#BF5FFF', '#FFE600'][Math.floor(Math.random() * 4)],
            alpha: Math.random() * 0.6 + 0.2,
        }));

        let animId;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.shadowBlur = 12;
                ctx.shadowColor = p.color;
                ctx.fill();
                ctx.globalAlpha = 1;
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        const onResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
    }, []);

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} className="hero__canvas" />
            <div className="hero__grid" />
            <div className="hero__content container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="hero__text"
                >
                    <p className="hero__greeting">// Hello, World!</p>
                    <h1 className="hero__name">
                        <span className="glitch" data-text="DANIEL">DANIEL</span>
                    </h1>
                    <div className="hero__typewriter">
                        <Typewriter
                            options={{
                                strings: [
                                    'Software Developer',
                                    'Linux Enthusiast',
                                    'C Programmer',
                                    'React Developer',
                                    'Computer Engineering Student',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>
                    <p className="hero__bio">
                        19-year-old dev from the future, building today. I live where code meets creativity —
                        from bare-metal C to beautiful React interfaces.
                    </p>
                    <div className="hero__cta">
                        <a href="#projects" className="btn btn--primary">VIEW PROJECTS</a>
                        <a href="https://github.com/danii-ree" target="_blank" rel="noreferrer" className="btn btn--ghost">GITHUB ↗</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                    className="hero__card-wrap"
                >
                    <div className="hero__card">
                        <div className="hero__card-inner">
                            <div className="hero__avatar">
                                <img src="/Images/profile.jpg" alt="Daniel" onError={e => { e.target.style.display = 'none'; }} />
                            </div>
                            <div className="hero__card-badge">
                                <span className="pulse-dot" /> AVAILABLE FOR WORK
                            </div>
                            <div className="hero__stats">
                                <div className="stat">
                                    <span className="stat-num neon-text-pink">7+</span>
                                    <span className="stat-label">Years Coding</span>
                                </div>
                                <div className="stat-divider" />
                                <div className="stat">
                                    <span className="stat-num neon-text-cyan">30+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat-divider" />
                                <div className="stat">
                                    <span className="stat-num neon-text-purple">∞</span>
                                    <span className="stat-label">Passion</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="hero__scroll-hint">
                <span>SCROLL</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
};

export default Hero;
