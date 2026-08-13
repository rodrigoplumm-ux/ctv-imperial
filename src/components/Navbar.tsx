import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCheckout } from "../lib/checkout";
import { cn } from "../utils/cn";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#planos", label: "Planos" },
  { href: "#historias", label: "Histórias" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Navbar() {
  const { openCheckout } = useCheckout();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 sm:px-8 lg:px-5 lg:py-3",
          scrolled
            ? "mt-1 px-3 py-1 lg:mt-2"
            : "mt-0 px-5 py-3",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full transition-all duration-500",
            scrolled
              ? "glass-strong px-3 py-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] lg:px-3 lg:py-2.5"
              : "bg-transparent px-3 py-2.5",
          )}
        >
          <div
            className={cn(
              "origin-left transition-all duration-500",
              scrolled
                ? "scale-[0.82] -mr-8 sm:scale-90 sm:-mr-4 lg:mr-0 lg:scale-100"
                : "scale-100",
            )}
          >
            <Logo />
          </div>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-mist transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="pr-2 text-[12px] text-dim">
              A partir de R$ 11,90
            </span>

            <button
              type="button"
              onClick={() => openCheckout("anual")}
              className="rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_8px_24px_rgba(212,175,55,0.22)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Assinar agora
            </button>
          </div>

          <button
            type="button"
            className={cn(
              "grid place-items-center rounded-full hairline text-ivory transition-all duration-500 lg:hidden",
              scrolled ? "h-9 w-9" : "h-11 w-11",
            )}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={scrolled ? 16 : 18} />
            ) : (
              <Menu size={scrolled ? 16 : 18} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pt-24">
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="border-b border-white/5 py-4 font-display text-3xl text-ivory"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCheckout("anual");
                }}
                className="mt-8 rounded-full bg-gradient-to-r from-gold-2 via-gold to-gold-3 px-6 py-4 text-sm font-semibold text-ink"
              >
                Assinar agora — a partir de R$ 11,90
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
