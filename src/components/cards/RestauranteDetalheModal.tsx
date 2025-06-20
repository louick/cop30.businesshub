"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const amazonPalette = {
  light: "#b0c735",
  medium: "#4f7227",
  dark1: "#114b0c",
  dark2: "#0c3a1b",
};

export function RestauranteDetalheModal({ trigger }: { trigger: React.ReactNode }) {
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
          Restaurantes: Vitrine Global na COP30
        </DialogTitle>
        <DialogDescription asChild>
          <ul className="list-disc pl-5 space-y-3 text-left text-base" style={{ color: "#eaf8c6" }}>
            <li>
              <b>Pedidos inteligentes por QR code:</b> o cliente escolhe, pede e paga direto pelo celular, sem fila, sem erros — mais agilidade, mais vendas.
            </li>
            <li>
              <b>Storytelling no prato:</b> cada item do menu pode contar uma história, mostrar o chef, o produtor local ou o processo artesanal. Conquiste pelo conteúdo e pelas imagens.
            </li>
            <li>
              <b>Reservas automáticas integradas ao mapa oficial COP30:</b> receba turistas na hora certa, com visibilidade em tempo real para quem procura experiências autênticas na Amazônia.
            </li>
            <li>
              <b>Recomendações e sugestões personalizadas:</b> sugestões de harmonizações, menus temáticos, filtros por perfil do cliente e indicação de pratos favoritos.
            </li>
            <li>
              <b>Notificações automáticas:</b> convide o turista que está por perto para promoções, eventos temáticos ou menus exclusivos — traga movimento nos horários de baixa.
            </li>
            <li>
              <b>Relatórios avançados e insights de mercado:</b> monitoramento em tempo real de pedidos, idiomas mais usados, horários de pico e tendências. Decisão baseada em dados.
            </li>
            <li>
              <b>Depoimentos em vídeo e avaliações multilíngues:</b> depoimentos de clientes do mundo todo, comentários traduzidos automaticamente — conquiste confiança instantânea.
            </li>
            <li>
              <b>Marketing automatizado para eventos especiais:</b> cupons, menus festivos ou experiências amazônicas exclusivas, direto para quem mais importa.
            </li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
