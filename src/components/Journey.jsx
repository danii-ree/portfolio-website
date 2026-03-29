'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './Journey.css';

const milestones = [
    {
        year: '2019',
        title: 'The C Beginning',
        color: 'var(--neon-yellow)',
        glow: '0 0 20px rgba(255,230,0,0.5)',
        desc: 'Started my coding journey with C. Learned about memory management, pointers, and why computers do what they do at the bare metal level. Wrote my first programs on a Linux terminal and never looked back.',
        tags: ['C', 'Memory', 'Algorithms', 'Terminal'],
    },
    {
        year: '2020',
        title: 'Falling for Linux',
        color: 'var(--neon-cyan)',
        glow: '0 0 20px rgba(0,255,241,0.5)',
        desc: 'Installed Linux for the first time and it changed everything. Learned bash scripting, system administration, file systems, and how the kernel orchestrates the hardware. Linux became my permanent operating system.',
        tags: ['Linux', 'Bash', 'Kernel', 'Open Source'],
    },
    {
        year: '2021',
        title: 'Web & React Era',
        color: 'var(--neon-pink)',
        glow: '0 0 20px rgba(255,45,120,0.5)',
        desc: 'Ventured into web development, then discovered React — and the world of component-based UI clicked instantly. Started building interactive UIs, APIs, and full-stack applications with real users.',
        tags: ['React', 'JavaScript', 'HTML/CSS', 'Node.js'],
    },
    {
        year: '2023',
        title: 'Software Developer',
        color: 'var(--neon-purple)',
        glow: '0 0 20px rgba(191,95,255,0.5)',
        desc: 'Building DAWs, simulation softwares, web apps, and collaborative tools.',
        tags: ['Full-Stack', 'Game Dev', 'DAW', 'Systems'],
    },
    {
        year: 'NOW',
        title: 'The Journey Continues',
        color: 'var(--neon-orange)',
        glow: '0 0 20px rgba(255,107,53,0.5)',
        desc: 'Currently exploring physics simulations, generative systems, and next-gen web experiences.',
        tags: ['Physics', 'AI', 'Innovation', '∞'],
    },
];

const Journey = () => (
    <section className="journey" id="journey">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="section-label"
            >
                <span>// 02</span> <span>MY JOURNEY</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="section-title"
            >
                The <span className="neon-text-cyan">Programming</span> Story
            </motion.h2>

            <div className="timeline">
                {milestones.map((m, i) => (
                    <div key={m.year} className={`timeline__item ${i % 2 === 0 ? 'left' : 'right'}`}>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="timeline__connector"
                        >
                            <div className="timeline__dot" style={{ background: m.color, boxShadow: m.glow }}>
                                <span>{m.icon}</span>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.7, delay: i * 0.1 + 0.1, ease: 'easeOut' }}
                            className="timeline__card"
                            style={{ borderColor: m.color + '40' }}
                        >
                            <div className="timeline__year" style={{ color: m.color, textShadow: m.glow }}>{m.year}</div>
                            <h3 className="timeline__title">{m.title}</h3>
                            <p className="timeline__desc">{m.desc}</p>
                            <div className="timeline__tags">
                                {m.tags.map(t => (
                                    <span key={t} className="tag tag--sm" style={{ borderColor: m.color + '60', color: m.color }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Journey;
