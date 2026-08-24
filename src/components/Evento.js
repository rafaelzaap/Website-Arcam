import React from 'react';

const linkInscricao = 'https://tally.so/r/yP52b6';

function Evento() {
  return (
    <section className="evento-destaque" aria-labelledby="evento-titulo">
      <div className="evento-destaque-conteudo">
        <div className="evento-destaque-selo">Evento especial ARCAM</div>
        <h2 id="evento-titulo">45º Encontro anual de radioamadores</h2>
        <p className="evento-destaque-subtitulo">Campos dos Goytacazes</p>

        <div className="evento-destaque-detalhes">
          <span>29 de novembro de 2026</span>
          <span>08h às 15h</span>
          <span>Moto Club de Campos</span>
        </div>

        <p className="evento-destaque-texto">
          Um dia de encontro, amizade, troca de experiências e muita paixão pelo radioamadorismo.
          Traga sua família e participe desta celebração da nossa comunidade.
        </p>

        <div className="evento-destaque-rodape">
          <strong>Camisa com churrasco: R$ 70 até 31/10</strong>
          <a href={linkInscricao} target="_blank" rel="noreferrer">
            Faça sua inscrição
          </a>
        </div>
      </div>
    </section>
  );
}

export default Evento;
