"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShowcaseImageCard } from "@/components/cards/ShowcaseImageCard";
import { RestauranteDetalheModal } from "@/components/cards/RestauranteDetalheModal";
import { Button } from "@/components/ui/button";
import { HotelDetalheModal } from "@/components/cards/HotelDetalheModal";
import { CafeDetalheModal } from "@/components/cards/CafeDetalheModal";
import { TransportePasseioDetalheModal } from "@/components/cards/TransportePasseioDetalheModal";
import { CulturaMuseusDetalheModal } from "@/components/cards/CulturaMuseusDetalheModal";

const amazonPalette = {
  light: "#b0c735",
  medium: "#4f7227",
  dark1: "#114b0c",
  dark2: "#0c3a1b",
  blue: "#112914",
};

const SEGMENTOS = [
  {
    image: "/images/restaurante.jpg",
    title: "Restaurantes",
    description:
      "Encante qualquer cliente, de qualquer país: cardápio digital traduzido automaticamente, fotos de pratos, pedidos sem fila e visibilidade no mapa oficial da COP30. Chega de perder vendas por barreira de idioma ou atendimento lento.",
    children: (
      <RestauranteDetalheModal
        trigger={
          <Button
            className="mt-auto w-fit font-semibold rounded-full px-5 py-2 shadow-lg border-0"
            style={{
              background: amazonPalette.light,
              color: amazonPalette.dark2,
              boxShadow: `0 4px 16px ${amazonPalette.medium}77`,
            }}
            onMouseOver={e =>
              (e.currentTarget.style.background = amazonPalette.medium)
            }
            onMouseOut={e =>
              (e.currentTarget.style.background = amazonPalette.light)
            }
          >
            Saiba mais →
          </Button>
        }
      />
    ),
  },
  {
    image: "/images/hotel.jpg",
    title: "Hotéis & Pousadas",
    description:
      "Receba hóspedes do mundo todo com check-in digital, reservas instantâneas e confirmação automática em vários idiomas. Mostre avaliações reais e diferenciais do seu espaço em uma página personalizada para a COP30.",
    children: (
      <HotelDetalheModal
        trigger={
          <Button
            className="mt-auto w-fit font-semibold rounded-full px-5 py-2 shadow-lg border-0"
            style={{
              background: amazonPalette.light,
              color: amazonPalette.dark2,
              boxShadow: `0 4px 16px ${amazonPalette.medium}77`,
            }}
            onMouseOver={e =>
              (e.currentTarget.style.background = amazonPalette.medium)
            }
            onMouseOut={e =>
              (e.currentTarget.style.background = amazonPalette.light)
            }
          >
            Saiba mais →
          </Button>
        }
      />
    ),
  },
  {
    image: "/images/cafe.jpg",
    title: "Cafés & Food-Trucks",
    description:
      "Aproxime seu café do público global: pedidos e pagamentos pelo celular, menu ilustrado e recomendações automáticas em inglês, espanhol e português. Seja encontrado, seja lembrado, seja compartilhado.",
    children: (
      <CafeDetalheModal
        trigger={
          <Button
            className="mt-auto w-fit font-semibold rounded-full px-5 py-2 shadow-lg border-0"
            style={{
              background: amazonPalette.light,
              color: amazonPalette.dark2,
              boxShadow: `0 4px 16px ${amazonPalette.medium}77`,
            }}
            onMouseOver={e =>
              (e.currentTarget.style.background = amazonPalette.medium)
            }
            onMouseOut={e =>
              (e.currentTarget.style.background = amazonPalette.light)
            }
          >
            Saiba mais →
          </Button>
        }
      />
    ),
  },
  {
    image: "/images/passeio.jpg",
    title: "Transporte & Passeios",
    description:
      "Ofereça reservas online, mapas interativos, tour guiado em áudio e agendamento fácil para grupos internacionais. Seu serviço, pronto para o turista digital da COP30.",
    children: (
      <TransportePasseioDetalheModal
        trigger={
          <Button
            className="mt-auto w-fit font-semibold rounded-full px-5 py-2 shadow-lg border-0"
            style={{
              background: amazonPalette.light,
              color: amazonPalette.dark2,
              boxShadow: `0 4px 16px ${amazonPalette.medium}77`,
            }}
            onMouseOver={e =>
              (e.currentTarget.style.background = amazonPalette.medium)
            }
            onMouseOut={e =>
              (e.currentTarget.style.background = amazonPalette.light)
            }
          >
            Saiba mais →
          </Button>
        }
      />
    ),
  },
  {
    image: "/images/museu.jpg",
    title: "Cultura & Museus",
    description:
      "Encante visitantes com experiências imersivas: venda de ingressos online, agenda multilíngue e tour virtual do seu espaço – tudo acessível do celular, sem fila, sem papel.",
    children: (
      <CulturaMuseusDetalheModal
        trigger={
          <Button
            className="mt-auto w-fit font-semibold rounded-full px-5 py-2 shadow-lg border-0"
            style={{
              background: amazonPalette.light,
              color: amazonPalette.dark2,
              boxShadow: `0 4px 16px ${amazonPalette.medium}77`,
            }}
            onMouseOver={e =>
              (e.currentTarget.style.background = amazonPalette.medium)
            }
            onMouseOut={e =>
              (e.currentTarget.style.background = amazonPalette.light)
            }
          >
            Saiba mais →
          </Button>
        }
      />
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* HEADER FIXO COM LOGO COP30 */}
      <header className="w-full flex flex-col items-center justify-center py-6 md:py-8 bg-transparent">
        <Image
          src="/images/cop30-logo.png"
          alt="Logo COP30 Brasil Amazônia"
          width={175}      // aumentei aqui
          height={135}     // aumentei aqui
          priority
          className="h-[84px] w-auto md:h-[105px]" // aumentei aqui
        />
      </header>
      <main
        className="relative min-h-screen w-full py-16 px-4 overflow-x-hidden"
        style={{ background: amazonPalette.dark2 }}
      >
        {/* BACKGROUND CAMUFLADO */}
        <div
          aria-hidden
          id="background-image"
          className="fixed inset-0 z-0 pointer-events-none bg-no-repeat bg-center bg-cover opacity-20 blur-[2px] brightness-[0.5] transition-all duration-500"
          style={{
            backgroundImage: "url('/images/bg-mobile.jpg')",
          }}
        />
        <style jsx global>{`
          @media (min-width: 768px) {
            #background-image {
              background-image: url('/images/bg-desktop.jpg') !important;
            }
          }
        `}</style>
        {/* HERO */}
        <section className="relative z-10 text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: amazonPalette.light }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            COP30: Seu Negócio em Destaque na Amazônia Global
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "#d4e8c6" }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            Conquiste clientes internacionais e valorize sua marca na COP30. Soluções digitais para transformar visitas em vendas, reservas em fidelização e sua empresa em referência para o mundo.
          </motion.p>
        </section>
        {/* GRID DE CARDS */}
        <section className="relative z-10 w-full flex justify-center">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl justify-items-center">
            {SEGMENTOS.map((segmento) => (
              <ShowcaseImageCard
                key={segmento.title}
                image={segmento.image}
                title={segmento.title}
                description={segmento.description}
              >
                {segmento.children}
              </ShowcaseImageCard>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
