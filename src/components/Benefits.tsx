import { Check, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const rows = [
  { label: "Preço mensal", cable: "R$ 150 ou mais", us: "A partir de R$ 11,90" },
  { label: "Fidelidade", cable: "12 meses de contrato", us: "Cancele quando quiser" },
  { label: "Ativação", cable: "Instalação e agendamento", us: "Rápida e sem visita técnica" },
  { label: "Conteúdo", cable: "Grade fechada", us: "Canais + filmes + séries + esportes" },
  { label: "Onde assistir", cable: "Foco na TV da sala", us: "TV, celular, tablet e computador" },
  { label: "Experiência", cable: "Modelo tradicional", us: "Sem anúncios inseridos pelo Imperial" },
];

const perks = [
  {
    title: "Liberdade de verdade",
    text: "Sem fidelidade, sem taxa de cancelamento, sem surpresa na fatura. O império é seu pelo tempo que fizer sentido.",
  },
  {
    title: "Economia que se vê",
    text: "No plano anual você assiste o ano inteiro por menos do que um mês de muitas opções de TV por assinatura tradicional.",
  },
  {
    title: "Qualidade de cinema",
    text: "Conteúdos disponíveis em até 4K HDR, para aproveitar uma experiência de imagem de alto nível na sua tela.",
  },
];

export function Benefits() {
  return (
    <section className="section-pad relative">
      <div className="page grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <SectionHeading
              align="left"
              kicker="Por que mudar"
              title={
                <>
                  Menos fatura.
                  <span className="italic gold-text-static"> Mais espetáculo.</span>
                </>
              }
              subtitle="A TV tradicional pode custar caro por uma grade que você nem sempre aproveita. O Imperial reúne o entretenimento que importa por muito menos."
            />
          </Reveal>

          <div className="mt-10 space-y-6">
            {perks.map((perk, index) => (
              <Reveal key={perk.title} delay={index * 0.08} y={18}>
                <div className="border-l border-gold/30 pl-5">
                  <h3 className="font-display text-2xl text-ivory">{perk.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{perk.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[1.8rem] border border-gold/15 bg-ink-3/80 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-[1.1fr_1fr_1.15fr] border-b border-gold/12 bg-ink-4/80 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] sm:px-6">
              <span className="text-dim">Comparativo</span>
              <span className="text-dim">TV tradicional</span>
              <span className="text-gold">CTV Imperial</span>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_1fr_1.15fr] items-center border-b border-white/5 px-4 py-4 last:border-0 sm:px-6"
              >
                <p className="text-xs text-mist sm:text-sm">{row.label}</p>

                <p className="flex items-start gap-2 text-xs text-dim sm:text-sm">
                  <Minus className="mt-0.5 hidden h-3.5 w-3.5 shrink-0 text-dim/70 sm:block" />
                  {row.cable}
                </p>

                <p className="flex items-start gap-2 text-xs font-medium text-ivory sm:text-sm">
                  <Check className="mt-0.5 hidden h-3.5 w-3.5 shrink-0 text-gold sm:block" />
                  {row.us}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
