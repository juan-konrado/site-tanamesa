import './Header.css';

export function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo-area">
                    {/* Substitua por uma tag <img /> com o logo real depois */}
                    <span className="logo-icon">🍲</span>
                    <h1 className="logo-text">TaNaMesa<span className="logo-sub">by Karma</span></h1>
                </div>

                <nav className="header-nav">
                    <a href="#solucoes">Soluções</a>
                    <a href="#funcionalidades">Funcionalidades</a>
                    <a href="#precos">Preços</a>
                    <a href="#sobre">Sobre Nós</a>
                </nav>

                <div className="header-actions">
                    <button className="btn-primary">Assine Agora</button>
                </div>
            </div>
        </header>
    );
}