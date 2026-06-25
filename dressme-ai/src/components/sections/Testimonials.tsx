import { Star } from "lucide-react";

const items = [
  {
    name: "Mariana Lopes",
    role: "Designer · São Paulo",
    quote:
      "Mudou minha rotina. Em 30 segundos tenho um look pronto e descobri peças que tinha esquecido.",
    initials: "ML",
  },
  {
    name: "Rafael Costa",
    role: "Engenheiro · Rio de Janeiro",
    quote:
      "O avatar 3D é absurdo. Provar antes economiza tempo e evita aquela combinação ruim.",
    initials: "RC",
  },
  {
    name: "Beatriz Andrade",
    role: "Estudante · Belo Horizonte",
    quote:
      "Parei de comprar por impulso. A IA me mostra que eu já tenho ótimas combinações no armário.",
    initials: "BA",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Depoimentos
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Histórias de quem já testou
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="card-surface flex h-full flex-col justify-between rounded-2xl p-7"
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
