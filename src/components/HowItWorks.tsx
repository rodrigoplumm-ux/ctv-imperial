import { CreditCard, Sparkles, Tv } from "lucide-react";
import { Item, Reveal, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    icon: CreditCard,
    title: "Escolha o plano",
    text: "Escolha entre mensal, trimestral ou anual e encontre o plano que combina melhor com você.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Receba seu acesso",
    text: "Depois da confirmação do pagamento, você recebe as orientações de acesso durante o horário de atendimento, todos os dias, das 7h às 22h.",
  },
  {
    n: "03",
    icon: Tv,
    title: "Assista nos seus dispositivos",
    text: "Aproveite na Smart TV, celular, tablet ou computador compatível e leve seu entretenimento com você.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative pb-8">
      <div className="page">
        <Reveal>
          <SectionHeading
            kicker="Como entrar"
            title={
              <>
                Três passos.
                <span className="italic gold-text-static"> Nenhum contrato.</span>
              </>
            }
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" delay={0.08}>
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Item key={step.n}>
                <article className="relative h-full overflow-hidden rounded-[1.6rem] border border-gold/12 bg-gradient-to-b from-ink-4/80 to-ink-3/40 p-6">
                  <span className="font-display text-6xl text-gold/15">
                    {step.n}
                  </span>

                  <div className="mt-2 grid h-10 w-10 place-items-center rounded-xl bg-gold/10 text-gold">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-4 font-display text-2xl text-ivory">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {step.text}
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
