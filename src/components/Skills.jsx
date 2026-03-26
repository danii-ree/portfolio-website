'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
    {
        label: 'Languages',
        icon: '⚡',
        color: 'var(--neon-yellow)',
        skills: [
            { name: 'C / C++', level: 85 },
            { name: 'JavaScript', level: 88 },
            { name: 'Python', level: 75 },
            { name: 'Bash / Shell', level: 70 },
        ],
    },
    {
        label: 'Frontend',
        icon: '⚛',
        color: 'var(--neon-cyan)',
        skills: [
            { name: 'React', level: 90 },
            { name: 'HTML / CSS', level: 92 },
            { name: 'Web Audio API', level: 72 },
            { name: 'Framer Motion', level: 78 },
        ],
    },
    {
        label: 'Systems & Tools',
        icon: '🐧',
        color: 'var(--neon-pink)',
        skills: [
            { name: 'Linux / Unix', level: 88 },
            { name: 'Git', level: 82 },
            { name: 'Qt6 / C++', level: 74 },
            { name: 'Embedded Systems', level: 68 },
        ],
    },
];

const badges = ['Data Structures', 'Algorithms', 'Physics Simulation', 'Game Dev', 'Open Source', 'UI/UX Design', 'Computer Vision', 'Audio Programming', 'Supabase', 'Computer Engineering'];

const Skills = () => (
    <section className="skills" id="skills">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="section-label"
            >
                <span>// 04</span> <span>SKILLS</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="section-title"
            >
                My <span className="neon-text-pink">Arsenal</span>
            </motion.h2>

            <div className="skills__grid">
                {skillGroups.map((group, gi) => (
                    <motion.div
                        key={group.label}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: gi * 0.15 }}
                        className="skill-group"
                    >
                        <div className="skill-group__header">
                            <span className="skill-group__icon">{group.icon}</span>
                            <span className="skill-group__label" style={{ color: group.color }}>{group.label}</span>
                        </div>
                        {group.skills.map((skill, si) => (
                            <div key={skill.name} className="skill-bar">
                                <div className="skill-bar__meta">
                                    <span className="skill-bar__name">{skill.name}</span>
                                    <span className="skill-bar__pct" style={{ color: group.color }}>{skill.level}%</span>
                                </div>
                                <div className="skill-bar__track">
                                    <motion.div
                                        className="skill-bar__fill"
                                        style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}80)`, boxShadow: `0 0 10px ${group.color}60` }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: gi * 0.15 + si * 0.08, ease: 'easeOut' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="skills__badges"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="skills__badges-label">OTHER INTERESTS & AREAS</p>
                <div className="skills__badges-grid">
                    {badges.map((b, i) => (
                        <motion.span
                            key={b}
                            className="badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.08 }}
                        >
                            {b}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default Skills;
