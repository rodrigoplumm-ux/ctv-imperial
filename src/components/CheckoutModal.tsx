import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { formatBRL, getPlan, plans, type PlanId } from "../lib/plans";
import { useCheckout } from "../lib/checkout";
import { cn } from "../utils/cn";

export function CheckoutModal() {
  const { isOpen, closeCheckout, planId, setPlanId } = useCheckout();
  const [status, setStatus] = useState<"form" | "success">("form");
  const [payment, setPayment] = useState<"pix" | "card">("pix");
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const plan = getPlan(planId);

  useEffect(() => {
    if (!isOpen) {
      const timer = window.setTimeout(() => setStatus("form"), 250);
      return () => window.clearTimeout(timer);
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCheckout();
    };

    window.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector<HTMLElement>("input, button")?.focus();

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCheckout]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-end p-0 sm:place-items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar assinatura"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeCheckout}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-h-[92svh] w-full overflow-y-auto rounded-t-[1.6rem] border border-gold/20 bg-ink-2 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.55)] sm:max-w-lg sm:rounded-[1.6rem] sm:p-8"
          >
            <button
              type="button"
              onClick={closeCheckout}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist hover:text-ivory"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>

            {status === "form" ? (
              <>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  Assinar CTV Imperial
                </p>

                <h2
                  id={titleId}
                  className="mt-2 font-display text-3xl text-ivory"
                >
                  Quase no seu sofá.
                </h2>

                <p className="mt-2 text-sm text-mist">
                  Escolha o plano e preencha seus dados para iniciar sua assinatura.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {plans.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlanId(item.id as PlanId)}
                      className={cn(
                        "rounded-2xl border px-2 py-3 text-center transition-colors",
                        planId === item.id
                          ? "border-gold bg-gold/10"
                          : "border-white/10 hover:border-gold/30",
                      )}
                    >
                      <span className="block text-[11px] text-mist">
                        {item.name}
                      </span>

                      <span className="mt-1 block text-sm font-semibold text-ivory">
                        {formatBRL(item.price)}
                      </span>
                    </button>
                  ))}
                </div>

                <form className="mt-6 space-y-3" onSubmit={onSubmit}>
                  <Field
                    label="Nome completo"
                    name="name"
                    autoComplete="name"
                    required
                  />

                  <Field
                    label="E-mail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />

                  <Field
                    label="WhatsApp"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(11) 99999-0000"
                    required
                  />

                  <fieldset className="pt-2">
                    <legend className="mb-2 text-xs font-medium text-mist">
                      Pagamento
                    </legend>

                    <div className="grid grid-cols-2 gap-2">
                      <PaymentOption
                        active={payment === "pix"}
                        onClick={() => setPayment("pix")}
                        title="PIX"
                        hint="Confirmação rápida"
                      />

                      <PaymentOption
                        active={payment === "card"}
                        onClick={() => setPayment("card")}
                        title="Cartão"
                        hint="Cartão de crédito"
                      />
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="mt-3 w-full rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 py-3.5 text-sm font-semibold text-ink"
                  >
                    Confirmar {plan.name.toLowerCase()} · {formatBRL(plan.price)}
                  </button>

                  <p className="text-center text-[11px] text-dim">
                    Sem fidelidade. Você pode cancelar quando quiser.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check />
                </div>

                <h2
                  id={titleId}
                  className="mt-5 font-display text-3xl text-ivory"
                >
                  Pedido recebido.
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  Recebemos sua solicitação do plano{" "}
                  <strong className="text-ivory">{plan.name}</strong>. A
                  ativação e as orientações de acesso são realizadas durante o
                  horário de atendimento, todos os dias, das 7h às 22h.
                </p>

                <button
                  type="button"
                  onClick={closeCheckout}
                  className="mt-8 rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-6 py-3 text-sm font-semibold text-ink"
                >
                  Voltar à página
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-mist"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink px-3.5 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-dim focus:border-gold/50"
      />
    </div>
  );
}

function PaymentOption({
  active,
  onClick,
  title,
  hint,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border px-3 py-3 text-left",
        active
          ? "border-gold bg-gold/10"
          : "border-white/10 hover:border-gold/30",
      )}
    >
      <span className="block text-sm font-semibold text-ivory">{title}</span>
      <span className="block text-[11px] text-dim">{hint}</span>
    </button>
  );
}
