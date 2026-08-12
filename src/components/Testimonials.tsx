import { Star } from "lucide-react";
import { Item, Reveal, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stories = [
  {
    name: "Mariana Costa",
    city: "São Paulo, SP",
    role: "Plano Anual",
    photo: "/images/portrait-mariana.jpg",
    quote:
      "Cancelei a TV por assinatura depois de uma semana. Os jogos do fim de semana e as séries da noite cabem num valor que eu gastava em pipoca.",
  },
  {
    name: "Rafael Mendes",
    city: "Rio de Janeiro, RJ",
    role: "Plano Trimestral",
    photo: "/images/portrait-rafael.jpg",
    quote:
      "Ativou no celular enquanto eu ainda estava no trabalho. Cheguei em casa e o jogo já estava na TV da sala, em 4K. Sem técnico, sem espera.",
  },
  {
    name: "Ana Beatriz Lima",
    city: "Belo Horizonte, MG",
    role: "Plano Anual",
    photo: "/images/portrait-ana.jpg",
    quote:
      "A família inteira usa: as crianças no tablet, meu marido no futebol e eu nas séries. Quatro telas e ninguém brigando pelo controle.",
  },
  {
    name: "Lucas Ferreira",
    city: "Curitiba, PR",
    role: "Plano Mensal",
    photo: "/images/portrait-lucas.jpg",
    quote:
      "Eu desconfiava de qualquer coisa barata. O visual, o suporte e a estabilidade me convenceram. Hoje é o primeiro app que abro no sofá.",
  },
];

export function Testimonials() {
  return (
    <section id="historias" className="section-pad relative bg-ink-2/40">
      <div className="page">
        <Reveal>
          <SectionHeading
            kicker="Histórias reais"
            title={
              <>
                Quem entra,
                <span className="italic gold-text-static"> não volta para a grade.</span>
              </>
            }
            subtitle="Assinantes de todo o Brasil trocaram a fatura cara por uma experiência que cabe no bolso — e sobra em conteúdo."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" delay={0.08}>
          {stories.map((story) => (
            <Item key={story.name}>
              <figure className="group h-full rounded-[1.6rem] border border-gold/12 bg-ink-3/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 sm:p-8">
                <div className="mb-5 flex gap-1 text-gold" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug text-ivory sm:text-[1.35rem]">
                  “{story.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <img
                    src={story.photo}
                    alt={`Retrato de ${story.name}`}
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ivory">{story.name}</p>
                    <p className="text-xs text-dim">
                      {story.city} · {story.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
