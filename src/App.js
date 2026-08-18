import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Evento from './components/Evento';
import Sobre from './components/Sobre';
import Historia from './components/Historia';
import Atividades from './components/Atividades';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ModalAssociacao from './components/ModalAssociacao';

function App() {
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/PY1ARM_MORSE.wav`);
    audio.preload = 'auto';

    audio.play().catch(() => {
      // Os navegadores podem bloquear áudio automático sem interação do visitante.
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero abrirModal={abrirModal} />
      <Evento />
      <Sobre />
      <Historia />
      <Atividades />
      <Contato abrirModal={abrirModal} />
      <Footer />
      <ModalAssociacao aberto={modalAberto} fechar={fecharModal} />
    </div>
  );
}

export default App;
