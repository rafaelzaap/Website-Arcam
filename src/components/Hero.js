import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function Hero() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const carregarImagens = async () => {
      try {
        const resp = await fetch(process.env.PUBLIC_URL + '/carousel/config.json?_=' + Date.now());
        if (resp.ok) {
          const data = await resp.json();
          if (Array.isArray(data) && data.length > 0) {
            // Adiciona PUBLIC_URL aos caminhos
            const imagensComUrl = data.map(img => process.env.PUBLIC_URL + '/' + img.replace(/^\//, ''));
            setImagens(imagensComUrl);
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
            const r = await fetch(process.env.PUBLIC_URL + `/carousel/${nome}`);
            if (r.ok) {
              existentes.push(process.env.PUBLIC_URL + `/carousel/${nome}`);
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
      className="hero-secao relative flex items-center justify-center text-white overflow-hidden scroll-mt-24"
    >
      {temCarrossel ? (
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            slidesPerView={1}
            loop
            effect="fade"
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
                    backgroundPosition: 'center 28%',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500" />
      )}

      <div className="hero-overlay absolute inset-0"></div>

      <div className="hero-content container mx-auto px-5 text-center relative z-10">
        <span className="hero-kicker">Desde 1981 · Campos dos Goytacazes</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Bem-vindo à ARCAM
        </h2>
        <p className="hero-subtitle text-xl mb-8 drop-shadow-md">
          Conectando radioamadores em Campos dos Goytacazes
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            type="button"
            className="button-primary"
            disabled
            aria-describedby="associacao-indisponivel"
          >
            Quero fazer parte
          </button>
          <a href="#sobre" className="button-secondary">Conheça a ARCAM <span aria-hidden="true">↓</span></a>
        </div>
        <p id="associacao-indisponivel" className="hero-associacao-aviso">
          Associação temporariamente indisponível
        </p>
      </div>
      <div className="hero-scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2">Role para explorar <span>↓</span></div>
    </section>
  );
}

export default Hero;
