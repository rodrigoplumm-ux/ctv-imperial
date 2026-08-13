import { Logo } from "./Logo";

const columns = [
  {
    title: "Produto",
    links: [
      { label: "Experiência", href: "#experiencia" },
      { label: "Catálogo", href: "#catalogo" },
      { label: "Planos", href: "#planos" },
      { label: "Dúvidas", href: "#duvidas" },
    ],
  },
  {
    title: "Assinatura",
    links: [
      { label: "Mensal · R$ 11,90", href: "#planos" },
      { label: "Trimestral · R$ 29,90", href: "#planos" },
      { label: "Anual · R$ 99,90", href: "#planos" },
      { label: "Ativar acesso", href: "#planos" },
    ],
  },
  {
    title: "Casa Imperial",
    links: [
      {
        label: "Suporte",
        href: "https://wa.me/5524992000601?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20CTV%20Imperial%20e%20preciso%20de%20ajuda.",
        external: true,
      },
      { label: "Privacidade", href: "#privacidade" },
      { label: "Termos", href: "#termos" },
      {
        label: "Contato",
        href: "mailto:ctvimperial1@gmail.com",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink pb-24 lg:pb-0">
      <div className="page grid gap-12 py-16 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo />

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            O império do entretenimento: canais, filmes, séries e esportes em
            uma experiência só. Feito para acompanhar você nos seus momentos
            de diversão.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com/ctv.imperial"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da CTV Imperial"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-mist transition-colors hover:text-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                {column.title}
              </p>

              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? {
                            target: "_blank",
                            rel: "noreferrer",
                          }
                        : {})}
                      className="text-sm text-mist transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="page flex flex-col gap-2 border-t border-white/5 py-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} CTV Imperial. Todos os direitos reservados.
        </p>
        <p>Entretenimento premium · Brasil</p>
      </div>

      <div
        id="privacidade"
        className="page scroll-mt-24 border-t border-white/5 py-8 text-xs leading-relaxed text-dim"
      >
        <h2 className="text-sm font-semibold text-mist">Privacidade</h2>

        <p className="mt-2 max-w-3xl">
          Os dados fornecidos pelo cliente são utilizados para atendimento,
          processamento da assinatura e suporte. Não comercializamos
          informações pessoais. Solicitações relacionadas aos seus dados podem
          ser feitas pelos nossos canais de atendimento.
        </p>
      </div>

      <div
        id="termos"
        className="page scroll-mt-24 border-t border-white/5 py-8 text-xs leading-relaxed text-dim"
      >
        <h2 className="text-sm font-semibold text-mist">Termos</h2>

        <p className="mt-2 max-w-3xl">
          A assinatura não possui fidelidade e pode deixar de ser renovada a
          qualquer momento. O conteúdo disponível pode variar conforme
          atualizações de catálogo e disponibilidade. O serviço depende de
          conexão estável com a internet e de dispositivo compatível.
        </p>
      </div>
    </footer>
  );
}
