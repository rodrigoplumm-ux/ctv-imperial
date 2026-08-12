import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../utils/cn";

const tabs = [
  {
    id: "cinema",
    label: "Cinema",
    title: "A sessão começa quando você quiser.",
    text: "De lançamentos a clássicos restaurados. Uma vitrine pensada como um cinema particular — com imagem nítida, som envolvente e zero comercial no meio do filme.",
    image: "/images/movie-night.jpg",
    alt: "Ambiente de home cinema com pipoca e televisão ao fundo",
    meta: ["4K HDR", "Lançamentos", "Sem anúncios"],
  },
  {
    id: "esportes",
    label: "Esportes",
    title: "O estádio cabe na sua sala.",
    text: "Acompanhe o jogo com a intensidade de quem está na arquibancada. Transmissões ao vivo, replays e os campeonatos que importam — do brasileiro às copas do mundo.",
    image: "/images/sports-night.jpg",
    alt: "Televisão grande exibindo uma partida de futebol em estádio lotado",
    meta: ["Ao vivo", "Futebol", "F1 · UFC · NBA"],
  },
  {
    id: "series",
    label: "Séries",
    title: "Maratonas com acabamento de série original.",
    text: "Temporadas completas, dramas premiados e o próximo vício da casa. Continue de onde parou em qualquer tela, sem perder o fio — nem a qualidade.",
    image: "/images/series-binge.jpg",
    alt: "Pessoa assistindo a uma série em uma sala sofisticada à noite",
    meta: ["Temporadas completas", "Multi-tela", "Continue assistindo"],
  },
  {
    id: "telas",
    label: "Dispositivos",
    title: "Um império em cada tela da casa.",
    text: "Smart TV, celular, tablet ou notebook. A mesma experiência cinematográfica, sincronizada e estável — para a família inteira, cada um no seu ritmo.",
    image: "/images/devices.jpg",
    alt: "Notebook, tablet e celular exibindo o aplicativo CTV Imperial",
    meta: ["Smart TV", "iOS e Android", "Computador"],
  },
] as const;

export function Showcase() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("cinema");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="catalogo" className="section-pad relative bg-ink-2/50">
      <div className="page">
        <Reveal>
          <SectionHeading
            kicker="O catálogo"
            title={
              <>
                Quatro mundos.
                <span className="italic gold-text-static"> Uma assinatura.</span>
              </>
            }
            subtitle="Escolha o que quer sentir hoje: a luz da sala de cinema, o grito do estádio ou o silêncio de mais um episódio."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Categorias do catálogo">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  active === tab.id
                    ? "bg-gradient-to-r from-gold-2 via-gold to-gold-3 text-ink"
                    : "border border-white/10 bg-white/5 text-mist hover:border-gold/30 hover:text-ivory",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-gold/15 bg-ink-3 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.alt}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[16/11] w-full object-cover"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{current.label}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ivory sm:text-4xl">{current.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-mist">{current.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {current.meta.map((item) => (
                  <li key={item} className="rounded-full border border-gold/20 bg-gold/8 px-3 py-1 text-xs text-gold-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
