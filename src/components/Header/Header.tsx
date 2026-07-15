import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import './Header.css';

interface HeaderProps {
    activeSection: string;
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
    activeSection,
    links = defaultLinks,
    onCtaClick,
    ctaLabel = 'Começar',
}) => {
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
                    onClick={onCtaClick}
                >
                    {ctaLabel}
                </motion.button>
            </header>
        </div>
    );
};

export default Header;