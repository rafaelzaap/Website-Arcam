import React from 'react';

function Atividades() {
  const atividades = [
    {
      icon: 'fa-users',
      titulo: 'Reuniões Mensais',
      descricao: 'Encontros regulares para troca de experiências, palestras técnicas e confraternização entre os associados.'
    },
    {
      icon: 'fa-graduation-cap',
      titulo: 'Cursos e Treinamentos',
      descricao: 'Preparação para exames de licença, cursos de operação, eletrônica e propagação de ondas.'
    },
    {
      icon: 'fa-trophy',
      titulo: 'Concursos e Eventos',
      descricao: 'Participação em concursos nacionais e internacionais, além de eventos especiais de comunicação.'
    },
    {
      icon: 'fa-hands-helping',
      titulo: 'Serviço Comunitário',
      descricao: 'Apoio em emergências, eventos públicos e comunicações de utilidade pública.'
    },
    {
      icon: 'fa-satellite-dish',
      titulo: 'Estação Repetidora',
      descricao: 'Manutenção e operação de repetidoras para ampliar o alcance das comunicações locais.'
    },
    {
      icon: 'fa-tools',
      titulo: 'Oficinas Técnicas',
      descricao: 'Construção de antenas, manutenção de equipamentos e projetos de eletrônica aplicada.'
    }
  ];

  return (
    <section id="atividades" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nossas Atividades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {atividades.map((atividade, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-yellow-600 text-4xl mb-4">
                <i className={`fas ${atividade.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{atividade.titulo}</h3>
              <p className="text-gray-600">{atividade.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atividades;
