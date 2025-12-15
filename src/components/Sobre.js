import React from 'react';

function Sobre() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Sobre a ARCAM</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              A Associação de Rádio Amador de Campos dos Goytacazes (ARCAM) é uma entidade dedicada 
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
          <div className="bg-yellow-50 p-8 rounded-lg">
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
        </div>
      </div>
    </section>
  );
}

export default Sobre;
