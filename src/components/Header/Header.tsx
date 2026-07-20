import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import './Header.css';
import { useContactModal } from '../../contexts/ContactModalContext';


interface HeaderProps {
    activeSection?: string;  // ← opcional agora
    links?: { id: string; label: string; href?: string }[];
    onCtaClick?: () => void;
    ctaLabel?: string;
}

const defaultLinks = [
    { id: 'pdv', label: 'Operação', href: '/#pdv' },
    { id: 'estoque', label: 'Gestão', href: '/#estoque' },
    { id: 'seguranca', label: 'Segurança', href: '/#seguranca' },
    { id: 'precos', label: 'Planos', href: '/planos' },
];

const Header: React.FC<HeaderProps> = ({
    activeSection: externalActiveSection,
    links = defaultLinks,
    ctaLabel = 'Entrar em contato',
}) => {
    // Estado interno para scroll spy (usado quando não recebe a prop externamente)
    const [internalActiveSection, setInternalActiveSection] = useState<string>('');
    const { openModal } = useContactModal();

    const activeSection = externalActiveSection || internalActiveSection;

    // Scroll spy interno
    useEffect(() => {
        // Só ativa o scroll spy interno se não houver controle externo
        if (externalActiveSection !== undefined) return;

        const sectionIds = defaultLinks
            .filter(link => link.href?.startsWith('/#'))
            .map(link => link.id);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInternalActiveSection(entry.target.id);
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
    }, [externalActiveSection]);

    return (
        <div className="header-wrapper">
            <header className="glass-header">
                <motion.div
                    className="logo-area"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <Store className="text-orange" size={24} />
                    <span className="logo-text">TaNaMesa</span>
                </motion.div>

                <nav className="nav-links">
                    {links.map((link) => (
                        <div className="nav-link-item" key={link.id}>
                            <a
                                href={link.href || `#${link.id}`}
                                className={activeSection === link.id ? 'active' : ''}
                            >
                                {link.label}
                            </a>
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

                <motion.button
                    className="btn-primary btn-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openModal}
                >
                    {ctaLabel}
                </motion.button>
            </header>
        </div>
    );
};

export default Header;