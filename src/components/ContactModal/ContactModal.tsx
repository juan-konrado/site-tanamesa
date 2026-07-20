import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useContactModal } from '../../contexts/ContactModalContext';
import './ContactModal.css';

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    empresa: string;
}

const initialForm: FormData = {
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
};

const ContactModal: React.FC = () => {
    const { isOpen, closeModal } = useContactModal();
    const [form, setForm] = useState<FormData>(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simula envio para API
        await new Promise((res) => setTimeout(res, 1500));

        console.log('Dados enviados:', form);
        setLoading(false);
        setSubmitted(true);
    };

    const handleClose = () => {
        closeModal();
        // Pequeno delay para não ver o reset durante a animação de saída
        setTimeout(() => {
            setForm(initialForm);
            setSubmitted(false);
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className="contact-modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-btn" onClick={handleClose}>
                            <X size={20} />
                        </button>

                        {!submitted ? (
                            <>
                                <div className="contact-modal-header">
                                    <h2>Solicitar Contato</h2>
                                    <p>Preencha os dados e nossa equipe entrará em contato.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome completo *</label>
                                        <input
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            required
                                            placeholder="Seu nome"
                                            value={form.nome}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">E-mail *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="email@exemplo.com"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="empresa">Nome da empresa</label>
                                        <input
                                            id="empresa"
                                            name="empresa"
                                            type="text"
                                            placeholder="Nome do restaurante"
                                            value={form.empresa}
                                            onChange={handleChange}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="telefone">Telefone (WhatsApp) *</label>
                                        <input
                                            id="telefone"
                                            name="telefone"
                                            type="tel"
                                            required
                                            placeholder="(11) 99999-9999"
                                            value={form.telefone}
                                            onChange={handleChange}
                                        />
                                    </div>


                                    <motion.button
                                        type="submit"
                                        className="btn-primary submit-btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>Enviando...</>
                                        ) : (
                                            <>
                                                <Send size={18} /> Enviar solicitação
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </>
                        ) : (
                            <div className="success-state">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                >
                                    <CheckCircle2 size={64} className="text-orange" />
                                </motion.div>
                                <h2>Solicitação enviada!</h2>
                                <p>Nossa equipe entrará em contato em até <strong>24 horas</strong>.</p>
                                <button className="btn-primary" onClick={handleClose}>
                                    Fechar
                                </button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;