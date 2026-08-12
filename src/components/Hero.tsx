import { motion } from "framer-motion";
import { Play, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useCheckout } from "../lib/checkout";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const { openCheckout } = useCheckout();

  return (
    <section id="topo" className="relative isolate min-h-[100svh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <img
          src="/images/hero-cinema.jpg"
          alt=""
          className="h-full w-full object-cover object-center animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-gold/20 blur-[130px] animate-float" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-gold/10 blur-[120px] animate-float-slow" />

      <div className="page relative z-10 grid items-center gap-12 pb-24 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-10">
        <div>
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-ink/40 px-3 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-2">
              Ativação imediata · 4K HDR
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="max-w-xl font-display text-[3.1rem] font-medium leading-[0.95] text-ivory sm:text-6xl lg:text-[4.6rem]"
          >
            Todo o entretenimento.
            <span className="mt-2 block italic gold-text animate-shimmer">Um só império.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg"
          >
            Canais ao vivo, lançamentos de cinema, séries completas e os maiores eventos esportivos —
            numa experiência cinematográfica. Sem contrato. Sem anúncios. A partir de{" "}
            <strong className="font-semibold text-ivory">R$ 11,90</strong>.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => openCheckout("anual")}
              className="animate-pulse-gold inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              Começar por R$ 11,90
            </button>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-ivory backdrop-blur-md transition-colors hover:border-gold/40 hover:bg-white/8"
            >
              <Play className="h-4 w-4 fill-current" />
              Comparar planos
            </a>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-mist"
          >
            <li className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-gold" />
              Ativação em 2 minutos
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Sem fidelidade
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="grid h-4 w-4 place-items-center rounded-full border border-gold/50 text-[9px] font-bold text-gold">
                PIX
              </span>
              Pague com PIX
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-gold/20 bg-ink-3 p-1.5 shadow-[0_40px_80px_rgba(0,0,0,0.55)] sm:rounded-[2rem] sm:p-2">
            <img
              src="/images/streaming-ui.jpg"
              alt="Interface do CTV Imperial com vitrine de filmes e séries em uma TV"
              className="aspect-[16/10] w-full rounded-[1.2rem] object-cover sm:rounded-[1.5rem]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/10 sm:rounded-[2rem]" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="glass absolute -left-2 bottom-10 hidden max-w-[200px] rounded-2xl p-4 sm:block lg:-left-10"
          >
            <p className="font-display text-3xl text-gold-2">4K</p>
            <p className="mt-1 text-xs leading-relaxed text-mist">Imagem de cinema na sua sala, no celular e no tablet.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="glass absolute -right-1 top-8 hidden rounded-2xl p-4 sm:block lg:-right-6"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Ao vivo agora</p>
            <p className="mt-1 text-sm font-medium text-ivory">Futebol · Cinema · Séries</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-dim md:flex">
        <span>Explorar</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
