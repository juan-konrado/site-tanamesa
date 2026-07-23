import React from 'react';
import { motion } from 'framer-motion';
import { Store, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="logo-area">
                            <Store className="text-orange" size={32} />
                            <span className="logo-text" style={{ fontSize: '1.75rem', color: '#F8FAFC' }}>
                                TáNaMesa
                            </span>
                        </div>
                        <p className="footer-desc">
                            O ERP gastronômico invisível. Sua equipe aprende em 5 minutos, você gerencia em tempo real.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Suporte</h4>
                        <a href="#">Central de Ajuda</a>
                    </div>

                    <div className="footer-links">
                        <h4>Redes Sociais</h4>
                        <a href="#">Instagram</a>
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
                    <p className="copyright">
                        Desenvolvido e assinado por <strong>Karma Software</strong> © {new Date().getFullYear()}
                    </p>
                    <div className="legal-links">
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;