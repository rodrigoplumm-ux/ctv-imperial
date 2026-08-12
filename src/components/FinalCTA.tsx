import { ArrowRight } from "lucide-react";
import { useCheckout } from "../lib/checkout";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const { openCheckout } = useCheckout();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src="/images/hero-cinema.jpg"
        alt=""
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]" />

      <div className="page relative z-10 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-gold">O próximo episódio começa agora</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl">
            Entre no império.
            <span className="italic gold-text-static"> Leve o entretenimento inteiro com você.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist sm:text-lg">
            Canais, filmes, séries e esportes em 4K. Sem fidelidade. Sem espera. A partir de R$ 11,90.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openCheckout("anual")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Assinar o plano anual
              <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20assinar%20o%20CTV%20Imperial."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-ivory backdrop-blur-md hover:border-gold/40"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
