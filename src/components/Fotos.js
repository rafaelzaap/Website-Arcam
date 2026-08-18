import React, { useEffect, useState } from 'react';

function Fotos() {
  const [fotos, setFotos] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [fotoAberta, setFotoAberta] = useState(false);

  useEffect(() => {
    const carregarFotos = async () => {
      try {
        const resposta = await fetch(`${process.env.PUBLIC_URL}/fotos/config.json?_=${Date.now()}`);
        if (resposta.ok) {
          const lista = await resposta.json();
          if (Array.isArray(lista)) {
            setFotos(lista);
          }
        }
      } catch (erro) {
        // A galeria permanece vazia se ainda não houver fotos publicadas.
      }
    };

    carregarFotos();
  }, []);

  useEffect(() => {
    if (fotos.length <= 1) return undefined;

    const intervalo = setInterval(() => {
      setIndiceAtual((indice) => (indice + 1) % fotos.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [fotos.length]);

  return (
    <div className="fotos-galeria" aria-label="Galeria de fotos históricas da ARCAM">
      <div className="fotos-galeria-cabecalho">
        <h3 className="text-xl font-bold text-blue-800">Memórias da ARCAM</h3>
        <span>{fotos.length} fotos</span>
      </div>

      {fotos.length > 0 ? (
        <button type="button" className="fotos-galeria-janela" onClick={() => setFotoAberta(true)} aria-label="Ampliar foto da galeria">
          <div className="fotos-galeria-trilho" key={indiceAtual}>
            <img
              src={`${process.env.PUBLIC_URL}${fotos[indiceAtual]}`}
              alt="Registro histórico da ARCAM"
              loading="lazy"
              decoding="async"
            />
          </div>
        </button>
      ) : (
        <p className="fotos-galeria-vazia">
          Adicione as fotos históricas em <code>public/fotos</code> para exibi-las aqui.
        </p>
      )}

      {fotoAberta && (
        <div className="foto-lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setFotoAberta(false)}>
          <button type="button" className="foto-lightbox-fechar" onClick={() => setFotoAberta(false)} aria-label="Fechar foto">×</button>
          <img src={`${process.env.PUBLIC_URL}${fotos[indiceAtual]}`} alt="Registro histórico ampliado da ARCAM" onClick={(evento) => evento.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default Fotos;
