"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const amazonPalette = {
  light: "#b0c735",
  medium: "#4f7227",
  dark1: "#114b0c",
  dark2: "#0c3a1b",
};

export function HotelDetalheModal({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="max-w-xl border border-[1.5px] rounded-2xl shadow-2xl p-7"
        style={{
          background: amazonPalette.dark2,
          borderColor: amazonPalette.light,
          color: amazonPalette.light,
        }}
      >
        <DialogTitle className="text-2xl font-extrabold mb-4" style={{ color: amazonPalette.light }}>
          Hotéis & Pousadas: Hospitalidade sem Fronteiras na COP30
        </DialogTitle>
        <DialogDescription asChild>
          <ul className="list-disc pl-5 space-y-3 text-left text-base" style={{ color: "#eaf8c6" }}>
            <li>
              <b>Check-in digital multilíngue:</b> hospede qualquer nacionalidade sem barreira de idioma, com tradução automática e atendimento personalizado desde o primeiro contato.
            </li>
            <li>
              <b>Reservas instantâneas e confirmação automática:</b> integração total com as principais plataformas e o mapa oficial da COP30 — mais visibilidade, mais ocupação, mais receita.
            </li>
            <li>
              <b>Página exclusiva para seu hotel:</b> destaque diferenciais, mostre experiências, galeria de fotos, depoimentos em vídeo e tours virtuais em vários idiomas.
            </li>
            <li>
              <b>Pagamentos internacionais facilitados:</b> aceite reservas do mundo todo, com suporte para múltiplas moedas, métodos de pagamento globais e faturamento seguro.
            </li>
            <li>
              <b>Notificações automáticas e agenda inteligente:</b> lembretes de reservas, ofertas especiais, late check-out e comunicação fluida com o hóspede (WhatsApp, SMS, e-mail).
            </li>
            <li>
              <b>Gestão centralizada de reservas:</b> controle reservas de todos os canais (site, OTA, balcão) em uma única plataforma, evitando overbooking e otimizando a ocupação.
            </li>
            <li>
              <b>Relatórios de desempenho e insights de mercado:</b> análise de taxas de ocupação, nacionalidades dos hóspedes, datas de maior demanda e sugestões para maximizar receita.
            </li>
            <li>
              <b>Avaliações e reputação global:</b> traduza avaliações automaticamente, responda rápido e conquiste confiança de novos hóspedes com depoimentos reais e experiências positivas.
            </li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
