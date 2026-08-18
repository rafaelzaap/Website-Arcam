import React, { useEffect, useState } from 'react';

function Fotos() {
  const [fotos, setFotos] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);

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
    if (fotos.length <= 6) return undefined;

    const intervalo = setInterval(() => {
      setIndiceAtual((indice) => (indice + 6) % fotos.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [fotos.length]);

  const fotosVisiveis = Array.from({ length: Math.min(6, fotos.length) }, (_, deslocamento) => (
    fotos[(indiceAtual + deslocamento) % fotos.length]
  ));

  return (
    <div className="fotos-galeria" aria-label="Galeria de fotos históricas da ARCAM">
      <div className="fotos-galeria-cabecalho">
        <h3 className="text-xl font-bold text-blue-800">Memórias da ARCAM</h3>
        <span>{fotos.length} fotos</span>
      </div>

      {fotos.length > 0 ? (
        <div className="fotos-galeria-janela">
          <div className="fotos-galeria-trilho" key={indiceAtual}>
            {fotosVisiveis.map((foto, indice) => (
              <img
                key={`${foto}-${indice}`}
                src={`${process.env.PUBLIC_URL}${foto}`}
                alt="Registro histórico da ARCAM"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="fotos-galeria-vazia">
          Adicione as fotos históricas em <code>public/fotos</code> para exibi-las aqui.
        </p>
      )}
    </div>
  );
}

export default Fotos;
