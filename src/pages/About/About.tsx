import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, Zap } from 'lucide-react';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const teamMembers = [
    { name: 'Ana Silva', role: 'CEO & Founder' },
    { name: 'Bruno Costa', role: 'CTO' },
    { name: 'Carla Souza', role: 'Design' },
    { name: 'Daniel Lima', role: 'Backend' },
    { name: 'Eduarda Rocha', role: 'Frontend' },
    { name: 'Felipe Martins', role: 'Mobile' },
    { name: 'Gabriela Alves', role: 'QA & Suporte' },
];

const About: React.FC = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero-glow" />
                <div className="container">
                    <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
                        Simplificamos a gestão do seu <span className="highlight">restaurante</span>
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
                        Somos 7 profissionais formados em ADS, unidos pela mesma missão: tornar a tecnologia acessível a pequenos e médios estabelecimentos.
                    </motion.p>
                </div>
            </section>

            {/* Nossa História */}
            <section className="about-section">
                <div className="container">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        Nossa História
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        Tudo começou durante a graduação em Análise e Desenvolvimento de Sistemas. Na época, um dos nossos colegas comentou sobre a dificuldade de seu familiar, dono de um restaurante, que não usava nenhum sistema de gestão — tudo era feito manualmente, com anotações em papel.
                    </motion.p>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
                        Outro integrante do grupo também conhecia de perto a mesma dor: um familiar que pagava caro por um sistema complicado, cheio de etapas desnecessárias, que mais atrapalhava do que ajudava. Foi aí que a ideia surgiu: por que não criar algo realmente simples, rápido e com preço justo?
                    </motion.p>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                        Ainda na faculdade, inscrevemos o projeto no <strong>Startup Garage do Sebrae</strong>, um programa de empreendedorismo universitário. Passamos por todas as etapas e, mesmo após formados, o Sebrae continua atuando como nossa incubadora, oferecendo mentorias, validações de negócio e suporte para transformar nossa ideia em realidade.
                    </motion.p>
                </div>
            </section>

            {/* Equipe */}
            <section className="about-section" style={{ background: '#fff', borderTop: '1px solid #E2E8F0' }}>
                <div className="container">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        Nosso Time
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ color: '#475569' }}>
                        7 profissionais apaixonados por tecnologia e gastronomia, unidos para fazer a diferença.
                    </motion.p>
                    <div className="team-grid">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                className="team-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <div className="team-avatar">
                                    <Users size={36} />
                                </div>
                                <h4>{member.name}</h4>
                                <span>{member.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Missão e Valores */}
            <section className="about-section">
                <div className="container">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        O que nos move
                    </motion.h2>
                    <div className="valores-list">
                        <motion.div className="valor-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="valor-icon"><Zap size={24} /></div>
                            <div className="valor-text">
                                <h4>Simplicidade radical</h4>
                                <p>Sistema que qualquer pessoa aprende em minutos, sem treinamento complicado.</p>
                            </div>
                        </motion.div>
                        <motion.div className="valor-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
                            <div className="valor-icon"><Heart size={24} /></div>
                            <div className="valor-text">
                                <h4>Preço justo</h4>
                                <p>Acreditamos que gestão de qualidade não deveria custar caro. Planos acessíveis para todos os tamanhos de operação.</p>
                            </div>
                        </motion.div>
                        <motion.div className="valor-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                            <div className="valor-icon"><Target size={24} /></div>
                            <div className="valor-text">
                                <h4>Tudo em um só lugar</h4>
                                <p>PDV, estoque, delivery, financeiro — integrados de forma personalizável, sem precisar de vários sistemas.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;