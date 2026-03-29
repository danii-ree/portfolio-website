'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const About = () => (
    <section className="about" id="about">
        <div className="container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="section-label"
            >
                <span>// 01</span> <span>ABOUT ME</span>
            </motion.div>

            <div className="about__grid">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="about__text"
                >
                    <h2 className="section-title">
                        Hi, I'm <span className="neon-text-pink">Daniel</span>
                    </h2>
                    <p>
                        I'm a 19-year-old software developer with a deep passion for programming, computer
                        engineering, and physics. My journey started young — drawn to the raw elegance of
                        low-level C programming where every byte matters and nothing is abstracted away.
                    </p>
                    <p>
                        From there I fell in love with <span className="highlight-text">Linux</span> where I learned how operating systems tick, how
                        processes work, and what it truly means to control your machine.
                    </p>
                    <p>
                        Today I build full-stack applications, interactive web experiences, and
                        <span className="highlight-text"> simulation games</span>. I believe great software
                        is half science, half creativity.
                    </p>

                    <div className="about__tags">
                        {['C / C++', 'Linux', 'React', 'JavaScript', 'Python', 'Game Dev', 'Physics', 'Open Source'].map(tag => (
                            <span className="tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="about__card"
                >
                    <div className="about__card-header">
                        <span className="dot pink" /><span className="dot yellow" /><span className="dot cyan" />
                        <span className="about__card-title">daniel.config</span>
                    </div>
                    <pre className="about__code">
                        {`{
  "name": "Daniel",
  "age": 19,
  "location": "Ontario, Canada",
  "stack": [
    "C", "Linux", "React",
    "Python", "JavaScript"
  ],
  "interests": [
    "Game Development",
    "Cyber Security",
    "AI/ML",
    "Low-level Programming",
    "Physics Simulations",
    "Open Source"
  ],
  "currently": "Building stuff",
  "available": true
}`}
                    </pre>
                </motion.div>
            </div>
        </div>
    </section>
);

export default About;
