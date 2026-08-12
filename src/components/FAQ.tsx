import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "Como funciona a ativação?",
    a: "Depois da confirmação do pagamento — PIX cai na hora — você recebe o acesso no e-mail e no WhatsApp. Em cerca de dois minutos já está assistindo na TV, no celular ou no computador.",
  },
  {
    q: "Em quais aparelhos posso assistir?",
    a: "Smart TVs (Samsung, LG, Android TV, TCL e similares), celulares e tablets iOS e Android, computadores e TV Box. Se a tela tem internet, o Imperial entra.",
  },
  {
    q: "Preciso de uma internet rápida?",
    a: "Para HD, uma conexão estável de 10 Mbps já é confortável. Para 4K, recomendamos 25 Mbps ou mais. A maioria das bandas largas residenciais no Brasil dá conta.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade nem multa. Você usa enquanto fizer sentido — e encerra com um toque, sem negociar com atendente.",
  },
  {
    q: "Os filmes, séries e canais são atualizados?",
    a: "Sempre. Novos títulos, rodadas de campeonato e estreias entram no catálogo continuamente. Você não precisa fazer nada: o império cresce sozinho.",
  },
  {
    q: "Quantas telas ao mesmo tempo?",
    a: "Mensal: 2 telas. Trimestral: 3 telas. Anual: 4 telas. Ideal para a casa toda sem guerra pelo controle.",
  },
  {
    q: "Como é o pagamento?",
    a: "PIX (liberação imediata) ou cartão de crédito. Os valores são os que você vê nesta página: R$ 11,90, R$ 29,90 e R$ 99,90. Sem taxa escondida.",
  },
  {
    q: "E se eu tiver algum problema?",
    a: "O suporte imperial funciona todos os dias, inclusive fins de semana e feriados de jogo. WhatsApp humano, sem robô te enrolando no primeiro tempo.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="duvidas" className="section-pad relative scroll-mt-24 bg-ink-2/40">
      <div className="page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            kicker="Dúvidas"
            title={
              <>
                Perguntas que a gente
                <span className="italic gold-text-static"> já esperava.</span>
              </>
            }
            subtitle="Transparência faz parte do serviço. Se ainda restar alguma dúvida, o suporte responde em minutos."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-gold/10 rounded-[1.6rem] border border-gold/12 bg-ink-3/60">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                item={item}
                isOpen={open === index}
                onToggle={() => setOpen((current) => (current === index ? -1 : index))}
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
          <span className="text-[15px] font-semibold text-ivory sm:text-base">{item.q}</span>
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-sm leading-relaxed text-mist">{item.a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
