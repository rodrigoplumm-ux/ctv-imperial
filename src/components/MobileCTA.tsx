import { useCheckout } from "../lib/checkout";

export function MobileCTA() {
  const { openCheckout } = useCheckout();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/15 bg-ink/85 p-3 backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] uppercase tracking-[0.18em] text-gold">CTV Imperial</p>
          <p className="truncate text-sm font-semibold text-ivory">A partir de R$ 11,90/mês</p>
        </div>
        <button
          type="button"
          onClick={() => openCheckout("anual")}
          className="rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-5 py-3 text-sm font-semibold text-ink"
        >
          Assinar
        </button>
      </div>
    </div>
  );
}
