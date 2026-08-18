import React, { useState } from 'react';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="site-header text-white fixed top-0 left-0 w-full z-50">
      <div className="site-shell px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="brand flex items-center space-x-3" aria-label="ARCAM - início">
            <img
              src={process.env.PUBLIC_URL + '/logoarcam.png'}
              alt="Logo ARCAM"
              className="h-14 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-extrabold tracking-wide text-yellow-300">ARCAM</h1>
              <p className="hidden sm:block text-xs text-blue-100">Associação dos Radioamadores de Campos</p>
            </div>
          </a>
          <button 
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            className="menu-toggle md:hidden text-yellow-300"
          >
            <i className={`fas ${menuAberto ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="nav-link hover:text-yellow-300 transition"
            >
              Início
            </button>
            <a href="#sobre" className="nav-link hover:text-yellow-300 transition">Sobre</a>
            <a href="#historia" className="nav-link hover:text-yellow-300 transition">História</a>
            <a href="#atividades" className="nav-link hover:text-yellow-300 transition">Atividades</a>
            <a href="#contato" className="nav-link nav-link-cta transition">Contato</a>
          </nav>
        </div>
        {menuAberto && (
          <nav className="mobile-nav md:hidden mt-3 flex flex-col space-y-1">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMenuAberto(false);
              }}
              className="hover:text-yellow-300 transition py-2 text-left"
            >
              Início
            </button>
            <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-yellow-300 transition py-2">Sobre</a>
            <a href="#historia" onClick={() => setMenuAberto(false)} className="hover:text-yellow-300 transition py-2">História</a>
            <a href="#atividades" onClick={() => setMenuAberto(false)} className="hover:text-yellow-300 transition py-2">Atividades</a>
            <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-yellow-300 transition py-2">Contato</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
