import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import './Header.css';
import { useContactModal } from '../../contexts/ContactModalContext';

interface LinkItem {
    id: string;
    label: string;
    href: string; // ex: '/#pdv' ou '/planos'
}

const defaultLinks: LinkItem[] = [
    { id: 'pdv', label: 'Operação', href: '/#pdv' },
    { id: 'estoque', label: 'Gestão', href: '/#estoque' },
    { id: 'seguranca', label: 'Segurança', href: '/#seguranca' },
    { id: 'precos', label: 'Planos', href: '/planos' },
    { id: 'quemsomos', label: 'Quem Somos', href: '/quemsomos' },
];

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openModal } = useContactModal();
    const [activeSection, setActiveSection] = useState<string>('');

    // Função para navegar e depois rolar até a seção
    const handleNavClick = useCallback(
        (href: string) => {
            // Se o link é uma rota (sem hash), navega normalmente
            if (!href.includes('#')) {
                navigate(href);
                return;
            }

            // Separa o path base e o hash
            const [path, hash] = href.split('#');
            const targetPath = path || '/'; // se href="/#pdv", path será "/"

            // Navega para o path
            navigate(targetPath);

            // Aguarda a renderização e faz scroll
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        },
        [navigate]
    );

    // Scroll spy para seções na página (quando na Home)
    useEffect(() => {
        // Se não estiver na Home, não observa seções
        if (location.pathname !== '/') {
            // Se estiver em /planos, ativa o link Planos
            if (location.pathname === '/planos') {
                setActiveSection('precos');
            }
            else if (location.pathname === '/quemsomos') {
                setActiveSection('quemsomos');
            }

            else {
                setActiveSection('');
            }
            return;
        }

        const sectionIds = defaultLinks
            .filter(link => link.href.startsWith('/#'))
            .map(link => link.id);

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

        // Limpa ao desmontar ou mudar de rota
        return () => {
            observer.disconnect();
            // Quando sair da Home, reseta a seção ativa
            setActiveSection('');
        };
    }, [location.pathname]);

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
                    {defaultLinks.map((link) => (
                        <div className="nav-link-item" key={link.id}>
                            <button
                                className={`nav-btn ${activeSection === link.id ? 'active' : ''}`}
                                onClick={() => handleNavClick(link.href)}
                            >
                                {link.label}
                            </button>
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
                    Fale conosco
                </motion.button>
            </header>
        </div>
    );
};

export default Header;