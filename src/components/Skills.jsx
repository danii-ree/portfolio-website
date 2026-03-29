'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
    {
        label: 'Languages',
        color: 'var(--neon-yellow)',
        skills: ['Python', 'C', 'C++', 'CUDA', 'Rust', 'Java', 'JavaScript', 'TypeScript', 'C#', 'Bash', 'Go'],
    },
    {
        label: 'Frameworks',
        color: 'var(--neon-cyan)',
        skills: ['PyTorch', 'TensorFlow', 'NextJS', 'Supabase', 'Firebase', 'ROS', 'MySQL', 'React Native', 'Flutter'],
    },
    {
        label: 'Infrastructure',
        color: 'var(--neon-purple)',
        skills: ['Kubernetes', 'Docker', 'AWS', 'GitHub', 'GCP', 'Linux', 'Git', 'WSL', 'Azure'],
    },
];

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
                            <span className="skill-group__label" style={{ color: group.color }}>{group.label}</span>
                        </div>
                        <div className="skill-group__tags">
                            {group.skills.map((skill, si) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.03 }}
                                    className="skill-tag"
                                    style={{
                                        '--tag-color': group.color,
                                        borderColor: `${group.color}40`,
                                        color: group.color
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: `${group.color}15`,
                                        borderColor: group.color,
                                        boxShadow: `0 0 15px ${group.color}40`
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
