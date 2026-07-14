import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export function Hero() {
    return (
        <section className="hero-premium">
            <div className="hero-glow-bg"></div> {/* Gradiente de fundo */}

            <motion.div
                className="hero-container"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={fadeUp} className="hero-badge-wrapper">
                    <span className="badge-premium">
                        <span className="pulse-dot"></span> Novidade: TaNaMesa Multi-Tenant V2
                    </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="hero-title">
                    Controle total. <br />
                    <span className="text-gradient">Zero furos no estoque.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="hero-subtitle">
                    O ERP gastronômico invisível. Sua equipe aprende em 5 minutos, você gerencia em tempo real. Deixe a complexidade com a tecnologia.
                </motion.p>

                <motion.div variants={fadeUp} className="hero-actions">
                    <button className="btn-primary">
                        Começar Gratuitamente <ArrowRight size={18} />
                    </button>
                    <button className="btn-secondary">
                        <Play size={18} /> Ver Demonstração
                    </button>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="hero-mockup-wrapper"
                >
                    <div className="mockup-glass">
                        <div className="mockup-topbar">
                            <i></i><i></i><i></i>
                        </div>
                        {/* Aqui entrará a imagem real do dashboard depois */}
                        <div className="mockup-content">
                            <span className="mockup-placeholder-text">Dashboard TaNaMesa B2B</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}