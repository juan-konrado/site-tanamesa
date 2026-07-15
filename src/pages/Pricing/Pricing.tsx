import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
        name: "Essencial",
        price: "R$ 149",
        period: "/mês",
        desc: "Ideal para operações enxutas, food trucks e balcão.",
        features: ["Frente de Caixa (PDV) Visual", "Comandas Avulsas e Mesas", "Abertura e Fechamento de Turno", "Suporte via Chat"],
        buttonText: "Testar Grátis",
        highlighted: false
    },
    {
        name: "Profissional",
        price: "R$ 299",
        period: "/mês",
        desc: "A solução completa com controle rigoroso de estoque.",
        features: ["Tudo do plano Essencial", "Gestão de Estoque e Alertas", "Fichas Técnicas Automáticas", "Acesso Rápido via PIN", "Suporte Prioritário WhatsApp"],
        buttonText: "Assinar Profissional",
        highlighted: true
    },
    {
        name: "Enterprise",
        price: "Sob medida",
        period: "",
        desc: "Para redes de restaurantes e franquias em expansão.",
        features: ["Tudo do plano Profissional", "Painel Multi-Tenant (Rede)", "Feature Flags por CNPJ", "API e Integrações Premium", "Gerente de Conta Dedicado"],
        buttonText: "Falar com Consultor",
        highlighted: false
    }
];

const Pricing: React.FC = () => {
    return (
        <div className="pricing-page">
            <Header activeSection="" links={[
                { id: 'pdv', label: 'Operação', href: '/#pdv' },
                { id: 'estoque', label: 'Gestão', href: '/#estoque' },
                { id: 'seguranca', label: 'Segurança', href: '/#seguranca' },
                { id: 'precos', label: 'Planos', href: '/planos' },
            ]} />

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

            <Footer />
        </div>
    );
};

export default Pricing;