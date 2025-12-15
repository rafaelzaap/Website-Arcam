import React, { useState } from 'react';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-blue-800 text-yellow-300 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/logo3.png"
              alt="Logo ARCAM"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">ARCAM</h1>
              <p className="text-sm text-yellow-100">Associação de Rádio Amador de Campos dos Goytacazes</p>
            </div>
          </div>
          <button 
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden text-yellow-300"
          >
            <i className={`fas ${menuAberto ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-yellow-500 transition">Início</a>
            <a href="#sobre" className="hover:text-yellow-500 transition">Sobre</a>
            <a href="#atividades" className="hover:text-yellow-500 transition">Atividades</a>
            <a href="#contato" className="hover:text-yellow-500 transition">Contato</a>
          </nav>
        </div>
        {menuAberto && (
          <nav className="md:hidden mt-4 flex flex-col space-y-2">
            <a href="#inicio" className="hover:text-yellow-500 transition py-2">Início</a>
            <a href="#sobre" className="hover:text-yellow-500 transition py-2">Sobre</a>
            <a href="#atividades" className="hover:text-yellow-500 transition py-2">Atividades</a>
            <a href="#contato" className="hover:text-yellow-500 transition py-2">Contato</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
