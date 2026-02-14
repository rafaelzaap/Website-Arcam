import React from 'react';

function Contato({ abrirModal }) {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Entre em Contato</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Localização</h3>
                <p className="text-gray-600">Campos dos Goytacazes - RJ</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600 text-2xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">arcam.py1arm@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600 text-2xl">
                <i className="fas fa-radio"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Frequência</h3>
                <p className="text-gray-600">Repetidora: 146.970 MHz SubTom: 88.5</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-yellow-600 text-2xl">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Reuniões</h3>
                <p className="text-gray-600">Todos os meses na praça do Trevo do Índio </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Quer se tornar um radioamador?</h3>
            <p className="text-gray-700 mb-6">
              Entre em contato conosco para saber mais sobre como obter sua licença e fazer parte
              da nossa comunidade!
            </p>
            <button
              onClick={abrirModal}
              className="bg-blue-600 text-yellow-300 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
