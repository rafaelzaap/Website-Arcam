import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Evento from './components/Evento';
import Sobre from './components/Sobre';
import Historia from './components/Historia';
import Atividades from './components/Atividades';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ModalAssociacao from './components/ModalAssociacao';
import ModalEvento from './components/ModalEvento';

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEventoAberto, setModalEventoAberto] = useState(true);

  useEffect(() => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/PY1ARM_MORSE.wav`);
    audio.preload = 'auto';

    const tocarMorse = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Mantém a navegação normal caso o dispositivo não consiga reproduzir o arquivo.
      });
    };

    document.addEventListener('click', tocarMorse, { capture: true, once: true });

    return () => {
      document.removeEventListener('click', tocarMorse, true);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);
  const fecharModalEvento = useCallback(() => setModalEventoAberto(false), []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Evento />
      <Sobre />
      <Historia />
      <Atividades />
      <Contato abrirModal={abrirModal} />
      <Footer />
      <ModalAssociacao aberto={modalAberto} fechar={fecharModal} />
      <ModalEvento aberto={modalEventoAberto} fechar={fecharModalEvento} />
    </div>
  );
}

export default App;
