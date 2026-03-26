'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Collaborative DAW',
        subtitle: 'Digital Audio Workstation',
        desc: 'A full-featured browser-based DAW with multi-track editing, waveform visualization, real-time collaboration via Supabase, and Google OAuth authentication.',
        tags: ['React', 'Web Audio API', 'Supabase', 'OAuth'],
        color: 'var(--neon-pink)',
        glow: 'rgba(255,45,120,0.3)',
        icon: '🎛️',
        status: 'FEATURED',
    },
    {
        id: 2,
        title: 'Qt DAW — Desktop Edition',
        subtitle: 'Native C++ Music Production',
        desc: 'A desktop-native music production application built in Qt6/C++ with a vintage 80s aesthetic, multi-track sequencer, audio recording, and playback engine.',
        tags: ['C++', 'Qt6', 'Audio Engine', 'Linux'],
        color: 'var(--neon-cyan)',
        glow: 'rgba(0,255,241,0.3)',
        icon: '🎹',
        status: 'FEATURED',
    },
    {
        id: 3,
        title: 'Binary Search Tree Lab',
        subtitle: 'Data Structures in C',
        desc: 'A complete BST implementation in C covering insertion, deletion, height calculation, and parent-finding helper algorithms — demonstrating deep understanding of recursive tree operations.',
        tags: ['C', 'Algorithms', 'Data Structures'],
        color: 'var(--neon-purple)',
        glow: 'rgba(191,95,255,0.3)',
        icon: '🌳',
        status: 'ACADEMIC',
    },
    {
        id: 4,
        title: 'Insect Identifier AI',
        subtitle: 'Computer Vision with Python',
        desc: 'An AI-powered insect identification tool with confidence level visualization, real-time image classification, and a clean interface for nature enthusiasts and researchers.',
        tags: ['Python', 'AI/ML', 'OpenCV', 'Computer Vision'],
        color: 'var(--neon-yellow)',
        glow: 'rgba(255,230,0,0.3)',
        icon: '🐞',
        status: 'AI/ML',
    },
    {
        id: 5,
        title: 'Stack Data Structure',
        subtitle: 'Embedded Systems in C++',
        desc: 'A hardware Stack implementation in C++ with DS3231 RTC integration for timestamped operations — Push, Pop, IsEmpty, IsFull — running on microcontroller hardware.',
        tags: ['C++', 'Embedded', 'Hardware', 'Arduino'],
        color: 'var(--neon-orange)',
        glow: 'rgba(255,107,53,0.3)',
        icon: '🔧',
        status: 'EMBEDDED',
    },
    {
        id: 6,
        title: 'Game Project',
        subtitle: 'Coming Soon',
        desc: 'An upcoming game development project combining physics simulation, procedural generation, and real-time rendering. Built with passion for interactive experiences.',
        tags: ['Game Dev', 'Physics', 'C++', 'OpenGL'],
        color: 'var(--neon-purple)',
        glow: 'rgba(191,95,255,0.3)',
        icon: '🎮',
        status: 'IN PROGRESS',
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
                        <div className="project-card__top">
                            <div className="project-card__icon">{p.icon}</div>
                            <span className="project-card__status" style={{ color: p.color, borderColor: p.color + '50' }}>
                                {p.status}
                            </span>
                        </div>
                        <h3 className="project-card__title" style={{ color: p.color }}>{p.title}</h3>
                        <p className="project-card__subtitle">{p.subtitle}</p>
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
