import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "Como funciona a ativação?",
    a: "Depois da confirmação do pagamento, você recebe as orientações para começar a usar o serviço. O processo é simples e você conta com nosso suporte caso precise de ajuda.",
  },
  {
    q: "Em quais aparelhos posso assistir?",
    a: "O serviço é compatível com diversos dispositivos, como Smart TVs, celulares e tablets iOS e Android, computadores e TV Box. Se tiver dúvida sobre o seu aparelho, fale com nosso atendimento antes de assinar.",
  },
  {
    q: "Preciso de uma internet rápida?",
    a: "É importante ter uma conexão estável. Conteúdos em alta definição exigem uma boa conexão e, para aproveitar a qualidade 4K, uma velocidade maior é recomendada.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade nem multa. Você pode simplesmente deixar de renovar o serviço quando não quiser mais continuar.",
  },
  {
    q: "Os filmes, séries e canais são atualizados?",
    a: "Sim. O conteúdo recebe atualizações diariamente, com novidades em filmes, séries, entretenimento e programação.",
  },
  {
    q: "Qual é o horário de atendimento?",
    a: "Nosso suporte funciona todos os dias, das 7h às 22h. No plano anual, o atendimento possui prioridade dentro desse mesmo horário.",
  },
  {
    q: "Como é o pagamento?",
    a: "Você pode pagar via PIX ou cartão. Os valores são os apresentados nesta página: R$ 11,90 no mensal, R$ 29,90 no trimestral e R$ 99,90 no anual.",
  },
  {
    q: "E se eu tiver algum problema?",
    a: "É só chamar nosso atendimento. O suporte funciona todos os dias, das 7h às 22h, para ajudar com dúvidas de acesso, configuração e utilização do serviço.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="duvidas"
      className="section-pad relative scroll-mt-24 bg-ink-2/40"
    >
      <div className="page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            kicker="Dúvidas"
            title={
              <>
                Perguntas que a gente
                <span className="italic gold-text-static">
                  {" "}
                  já esperava.
                </span>
              </>
            }
            subtitle="Tudo o que você precisa saber antes de assinar. E se ainda restar alguma dúvida, nosso atendimento está à disposição."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-gold/10 rounded-[1.6rem] border border-gold/12 bg-ink-3/60">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                item={item}
                isOpen={open === index}
                onToggle={() =>
                  setOpen((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="px-5 sm:px-6">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-[15px] font-semibold text-ivory sm:text-base">
            {item.q}
          </span>

          <span
            className={cn(
              "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/20 text-gold transition-transform duration-300",
              isOpen && "rotate-45 bg-gold text-ink",
            )}
          >
            <Plus size={16} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-sm leading-relaxed text-mist">
              {item.a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
