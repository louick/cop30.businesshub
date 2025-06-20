"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const amazonPalette = {
  light: "#b0c735",
  medium: "#4f7227",
  dark1: "#114b0c",
  dark2: "#0c3a1b",
};

export function TransportePasseioDetalheModal({ trigger }: { trigger: React.ReactNode }) {
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
          Transporte & Passeios: Turismo Inteligente e Pronto para a COP30
        </DialogTitle>
        <DialogDescription asChild>
          <ul className="list-disc pl-5 space-y-3 text-left text-base" style={{ color: "#eaf8c6" }}>
            <li>
              <b>Reserva online facilitada:</b> permita que turistas de todo o mundo agendem traslados, city tours ou passeios com poucos cliques, em vários idiomas e com confirmação instantânea.
            </li>
            <li>
              <b>Mapas interativos e rotas exclusivas:</b> destaque-se com roteiros personalizados, trilhas recomendadas, horários de saída e pontos de interesse integrados ao app do evento.
            </li>
            <li>
              <b>Tour guiado por áudio multilíngue:</b> ofereça narrativas sobre a história, cultura e natureza de Belém e região, disponíveis direto no celular do visitante.
            </li>
            <li>
              <b>Pagamentos internacionais:</b> aceite reservas em múltiplas moedas e métodos, com faturamento seguro e confirmação automática para estrangeiros.
            </li>
            <li>
              <b>Notificações inteligentes:</b> avise clientes sobre horários de embarque, promoções, alterações de trajeto ou oportunidades de última hora — tudo automatizado.
            </li>
            <li>
              <b>Relatórios detalhados:</b> saiba quais passeios são mais procurados, horários de maior demanda, perfil do público e idiomas mais usados. Decida com dados.
            </li>
            <li>
              <b>Experiências integradas:</b> ofereça combos com outros serviços (restaurantes, hotéis, atrações), elevando o valor médio por cliente e a satisfação geral.
            </li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
