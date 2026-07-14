import './Solutions.css';

export function Solutions() {
    const solutionsData = [
        {
            title: "Frente de Caixa (PDV)",
            desc: "Mapa de mesas inteligente, comandas rápidas e fechamento de caixa blindado (Z-Report).",
            icon: "🖥️"
        },
        {
            title: "Estoque Automatizado",
            desc: "Baixa automática de insumos por ficha técnica, alertas de estoque e engenharia de cardápio.",
            icon: "📦"
        },
        {
            title: "Gestão de Equipe",
            desc: "Login rápido via PIN de 4 dígitos, controle de acesso granular (RBAC) e auditoria de ações.",
            icon: "👥"
        },
        {
            title: "Painel SaaS B2B",
            desc: "Gestão flexível de planos para a rede, feature flags para módulos dinâmicos e controle total.",
            icon: "⚙️"
        }
    ];

    return (
        <section className="solutions-section" id="solucoes">
            <div className="solutions-container">
                <h2 className="section-title">Nossas Soluções</h2>
                <div className="cards-grid">
                    {solutionsData.map((item, index) => (
                        <div className="solution-card" key={index}>
                            <div className="card-icon">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}