import React, { useState } from 'react';

const conteudos = {
  historia: [
    { periodo: '1981', titulo: 'O começo da ARCAM', texto: 'Radioamadores de Campos dos Goytacazes se unem para fortalecer a comunicação e a amizade na região.' },
    { periodo: 'Anos 90', titulo: 'Mais alcance, mais comunidade', texto: 'A associação amplia suas atividades e começa a participar de encontros, concursos e ações de utilidade pública.' },
    { periodo: 'Hoje', titulo: 'Uma rede que continua conectando', texto: 'A ARCAM mantém viva a cultura do radioamadorismo, aproximando diferentes gerações por meio da tecnologia.' }
  ],
  participar: [
    { periodo: '01', titulo: 'Conheça a comunidade', texto: 'Acompanhe nossas reuniões, eventos e atividades abertas para descobrir como o radioamadorismo pode fazer parte da sua rotina.' },
    { periodo: '02', titulo: 'Aprenda e experimente', texto: 'Participe de encontros técnicos, oficinas e conversas com operadores que adoram compartilhar conhecimento.' },
    { periodo: '03', titulo: 'Associe-se à ARCAM', texto: 'Preencha o formulário de associação e venha ajudar a construir os próximos capítulos dessa história.' }
  ]
};

function Historia() {
  const [abaAtiva, setAbaAtiva] = useState('historia');

  return (
    <section id="historia" className="history-section py-20">
      <div className="site-shell px-5">
        <div className="section-heading">
          <span className="eyebrow">Uma história em movimento</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">De onde viemos e para onde vamos</h2>
          <p className="history-intro">Uma experiência de conteúdo progressivo, inspirada em portfólios que deixam o visitante escolher o próximo passo.</p>
        </div>

        <div className="history-tabs" role="tablist" aria-label="Informações sobre a ARCAM">
          <button className={abaAtiva === 'historia' ? 'active' : ''} onClick={() => setAbaAtiva('historia')} role="tab" aria-selected={abaAtiva === 'historia'}>Nossa história</button>
          <button className={abaAtiva === 'participar' ? 'active' : ''} onClick={() => setAbaAtiva('participar')} role="tab" aria-selected={abaAtiva === 'participar'}>Como participar</button>
        </div>

        <div className="history-timeline" key={abaAtiva}>
          {conteudos[abaAtiva].map((item) => (
            <article className="history-item" key={item.periodo}>
              <span className="history-periodo">{item.periodo}</span>
              <div><h3>{item.titulo}</h3><p>{item.texto}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Historia;
