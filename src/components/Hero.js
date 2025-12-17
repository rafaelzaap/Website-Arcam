import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function Hero({ abrirModal }) {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    // Busca um arquivo de configuração opcional em public/carousel/config.json
    // Se não existir, usa nomes padrão foto1.jpg, foto2.jpg, foto3.jpg...
    const carregarImagens = async () => {
      try {
        const resp = await fetch('/carousel/config.json?_=' + Date.now());
        if (resp.ok) {
          const data = await resp.json();
          if (Array.isArray(data) && data.length > 0) {
            setImagens(data);
            return;
          }
        }
      } catch (e) {
        // ignora erro e cai para o fallback
      }

      // Fallback: tenta carregar nomes padrão
      const padroes = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg'];
      const existentes = [];

      await Promise.all(
        padroes.map(async (nome) => {
          try {
            const r = await fetch(`/carousel/${nome}`);
            if (r.ok) {
              existentes.push(`/carousel/${nome}`);
            }
          } catch (e) {
            // ignora
          }
        })
      );

      setImagens(existentes);
    };

    carregarImagens();
  }, []);

  const temCarrossel = imagens && imagens.length > 0;

  return (
    <section
      id="inicio"
      className="relative text-white py-20 overflow-hidden scroll-mt-24"
    >
      {/* Se houver imagens, mostra carrossel; senão, fundo azul liso como antes */}
      {temCarrossel ? (
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            slidesPerView={1}
            loop
            effect="coverflow"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-full"
          >
            {imagens.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${src})`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500" />
      )}

      {/* Overlay azul semi-transparente para manter legibilidade */}
      <div className="absolute inset-0 bg-blue-700 bg-opacity-70"></div>

      {/* Conteúdo original mantido */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Bem-vindo à ARCAM
        </h2>
        <p className="text-xl mb-8 drop-shadow-md">
          Conectando radioamadores em Campos dos Goytacazes
        </p>
        <button
          onClick={abrirModal}
          className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Associe-se
        </button>
      </div>
    </section>
  );
}

export default Hero;
