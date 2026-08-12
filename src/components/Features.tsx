import { Clapperboard, MonitorPlay, Smartphone, Trophy, Headphones, Ban } from "lucide-react";
import { Item, Reveal, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: MonitorPlay,
    title: "Canais ao vivo",
    text: "A grade completa na palma da mão: notícias, variedades, esportes e o que está acontecendo agora.",
  },
  {
    icon: Clapperboard,
    title: "Cinema sem fila",
    text: "Lançamentos, clássicos e blockbusters em qualidade de sala — sem sair do sofá.",
  },
  {
    icon: Trophy,
    title: "Esportes no calor do jogo",
    text: "Futebol, F1, UFC, basquete e os eventos que o Brasil inteiro para para assistir.",
  },
  {
    icon: Smartphone,
    title: "Em qualquer tela",
    text: "Smart TV, celular, tablet ou computador. Seu império viaja com você.",
  },
  {
    icon: Ban,
    title: "Sem anúncios, sem contrato",
    text: "Assista sem interrupções. Cancele quando quiser — sem letras miúdas.",
  },
  {
    icon: Headphones,
    title: "Suporte imperial",
    text: "Gente de verdade, todos os dias. Do primeiro acesso ao último episódio.",
  },
];

export function Features() {
  return (
    <section id="experiencia" className="section-pad relative">
      <div className="page">
        <Reveal>
          <SectionHeading
            kicker="A experiência"
            title={
              <>
                Feito para quem exige
                <span className="italic gold-text-static"> mais do que uma grade.</span>
              </>
            }
            subtitle="CTV Imperial reúne o que você já ama — e entrega com o acabamento de um serviço premium."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Item key={feature.title}>
                <article className="group h-full rounded-3xl border border-gold/12 bg-ink-3/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-ink-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-display text-2xl text-ivory">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{feature.text}</p>
                </article>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
