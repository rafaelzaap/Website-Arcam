import React, { useEffect, useRef } from 'react';
import { linkInscricao } from './Evento';

function ModalEvento({ aberto, fechar }) {
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
        aria-labelledby="evento-modal-titulo"
        aria-describedby="evento-modal-descricao"
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
        <button type="button" className="evento-modal-continuar" onClick={fechar}>
          Continuar no site
        </button>
      </div>
    </div>
  );
}

export default ModalEvento;
