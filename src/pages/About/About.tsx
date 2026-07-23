import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, Zap, ArrowRight, } from 'lucide-react';
import { useContactModal } from '../../contexts/ContactModalContext';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About: React.FC = () => {

    const { openModal } = useContactModal();
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
                        Somos profissionais formados em ADS, unidos pela mesma missão: tornar a tecnologia ágil e acessível a pequenos e médios estabelecimentos gastronômicos.
                    </motion.p>
                </div>
            </section>

            {/* Nossa História - Layout com Imagem */}
            <section className="about-section">
                <div className="container about-history-grid">
                    <div className="history-content">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            Nossa História
                        </motion.h2>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            O setor de bares e restaurantes é um dos que mais sofrem com sistemas de gestão ultrapassados.
                            De um lado, estabelecimentos que ainda operam no papel e na planilha, perdendo vendas por falta de controle.
                            Do outro, softwares caros e complexos que exigem treinamento constante e travam o atendimento na hora do movimento.
                        </motion.p>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
                            Nós vivemos essas duas realidades de perto. Vimos a frustração de quem queria crescer, mas esbarrava
                            em ferramentas que não acompanhavam o ritmo do salão. Faltava uma opção que unisse <strong>simplicidade,
                                inteligência e preço justo</strong> — um sistema que qualquer equipe aprendesse em minutos e que realmente
                            ajudasse na tomada de decisão.
                        </motion.p>
                        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                            Foi para resolver essa lacuna que nasceu o TáNaMesa. Desde o início, contamos com o apoio do
                            <strong> Startup Garage do Sebrae</strong>, que acelerou nossa visão e hoje atua como incubadora,
                            conectando nossa tecnologia às necessidades reais de pequenos e médios estabelecimentos em todo o Brasil.
                        </motion.p>
                    </div>

                    <motion.div className="history-image-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}>
                        <img
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
                            alt="Equipe trabalhando e discutindo ideias em um restaurante"
                            className="history-img"
                        />
                        <div className="history-badge">
                            <span>Apoiado por</span>
                            <strong>Sebrae Startup Garage</strong>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Missão e Valores */}
            <section className="about-section" style={{ background: '#fff' }}>
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2>O que nos move</h2>
                        <p className="subtitle">Nossos pilares de desenvolvimento e atendimento.</p>
                    </motion.div>

                    <div className="valores-grid">
                        <motion.div className="valor-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="valor-icon"><Zap size={24} /></div>
                            <h4>Simplicidade radical</h4>
                            <p>Desenhamos a interface (UI/UX) para que qualquer garçom ou gerente aprenda a usar o sistema em minutos, com zero fricção e sem precisar de manuais extensos.</p>
                        </motion.div>
                        <motion.div className="valor-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
                            <div className="valor-icon"><Heart size={24} /></div>
                            <h4>Preço justo e transparente</h4>
                            <p>Acreditamos que tecnologia de ponta não deve ser um luxo. Criamos uma arquitetura eficiente para repassar o melhor custo-benefício em nossos planos.</p>
                        </motion.div>
                        <motion.div className="valor-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                            <div className="valor-icon"><Target size={24} /></div>
                            <h4>Tudo centralizado</h4>
                            <p>Do controle de comandas e PDV até a gestão de estoque e emissão de notas. Tudo perfeitamente integrado no mesmo painel para você não perder tempo.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="about-cta">
                <div className="container">
                    <h2>Pronto para otimizar o seu atendimento?</h2>
                    <p>Agende uma demonstração gratuita e veja na prática como podemos acelerar suas vendas.</p>
                    <button className="cta-button" onClick={openModal}>
                        Falar com um Consultor <ArrowRight size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;