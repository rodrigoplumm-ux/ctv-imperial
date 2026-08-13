import {
  Clapperboard,
  MonitorPlay,
  Smartphone,
  Trophy,
  Headphones,
  Ban,
} from "lucide-react";
import { Item, Reveal, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: MonitorPlay,
    title: "Canais ao vivo",
    text: "Notícias, variedades, esportes e programação para acompanhar o que está acontecendo agora.",
  },
  {
    icon: Clapperboard,
    title: "Cinema sem fila",
    text: "Lançamentos, clássicos e blockbusters em alta qualidade — sem sair do sofá.",
  },
  {
    icon: Trophy,
    title: "Esportes no calor do jogo",
    text: "Futebol, F1, UFC, basquete e grandes momentos esportivos para acompanhar ao vivo.",
  },
  {
    icon: Smartphone,
    title: "Nos seus dispositivos",
    text: "Smart TV, celular, tablet ou computador. Leve seu entretenimento com você.",
  },
  {
    icon: Ban,
    title: "Sem anúncios extras, sem fidelidade",
    text: "O CTV Imperial não adiciona comerciais à sua experiência. E você continua pelo tempo que quiser.",
  },
  {
    icon: Headphones,
    title: "Suporte imperial",
    text: "Atendimento de verdade todos os dias, das 7h às 22h.",
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
                Muito mais do que assistir.
                <span className="italic gold-text-static">
                  {" "}
                  Uma experiência completa.
                </span>
              </>
            }
            subtitle="CTV Imperial reúne canais, filmes, séries e esportes em uma experiência simples, completa e feita para você."
          />
        </Reveal>

        <Stagger
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.1}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Item key={feature.title}>
                <article className="group h-full rounded-3xl border border-gold/12 bg-ink-3/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-ink-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3 className="font-display text-2xl text-ivory">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {feature.text}
                  </p>
                </article>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
