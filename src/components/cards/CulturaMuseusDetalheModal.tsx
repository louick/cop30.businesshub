"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const amazonPalette = {
  light: "#b0c735",
  medium: "#4f7227",
  dark1: "#114b0c",
  dark2: "#0c3a1b",
};

export function CulturaMuseusDetalheModal({ trigger }: { trigger: React.ReactNode }) {
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
          Cultura & Museus: Experiência e Encantamento para Visitantes
        </DialogTitle>
        <DialogDescription asChild>
          <ul className="list-disc pl-5 space-y-3 text-left text-base" style={{ color: "#eaf8c6" }}>
            <li>
              <b>Ingressos online e agendamento fácil:</b> venda de ingressos pelo site ou QR code, com confirmação automática para evitar filas e lotação.
            </li>
            <li>
              <b>Tour virtual multilíngue:</b> experiências imersivas, acessíveis por celular, em vários idiomas — conquiste o público internacional com tecnologia.
            </li>
            <li>
              <b>Agenda cultural dinâmica:</b> divulgue exposições, eventos e experiências em tempo real, com tradução automática do calendário.
            </li>
            <li>
              <b>Conteúdo enriquecido:</b> vídeos, descrições e fotos contam a história das peças e do acervo, valorizando a cultura amazônica e ampliando o interesse.
            </li>
            <li>
              <b>Interatividade com o visitante:</b> questionários, quizzes, gamificação e feedback em tempo real aumentam o engajamento e a satisfação.
            </li>
            <li>
              <b>Notificações e promoções:</b> informe sobre eventos especiais ou descontos para turistas que estão próximos, aumentando o fluxo em horários estratégicos.
            </li>
            <li>
              <b>Relatórios detalhados:</b> saiba quais exposições mais atraem visitantes estrangeiros, horários de pico, idiomas mais usados e preferências do público.
            </li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
