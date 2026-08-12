import { Reveal } from "./Reveal";

const stats = [
  { value: "140 mil+", label: "lares no império" },
  { value: "4,9/5", label: "satisfação média" },
  { value: "2 min", label: "para começar" },
  { value: "99,9%", label: "de disponibilidade" },
];

const ribbon = [
  "Futebol",
  "Cinema 4K",
  "Séries",
  "Fórmula 1",
  "Novelas",
  "Documentários",
  "Infantil",
  "UFC",
  "Basquete",
  "Reality",
  "Notícias",
  "Shows",
];

export function SocialProof() {
  return (
    <section aria-label="Prova social" className="relative border-y border-gold/10 bg-ink-2/80">
      <div className="page grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08} y={18}>
            <p className="font-display text-3xl text-ivory sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-dim">{stat.label}</p>
          </Reveal>
        ))}
      </div>

      <div className="overflow-hidden border-t border-gold/10 py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...ribbon, ...ribbon].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10 text-[12px] uppercase tracking-[0.28em] text-mist/80">
              {item}
              <span className="h-1 w-1 rounded-full bg-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
