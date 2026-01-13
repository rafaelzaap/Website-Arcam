import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Atividades from './components/Atividades';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ModalAssociacao from './components/ModalAssociacao';

function App() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Header />
      <Hero abrirModal={abrirModal} />
      <Sobre />
      <Atividades />
      <Contato abrirModal={abrirModal} />
      <Footer />
      <ModalAssociacao aberto={modalAberto} fechar={fecharModal} />
    </div>
  );
}

export default App;
