'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'FilterStudio',
        subtitle: 'Image Processing Laboratory',
        desc: 'Advanced studio for building and testing custom image filters with real-time shader previews and visual effects.',
        tags: ['TypeScript', 'WebGL', 'UI/UX'],
        color: 'var(--neon-pink)',
        glow: 'rgba(255,45,120,0.3)',
        status: 'PUBLIC',
        stats: { stars: 2 }
    },
    {
        id: 2,
        title: 'Altivity',
        subtitle: 'Team Productivity Suite',
        desc: 'Modern productivity platform built for high-performance teams, featuring real-time collaboration and tasks.',
        tags: ['TypeScript', 'Next.js', 'Workflow'],
        color: 'var(--neon-cyan)',
        glow: 'rgba(0,255,241,0.3)',
        status: 'PUBLIC',
        stats: { stars: 1, forks: 1 }
    },
    {
        id: 3,
        title: 'HackDSA',
        subtitle: 'DSA Visualizer',
        desc: 'An interactive Data Structures and Algorithms visualizer for first-year university students.',
        tags: ['TypeScript', 'Algorithms', 'Education'],
        color: 'var(--neon-purple)',
        glow: 'rgba(191,95,255,0.3)',
        status: 'PUBLIC',
        stats: { stars: 1 }
    },
    {
        id: 4,
        title: 'QT-git-file-explorer',
        subtitle: 'Developer Utilities',
        desc: 'A file explorer made for developers who want ease of use in their git project.',
        tags: ['Python', 'Qt', 'Git', 'Filesystem'],
        color: 'var(--neon-yellow)',
        glow: 'rgba(255,230,0,0.3)',
        status: 'PUBLIC',
        stats: { stars: 1 }
    },
    {
        id: 5,
        title: 'scratchsslt-website',
        subtitle: 'ESL Learning Platform',
        desc: 'a website designed to help English learners to master OSSLT',
        tags: ['TypeScript', 'Education', 'Web Dev'],
        color: 'var(--neon-orange)',
        glow: 'rgba(255,107,53,0.3)',
        status: 'PUBLIC',
        stats: { stars: 1 }
    },
    {
        id: 6,
        title: 'Calendar-automation',
        subtitle: 'AI-Powered Scheduler',
        desc: 'A calendar automation program that automates study schedules using deep seek.',
        tags: ['Python', 'AI', 'Automation', 'DeepSeek'],
        color: 'var(--neon-pink)',
        glow: 'rgba(255,45,120,0.3)',
        status: 'PUBLIC',
    },
];

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => (
    <section className="projects" id="projects">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="section-label"
            >
                <span>// 03</span> <span>PROJECTS</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="section-title"
            >
                Things I've <span className="neon-text-purple">Built</span>
            </motion.h2>

            <motion.div
                className="projects__grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((p) => (
                    <motion.div
                        key={p.id}
                        variants={cardVariant}
                        className="project-card"
                        style={{ '--card-color': p.color, '--card-glow': p.glow }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <div className="project-card__header">
                            <div className="project-card__status-bar">
                                <span className="project-card__status" style={{ color: p.color, borderColor: p.color + '50' }}>
                                    {p.status}
                                </span>
                                {p.stats && (
                                    <div className="project-card__stats">
                                        {p.stats.stars && (
                                            <span className="stat"><span className="stat-icon">★</span> {p.stats.stars}</span>
                                        )}
                                        {p.stats.forks && (
                                            <span className="stat"><span className="stat-icon">⌥</span> {p.stats.forks}</span>
                                        )}
                                    </div>
                                )}
                            </div>
                            <h3 className="project-card__title" style={{ color: p.color }}>{p.title}</h3>
                            <p className="project-card__subtitle">{p.subtitle}</p>
                        </div>
                        <p className="project-card__desc">{p.desc}</p>
                        <div className="project-card__tags">
                            {p.tags.map(t => (
                                <span key={t} className="tag tag--sm" style={{ borderColor: p.color + '50', color: p.color }}>{t}</span>
                            ))}
                        </div>
                        <div className="project-card__footer">
                            <a href="https://github.com/danii-ree" target="_blank" rel="noreferrer" className="project-card__link" style={{ color: p.color }}>
                                VIEW ON GITHUB ↗
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Projects;
