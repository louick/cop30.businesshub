"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const amazonPalette = {
  light: "#b0c735",
  medium: "#4f7227",
  dark1: "#114b0c",
  dark2: "#0c3a1b",
};

export function CafeDetalheModal({ trigger }: { trigger: React.ReactNode }) {
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
          Cafés & Food-Trucks: Conexão e Experiência para Todos
        </DialogTitle>
        <DialogDescription asChild>
          <ul className="list-disc pl-5 space-y-3 text-left text-base" style={{ color: "#eaf8c6" }}>
            <li>
              <b>Menu digital multilíngue:</b> traduza automaticamente e permita que turistas escolham com confiança, sem barreira de idioma.
            </li>
            <li>
              <b>Pedidos facilitados pelo celular:</b> evite filas, aumente a rotatividade e a satisfação dos clientes com QR code ou link direto na mesa.
            </li>
            <li>
              <b>Fotos e histórias do cardápio:</b> encante pelo visual e conte a origem ou curiosidades de cada prato ou bebida, valorizando ingredientes e cultura local.
            </li>
            <li>
              <b>Recomendações inteligentes:</b> sugestões automáticas para turistas de acordo com preferências e horário, aumentando o ticket médio.
            </li>
            <li>
              <b>Notificações em tempo real:</b> avise sobre promoções ou novidades para quem está próximo, usando geolocalização e push no navegador.
            </li>
            <li>
              <b>Relatórios detalhados:</b> saiba quais produtos são mais populares entre visitantes estrangeiros, e quais idiomas trazem mais retorno.
            </li>
            <li>
              <b>Marketing para eventos:</b> divulgue menus especiais para eventos COP30, promova combos, happy hour e experiências regionais para atrair turistas.
            </li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
