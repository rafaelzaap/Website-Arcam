import React from 'react';
import Fotos from './Fotos';

function Sobre() {
  return (
    <section id="sobre" className="section-light py-20 bg-white">
      <div className="site-shell px-5">
        <div className="section-heading">
          <span className="eyebrow">Nossa história</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Uma comunidade que <em>conecta</em></h2>
          <p>Conhecimento, amizade e comunicação a serviço da nossa região.</p>
        </div>
        <div className="grid gap-8 items-center lg:grid-cols-[1fr_0.8fr_1.45fr]">
          <div className="about-copy">
            <p className="text-gray-700 mb-4">
              A Associação dos Radioamadores de Campos dos Goytacazes (ARCAM) é uma entidade dedicada
              a promover e desenvolver o radioamadorismo na região.
            </p>
            <p className="text-gray-700 mb-4">
              Fundada por entusiastas da comunicação via rádio, a ARCAM reúne operadores licenciados 
              e interessados em aprender sobre esta fascinante atividade técnica e social.
            </p>
            <p className="text-gray-700">
              Nossa missão é fomentar o conhecimento técnico, a camaradagem e o serviço à comunidade 
              através do radioamadorismo.
            </p>
          </div>
          <div className="values-card bg-yellow-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Nossos Valores</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-yellow-600 mt-1 mr-3"></i>
                <span className="text-gray-700">Educação técnica e capacitação</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-yellow-600 mt-1 mr-3"></i>
                <span className="text-gray-700">Serviço à comunidade</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-yellow-600 mt-1 mr-3"></i>
                <span className="text-gray-700">Fraternidade entre operadores</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-yellow-600 mt-1 mr-3"></i>
                <span className="text-gray-700">Experimentação e inovação</span>
              </li>
            </ul>
          </div>
          <Fotos />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
