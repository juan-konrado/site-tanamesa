import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, LayoutDashboard, Users, Receipt,
    Package, ChefHat, Calculator, Fingerprint, ShieldCheck,
    Lock, Palette,
    Pizza, Coffee, Beer, UtensilsCrossed, Wine, CupSoda, X, Phone,
    Sparkles, QrCode, ScrollText, TrendingUp, Clock, Zap
} from 'lucide-react';
import './Home.css';
import { useContactModal } from '../../contexts/ContactModalContext';
import pdvImage from '../../assets/TelaPDV.png';
import estoqueImage from '../../assets/TelaEstoque.png';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const floatingIcons = [
    { Icon: Pizza, top: '15%', left: '5%', size: 64, delay: 0 },
    { Icon: Coffee, top: '25%', left: '85%', size: 80, delay: 1.5 },
    { Icon: Beer, top: '75%', left: '8%', size: 56, delay: 2 },
    { Icon: UtensilsCrossed, top: '65%', left: '90%', size: 72, delay: 0.5 },
    { Icon: Wine, top: '85%', left: '45%', size: 64, delay: 3 },
    { Icon: CupSoda, top: '10%', left: '50%', size: 56, delay: 1 },
];

const pillars = [
    {
        id: 'pdv',
        title: "PDV Intuitivo e Completo",
        subtitle: "Agilidade no salão, controle no caixa. Interface pensada para alta rotatividade.",
        imageUrl: pdvImage,
        reverse: false,
        items: [
            { icon: <LayoutDashboard size={24} />, title: "Mapa de Mesas e Comandas", text: "Mesas, comandas individuais e balcão. Tudo visual, rápido e sem erro." },
            { icon: <Receipt size={24} />, title: "Fechamento de Caixa Inteligente", text: "Relatórios automáticos de turno com divisão por tipo de pagamento." },
            { icon: <QrCode size={24} />, title: "Cardápio Digital via QR Code", text: "Seus clientes fazem pedidos direto da mesa, sem app. Rápido e sem custo extra." }
        ]
    },
    {
        id: 'estoque',
        title: "Estoque Automatizado e Fichas Técnicas",
        subtitle: "Controle de insumos em tempo real, sem planilhas manuais.",
        imageUrl: estoqueImage,
        reverse: true,
        items: [
            { icon: <ScrollText size={24} />, title: "Leitura de NF-e Automática", text: "Dê entrada no estoque instantaneamente ao importar notas fiscais eletrônicas." },
            { icon: <ChefHat size={24} />, title: "Fichas Técnicas com Baixa Automática", text: "Cada venda consome automaticamente os ingredientes da receita. Estoque sempre atualizado." },
            { icon: <Calculator size={24} />, title: "Cálculo de Margem e Custos", text: "Saiba exatamente o lucro de cada prato e ajuste preços com segurança." }
        ]
    }
];

const gridFeatures = [
    { icon: <Fingerprint size={32} className="text-orange" />, title: "Login Rápido por PIN", text: "Garçons e caixas acessam o sistema em segundos usando senhas numéricas de 4 dígitos, ideal para o ritmo do salão." },
    { icon: <ShieldCheck size={32} className="text-orange" />, title: "Perfis de Acesso Restritos", text: "O Garçom só lança pedidos; o Caixa só recebe pagamentos; o Gerente tem acesso total aos relatórios e configurações." },
    { icon: <Lock size={32} className="text-orange" />, title: "Travas de Segurança", text: "Configure quem tem permissão para dar descontos ou cancelar itens. Defina taxas de serviço personalizadas." },
    { icon: <Palette size={32} className="text-orange" />, title: "White-Label Premium", text: "Paletas exclusivas e upload do seu Logotipo. O painel carrega a logo do seu estabelecimento, gerando pertencimento." },
];

export default function Home() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState<string>('');
    const { openModal } = useContactModal();

    useEffect(() => {
        const sectionIds = ['pdv', 'estoque', 'ia', 'seguranca'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-wrapper">

            {/* HERO */}
            <section className="hero-section">
                <div className="floating-background">
                    {floatingIcons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-icon-item"
                            style={{ top: item.top, left: item.left }}
                            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 10 + item.delay, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                        >
                            <item.Icon size={item.size} strokeWidth={1} />
                        </motion.div>
                    ))}
                </div>

                <div className="hero-glow"></div>
                <div className="container hero-container">
                    <motion.div className="hero-content-left" variants={stagger} initial="hidden" animate="visible">
                        <motion.h1 variants={fadeUp} className="hero-title">
                            Gestão simples, <span className="text-gradient">inteligente e sem complicação</span>.
                        </motion.h1>
                        <motion.p variants={fadeUp} className="hero-subtitle">
                            PDV, estoque e cardápio digital que pensa no seu lucro. 
                            Adeus sistemas complexos... sua equipe aprende em minutos.
                        </motion.p>
                        <motion.div variants={fadeUp} className="hero-actions">
                            <motion.button className="btn-primary" whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(249, 115, 22, 0.3)" }} whileTap={{ scale: 0.98 }} onClick={openModal}>
                                Fale Conosco <ArrowRight size={18} />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
                        <div className="hero-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Dashboard" className="hero-main-image" />
                            <motion.div className="floating-card top-card" drag dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}>
                                <Sparkles size={20} className="text-orange" />
                                <span>Mesas Ocupadas: 18</span>
                            </motion.div>
                            <motion.div className="floating-card bottom-card" drag dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}>
                                <Package size={20} className="text-success" />
                                <span>Estoque Atualizado</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PILARES: PDV e Estoque */}
            <section className="pillars-section">
                <div className="container">
                    {pillars.map((pillar) => (
                        <div className={`pillar-row ${pillar.reverse ? 'reverse' : ''}`} id={pillar.id} key={pillar.id}>
                            <motion.div className="pillar-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "50px" }} variants={stagger}>
                                <motion.h2 variants={fadeUp} className="section-title">{pillar.title}</motion.h2>
                                <motion.p variants={fadeUp} className="section-subtitle">{pillar.subtitle}</motion.p>
                                <div className="pillar-features">
                                    {pillar.items.map((item, idx) => (
                                        <motion.div variants={fadeUp} className="feature-item" key={idx} whileHover={{ x: 6 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                            <div className="feature-icon">{item.icon}</div>
                                            <div>
                                                <h4 className="feature-title">{item.title}</h4>
                                                <p className="feature-text">{item.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div className="pillar-visual" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
                                <motion.div
                                    className="mockup-image-container"
                                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    onClick={() => setSelectedImage(pillar.imageUrl)}
                                >
                                    <img src={pillar.imageUrl} alt={pillar.title} className="mockup-img" />
                                    <div className="mockup-overlay">
                                        <span className="mockup-expand-text">Clique para ampliar</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENTO GRID SEGURANÇA (mantido) */}
            <section className="grid-section" id="seguranca" style={{ backgroundColor: '#0F172A', borderTop: '1px solid #1E293B' }}>
                <div className="container">
                    <div className="text-center">
                        <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="badge">Segurança e Personalização</motion.span>
                        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-title text-light">Controle total da sua operação</motion.h2>
                        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-subtitle text-light-muted">Da liberação de acessos à identidade visual, você decide cada detalhe.</motion.p>
                    </div>
                    <motion.div className="bento-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {gridFeatures.map((feat, idx) => (
                            <motion.div
                                variants={fadeUp}
                                className="bento-card"
                                key={idx}
                                whileHover={{ y: -4, boxShadow: "0 15px 30px rgba(0,0,0,0.5)", borderColor: "rgba(255,255,255,0.15)" }}
                            >
                                <motion.div>{feat.icon}</motion.div>
                                <h3 className="bento-title">{feat.title}</h3>
                                <p className="bento-text">{feat.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="cta-section">
                <div className="cta-glow"></div>
                <div className="container cta-container">
                    <motion.h2
                        className="cta-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Pronto para ter um sistema que pensa no seu lucro?
                    </motion.h2>
                    <motion.p
                        className="cta-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Agende uma demonstração e descubra como o <strong>TáNaMesa</strong> reduz perdas, 
                        automatiza processos e transforma dados em oportunidades reais de receita.
                    </motion.p>
                    <motion.div
                        className="cta-actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(249, 115, 22, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={openModal}
                        >
                            <Phone size={18} />
                            Falar com Consultor
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="modal-content-wrapper"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>
                                <X size={28} />
                            </button>
                            <img src={selectedImage} alt="Mockup Ampliado" className="modal-image" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}