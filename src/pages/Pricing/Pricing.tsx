import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useContactModal } from '../../contexts/ContactModalContext';
import './Pricing.css';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const pricingPlans = [
    {
        name: "Start",
        price: "R$ 89,90",
        period: "/mês",
        desc: "Ideal para pequenos estabelecimentos iniciando a gestão.",
        features: [
            "PDV",
            "Mesas",
            "Comandas",
            "Caixa",
            "Estoque básico",
            "Dashboard",
            "Até 2 usuários"
        ],
        buttonText: "Quero assinar",
        highlighted: false
    },
    {
        name: "Pro",
        price: "R$ 189,90",
        period: "/mês",
        desc: "A solução completa para restaurantes em crescimento.",
        features: [
            "Tudo do Start",
            "Delivery",
            "Financeiro",
            "KDS",
            "App Garçom",
            "QR Code",
            "Até 10 usuários",
            "Integração iFood"
        ],
        buttonText: "Quero assinar",
        highlighted: true
    },
    {
        name: "PLUS",
        price: "R$ 299,90",
        period: "/mês",
        desc: "Para operações robustas com inteligência de dados.",
        features: [
            "Tudo do Pro",
            "Relatórios inteligentes",
            "CRM",
            "Fidelidade",
            "Usuários ilimitados"
        ],
        buttonText: "Quero assinar",
        highlighted: false
    }
];



const Pricing: React.FC = () => {
    const { openModal } = useContactModal();
    return (
        <div className="pricing-page">
            <div className="container">
                <div className="text-center">
                    <motion.span variants={fadeUp} initial="hidden" animate="visible" className="badge">Planos Transparentes</motion.span>
                    <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="section-title">Escolha o plano ideal para o seu momento</motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-subtitle">Mude de plano ou cancele quando quiser. Sem taxas ocultas.</motion.p>
                </div>

                <motion.div className="pricing-grid" initial="hidden" animate="visible" variants={stagger}>
                    {pricingPlans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                            whileHover={{
                                y: -6,
                                boxShadow: plan.highlighted
                                    ? "0 25px 50px rgba(249, 115, 22, 0.15)"
                                    : "0 20px 40px rgba(0,0,0,0.08)"
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={openModal}
                        >
                            {plan.highlighted && <div className="popular-tag">Mais Popular</div>}
                            <div className="pricing-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-desc">{plan.desc}</p>
                                <div className="plan-price-wrapper">
                                    <span className="plan-price">{plan.price}</span>
                                    <span className="plan-period">{plan.period}</span>
                                </div>
                            </div>
                            <div className="pricing-features">
                                {plan.features.map((feat, fIdx) => (
                                    <div className="p-feat-item" key={fIdx}>
                                        <CheckCircle2 size={20} className={plan.highlighted ? "text-orange" : "text-muted"} />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <button className={`btn-primary pricing-btn ${plan.highlighted ? '' : 'btn-outline'}`}>
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;