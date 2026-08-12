import { Check, Crown } from "lucide-react";
import { formatBRL, plans, type PlanId } from "../lib/plans";
import { useCheckout } from "../lib/checkout";
import { Item, Reveal, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../utils/cn";

export function Pricing() {
  const { openCheckout } = useCheckout();

  return (
    <section id="planos" className="section-pad relative scroll-mt-24">
      <div className="page">
        <Reveal>
          <SectionHeading
            kicker="Planos"
            title={
              <>
                Três portas.
                <span className="italic gold-text-static"> O mesmo império.</span>
              </>
            }
            subtitle="Comece no mensal ou garanta o melhor valor no anual. Em qualquer escolha, o catálogo completo é seu no mesmo instante."
          />
        </Reveal>

        <Stagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3" delay={0.08}>
          {plans.map((plan) => (
            <Item key={plan.id}>
              <PlanCard planId={plan.id} onSelect={() => openCheckout(plan.id)} />
            </Item>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-sm text-dim">
          Pagamento via PIX ou cartão. Ativação imediata. Cancele quando quiser — sem multa.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ planId, onSelect }: { planId: PlanId; onSelect: () => void }) {
  const plan = plans.find((item) => item.id === planId)!;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[1.8rem] border p-6 transition-transform duration-500 hover:-translate-y-1.5 sm:p-7",
        plan.highlight
          ? "border-gold/50 bg-gradient-to-b from-[#2a2312] to-ink-3 shadow-[0_20px_80px_rgba(212,175,55,0.12)] lg:-translate-y-3 lg:hover:-translate-y-4"
          : "border-gold/12 bg-ink-3/70 hover:border-gold/30",
      )}
    >
      {plan.badge ? (
        <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-3 py-1 text-[11px] font-semibold text-ink">
          <Crown size={12} />
          {plan.badge}
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-3xl text-ivory">{plan.name}</h3>
          <p className="mt-1 text-sm text-mist">{plan.equivalent}</p>
        </div>
        {plan.save ? (
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold text-gold-2">
            −{plan.save}
          </span>
        ) : null}
      </div>

      <p className="mt-6 flex items-end gap-1">
        <span className="font-display text-5xl leading-none text-ivory">{formatBRL(plan.price)}</span>
        <span className="mb-1 text-sm text-dim">{plan.cadence}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-mist">{plan.description}</p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ivory/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition-all duration-300",
          plan.highlight
            ? "animate-pulse-gold bg-gradient-to-r from-gold-2 via-gold to-gold-3 text-ink hover:scale-[1.02]"
            : "border border-gold/25 bg-white/5 text-ivory hover:border-gold/50 hover:bg-gold/10",
        )}
      >
        Assinar {plan.name.toLowerCase()}
      </button>
    </article>
  );
}
