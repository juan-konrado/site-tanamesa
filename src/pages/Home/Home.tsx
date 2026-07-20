import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Play, LayoutDashboard, Users, Receipt,
    Package, ChefHat, Calculator, Fingerprint, ShieldCheck,
    Lock, Palette,
    Pizza, Coffee, Beer, UtensilsCrossed, Wine, CupSoda, X, Phone
} from 'lucide-react';
import './Home.css';
import { useContactModal } from '../../contexts/ContactModalContext';


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
        title: "Frente de Caixa (PDV) Ágil e Visual",
        subtitle: "Feito para a correria do dia a dia. Sem cliques desnecessários.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        reverse: false,
        items: [
            { icon: <LayoutDashboard size={24} />, title: "Mapa de Mesas Inteligente", text: "Visualize em tempo real quais mesas estão livres, ocupadas e quantas pessoas estão sentadas." },
            { icon: <Users size={24} />, title: "Comandas Individuais e Avulsas", text: "Chega de confusão na hora de dividir a conta. Gerencie clientes na mesma mesa com comandas separadas ou atenda no balcão." },
            { icon: <Receipt size={24} />, title: "Abertura e Fechamento de Turno", text: "Segurança financeira total. Fechamento de caixa com relatório detalhado 'Z-Report' dividindo faturamento por PIX, Cartão e Dinheiro." }
        ]
    },
    {
        id: 'estoque',
        title: "Estoque e Fichas Técnicas",
        subtitle: "Você não estoca o que vende, você estoca o que compra. Nós entendemos isso.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        reverse: true,
        items: [
            { icon: <Package size={24} />, title: "Gestão de Matéria-Prima", text: "Controle rigoroso de insumos (Kilos, Litros, Unidades) com alertas automáticos de estoque crítico e mínimo." },
            { icon: <ChefHat size={24} />, title: "Composição de Receitas", text: "Crie a Ficha Técnica de cada prato. Ao vender 1 'X-Burger', o sistema dá baixa automaticamente no pão, na carne e no queijo." },
            { icon: <Calculator size={24} />, title: "Cálculo de Custo Médio", text: "Saiba exatamente quanto custa produzir cada item do seu cardápio para precificar corretamente e aumentar sua margem de lucro." }
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
        const sectionIds = ['pdv', 'estoque', 'seguranca'];

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
                        <motion.div variants={fadeUp} className="badge">Nova Geração de ERP</motion.div>
                        <motion.h1 variants={fadeUp} className="hero-title">
                            O Sistema Definitivo para o seu <span className="text-gradient">Restaurante</span>.
                        </motion.h1>
                        <motion.p variants={fadeUp} className="hero-subtitle">
                            Mais agilidade no balcão, controle total do estoque e uma equipe sincronizada. Tudo em uma plataforma moderna e rápida.
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
                                <LayoutDashboard size={20} className="text-orange" />
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

            {/* PILARES */}
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

            {/* BENTO GRID */}
            <section className="grid-section" id="seguranca">
                <div className="container">
                    <div className="text-center">
                        <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="badge">Segurança Institucional</motion.span>
                        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-title text-light">Gestão de Equipe e Marca (RBAC)</motion.h2>
                        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-subtitle text-light-muted">Controle absoluto sobre quem acessa o quê. E o sistema se adapta à identidade visual do seu negócio, gerando mais confiança na sua operação.</motion.p>
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

            {/* SEÇÃO CTA FINAL */}
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
                        Pronto para transformar a gestão do seu restaurante?
                    </motion.h2>
                    <motion.p
                        className="cta-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Agende uma demonstração personalizada e descubra como o <strong>TaNaMesa</strong> pode
                        aumentar sua margem de lucro em até <strong>30%</strong> no primeiro mês.
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