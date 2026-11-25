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

const BLACK_FRIDAY_INICIO = new Date(2026, 10, 27, 0, 0, 0, 0);
const BLACK_FRIDAY_FIM = new Date(2026, 10, 28, 0, 0, 0, 0);

function blackFridayEstaAtiva(agora = new Date()) {
  return agora >= BLACK_FRIDAY_INICIO && agora < BLACK_FRIDAY_FIM;
}

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEventoAberto, setModalEventoAberto] = useState(true);
  const previewBlackFriday = new URLSearchParams(window.location.search).get('preview') === 'blackfriday';
  const [blackFridayAtiva, setBlackFridayAtiva] = useState(() => (
    previewBlackFriday || blackFridayEstaAtiva()
  ));

  useEffect(() => {
    if (previewBlackFriday) return undefined;

    const atualizarBlackFriday = () => setBlackFridayAtiva(blackFridayEstaAtiva());
    const intervalo = window.setInterval(atualizarBlackFriday, 1000);

    return () => window.clearInterval(intervalo);
  }, [previewBlackFriday]);

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
      <ModalEvento
        aberto={modalEventoAberto}
        fechar={fecharModalEvento}
        blackFridayAtiva={blackFridayAtiva}
      />
    </div>
  );
}

export default App;
