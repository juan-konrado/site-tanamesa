import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

export function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <motion.div
                    className="testimonial-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Quote className="quote-icon" size={40} />
                    <p className="testimonial-text">
                        "O TaNaMesa resolveu nossos furos no estoque na primeira semana.
                        A agilidade com que os garçons logam via PIN e lançam as comandas aumentou nosso
                        giro de mesas em impressionantes 30%. O sistema é simplesmente invisível, ele apenas funciona."
                    </p>
                    <div className="testimonial-author">
                        {/* Imagem de placeholder */}
                        <div className="author-avatar"></div>
                        <div className="author-info">
                            <span className="author-name">João Silva</span>
                            <span className="author-role">Proprietário, Restaurante Sabor & Arte</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}