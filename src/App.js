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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero abrirModal={() => setModalAberto(true)} />
      <Sobre />
      <Atividades />
      <Contato />
      <Footer />
      <ModalAssociacao 
        aberto={modalAberto} 
        fechar={() => setModalAberto(false)} 
      />
    </div>
  );
}

export default App;
