import { Reveal } from "./Reveal";

const stats = [
  { value: "3.000+", label: "clientes atendidos" },
  { value: "4K HDR", label: "qualidade disponível" },
  { value: "Diárias", label: "atualizações de conteúdo" },
  { value: "7h–22h", label: "suporte todos os dias" },
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
    <section aria-label="Destaques" className="relative border-y border-gold/10 bg-ink-2/80">
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
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-10 text-[12px] uppercase tracking-[0.28em] text-mist/80"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
