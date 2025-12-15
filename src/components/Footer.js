import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-yellow-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-yellow-100 transition">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="hover:text-yellow-100 transition">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="hover:text-yellow-100 transition">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
        <p className="text-yellow-100">
          © 2024 ARCAM - Associação de Rádio Amador de Campos dos Goytacazes
        </p>
        <p className="text-yellow-300 text-sm mt-2">
          73! - Saudações Radioamadorísticas
        </p>
      </div>
    </footer>
  );
}

export default Footer;
