import React, { useEffect, useRef } from 'react';
import { linkInscricao } from './Evento';

const contatoAntonio = '+55 22 99812-1082';
const chavePixArcam = '11.322.225/0001-80';

function ModalEvento({ aberto, fechar, blackFridayAtiva }) {
  const fecharRef = useRef(null);

  useEffect(() => {
    if (!aberto) return undefined;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    fecharRef.current?.focus();

    const fecharComEsc = (event) => {
      if (event.key === 'Escape') fechar();
    };

    document.addEventListener('keydown', fecharComEsc);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener('keydown', fecharComEsc);
    };
  }, [aberto, fechar]);

  if (!aberto) return null;

  return (
    <div
      className="evento-modal-fundo"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) fechar();
      }}
    >
      <div
        className="evento-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={blackFridayAtiva ? 'black-friday-modal-titulo' : 'evento-modal-titulo'}
        aria-describedby={blackFridayAtiva ? 'black-friday-modal-descricao' : 'evento-modal-descricao'}
      >
        <button
          ref={fecharRef}
          type="button"
          className="evento-modal-fechar"
          onClick={fechar}
          aria-label="Fechar aviso do evento"
        >
          ×
        </button>

        {blackFridayAtiva ? (
          <>
            <span className="evento-modal-selo">Oferta válida somente hoje</span>
            <h2 id="black-friday-modal-titulo" className="sr-only">Black Friday ARCAM</h2>
            <img
              className="black-friday-cartaz"
              src={`${process.env.PUBLIC_URL}/black-friday-arcam.png`}
              alt="Cartaz Black Friday: camisa do evento por apenas R$ 60,00, somente nesta sexta-feira, 27 de novembro"
            />
            <p id="black-friday-modal-descricao" className="black-friday-contato">
              Para comprar a camisa, entre diretamente em contato com Antonio (PY1TD).
            </p>
            <a
              className="evento-modal-inscricao"
              href="https://wa.me/5522998121082"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: {contatoAntonio}
            </a>
            <p className="black-friday-pix">
              <strong>Chave Pix ARCAM:</strong> {chavePixArcam}
            </p>
          </>
        ) : (
          <>
            <span className="evento-modal-selo">Inscrições abertas</span>
            <p className="evento-modal-chamada">Evento anual ARCAM</p>
            <h2 id="evento-modal-titulo">45º Encontro anual de radioamadores</h2>
            <p className="evento-modal-local">Campos dos Goytacazes</p>

            <div className="evento-modal-detalhes" aria-label="Informações do evento">
              <strong>29 de novembro de 2026</strong>
              <span>08h às 15h</span>
              <span>Moto Club de Campos</span>
            </div>

            <p id="evento-modal-descricao" className="evento-modal-descricao">
              Faça aqui sua inscrição para o encontro anual. Esta inscrição é exclusiva para o evento.
            </p>

            <a
              className="evento-modal-inscricao"
              href={linkInscricao}
              target="_blank"
              rel="noreferrer"
            >
              Inscrever-me no evento anual
            </a>
          </>
        )}
        <button type="button" className="evento-modal-continuar" onClick={fechar}>
          {blackFridayAtiva ? 'Fechar' : 'Continuar no site'}
        </button>
      </div>
    </div>
  );
}

export default ModalEvento;
