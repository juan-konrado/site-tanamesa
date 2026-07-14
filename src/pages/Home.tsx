import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Play, LayoutDashboard, Users, Receipt,
    Package, ChefHat, Calculator, Fingerprint, ShieldCheck,
    Lock, Palette, Moon, Store, Shield,
    Pizza, Coffee, Beer, UtensilsCrossed, Wine, CupSoda, X,
    CheckCircle2, Mail, Phone,
} from 'lucide-react';
import './Home.css';

// --- ANIMAÇÕES GERAIS (Framer Motion) ---
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

export default function Home() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState<string>('');

    // NOVO: Observador de Scroll (Scroll Spy)
    useEffect(() => {
        const sectionIds = ['pdv', 'estoque', 'seguranca', 'precos'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Quando uma seção cruza 50% da tela, ela se torna a ativa
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' } // Margem imaginária para disparar a troca no meio da tela
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-wrapper">

            {/* HEADER CENTRALIZADO */}
            <div className="header-wrapper">
                <header className="glass-header">
                    <motion.div className="logo-area" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <Store className="text-orange" size={24} />
                        <span className="logo-text">TaNaMesa</span>
                    </motion.div>
                    <nav className="nav-links">
                        {[
                            { id: 'pdv', label: 'Operação' },
                            { id: 'estoque', label: 'Gestão' },
                            { id: 'seguranca', label: 'Segurança' },
                            { id: 'precos', label: 'Planos' }
                        ].map((link) => (
                            <div className="nav-link-item" key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={activeSection === link.id ? 'active' : ''}
                                >
                                    {link.label}
                                </a>

                                {/* O sublinhado mágico do Framer Motion */}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="header-underline"
                                        className="nav-underline"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        ))}
                    </nav>
                    <motion.button className="btn-primary btn-sm" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        Começar
                    </motion.button>
                </header>
            </div>

            {/* HERO SECTION */}
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
                            <motion.button className="btn-primary" whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(249, 115, 22, 0.3)" }} whileTap={{ scale: 0.98 }}>
                                Assine Agora <ArrowRight size={18} />
                            </motion.button>
                            <motion.button className="btn-secondary" whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }} whileTap={{ scale: 0.98 }}>
                                <Play size={18} /> Demonstração
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div className="hero-content-right" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
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

            {/* PILARES 1 & 2 */}
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

            {/* BENTO GRID (AGORA NO MODO ESCURO) */}
            <section className="grid-section" id="seguranca">
                <div className="container">
                    <div className="section-header text-center">
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
                                whileHover={{ y: -4, boxShadow: "0 15px 30px rgba(0,0,0,0.5)", borderColor: "rgba(255,255,255,0.15)" }}>
                                <motion.div className="bento-icon-wrapper" >{feat.icon}</motion.div>
                                <h3 className="bento-title">{feat.title}</h3>
                                <p className="bento-text">{feat.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SEÇÃO DE PREÇOS */}
            <section className="pricing-section" id="precos">
                <div className="container">
                    <div className="section-header text-center">
                        <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="badge">Planos Transparentes</motion.span>
                        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-title">Escolha o plano ideal para o seu momento</motion.h2>
                        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-subtitle">Mude de plano ou cancele quando quiser. Sem taxas ocultas.</motion.p>
                    </div>

                    <motion.div className="pricing-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {pricingPlans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                                whileHover={{ y: -6, boxShadow: plan.highlighted ? "0 25px 50px rgba(249, 115, 22, 0.15)" : "0 20px 40px rgba(0,0,0,0.08)" }}
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
            </section>

            {/* FOOTER */}
            <footer className="footer-section">
                <div className="container">


                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="logo-area">
                                <Store className="text-orange" size={32} />
                                <span className="logo-text" style={{ fontSize: '1.75rem' }}>TaNaMesa</span>
                            </div>
                            <p className="footer-desc">
                                O ERP gastronômico invisível. Sua equipe aprende em 5 minutos, você gerencia em tempo real.
                            </p>
                            <div className="social-links">
                                <motion.a href="#" whileHover={{ y: -3, color: "var(--color-action)" }}></motion.a>
                                <motion.a href="#" whileHover={{ y: -3, color: "var(--color-action)" }}></motion.a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>Suporte</h4>
                            <a href="#">Central de Ajuda</a>
                        </div>

                        <div className="footer-contact">
                            <h4>Fale Conosco</h4>
                            <div className="contact-item">
                                <Mail size={18} className="text-orange" />
                                <a href="mailto:contato@tanamesa.com.br">contato@tanamesa.com.br</a>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} className="text-orange" />
                                <a href="tel:+5511999999999">(11) 99999-9999</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">Desenvolvido e assinado por <strong>Karma Software</strong> © {new Date().getFullYear()}</p>
                        <div className="legal-links">
                            <a href="#">Termos de Uso</a>
                            <a href="#">Política de Privacidade</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* MODAL LIGHTBOX COM FRAMER MOTION */}
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