import React from 'react';

function Hero({ abrirModal }) {
  return (
    <section
      id="inicio"
      className="relative text-white py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/logoCampos.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay azul semi-transparente para manter legibilidade */}
      <div className="absolute inset-0 bg-blue-700 bg-opacity-75"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Bem-vindo à ARCAM
        </h2>
        <p className="text-xl mb-8 drop-shadow-md">
          Conectando radioamadores em Campos dos Goytacazes
        </p>
        <button
          onClick={abrirModal}
          className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Associe-se
        </button>
      </div>
    </section>
  );
}

export default Hero;
