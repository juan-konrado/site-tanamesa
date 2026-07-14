import { motion, type Variants } from 'framer-motion';
import { LayoutDashboard, ChefHat, Fingerprint, PieChart } from 'lucide-react';
import './Features.css';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Features() {
    return (
        <section className="bento-section">
            <div className="bento-container">
                <div className="bento-header">
                    <h2 className="bento-title">Tudo o que você precisa. <br />Onde você precisa.</h2>
                    <p className="bento-subtitle">Módulos perfeitamente integrados que conversam entre si.</p>
                </div>

                <motion.div
                    className="bento-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {/* Card Gigante (Destaque Principal) */}
                    <motion.div variants={fadeUp} className="bento-card col-span-2 row-span-2 card-dark">
                        <LayoutDashboard className="bento-icon text-orange" size={32} />
                        <h3>Frente de Caixa (PDV) Visual</h3>
                        <p>Acompanhe o mapa do salão em tempo real. Mesas livres, ocupadas, tempo de permanência e fechamento de conta em 2 cliques com split de pagamentos.</p>
                        <div className="bento-illustration mockup-mini"></div>
                    </motion.div>

                    {/* Cards Secundários */}
                    <motion.div variants={fadeUp} className="bento-card">
                        <ChefHat className="bento-icon" size={28} />
                        <h3>Engenharia de Cardápio</h3>
                        <p>Baixa automática de insumos. Vendeu um X-Burger? O sistema deduz pão, carne e queijo do estoque.</p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bento-card">
                        <Fingerprint className="bento-icon" size={28} />
                        <h3>Acesso via PIN</h3>
                        <p>Login ultrarrápido para garçons no meio da correria. Senhas de 4 dígitos e permissões granulares.</p>
                    </motion.div>

                    {/* Card Médio Horizontal */}
                    <motion.div variants={fadeUp} className="bento-card col-span-2">
                        <PieChart className="bento-icon" size={28} />
                        <h3>Dashboard Multi-Tenant B2B</h3>
                        <p>Visão de rede. Controle dezenas de filiais de um único painel. Ative ou desative módulos (Feature Flags) por restaurante com um clique.</p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}