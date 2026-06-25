import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "para sempre",
    desc: "Comece a organizar seu guarda-roupa hoje.",
    features: [
      "Guarda-roupa digital básico",
      "Até 50 peças cadastradas",
      "Recomendações diárias da IA",
      "Avatar 3D padrão",
    ],
    cta: "Começar grátis",
    highlight: false,
  },
  {
    name: "Premium",
    price: "R$ 29",
    period: "/ mês",
    desc: "Toda a potência do DressMe AI sem limites.",
    features: [
      "IA avançada e personalizada",
      "Recomendações ilimitadas",
      "Avatar 3D premium e customizável",
      "Histórico completo de looks",
      "Integrações com lojas de moda",
      "Suporte prioritário",
    ],
    cta: "Quero ser Premium",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="premium" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Planos
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Escolha como quer{" "}
            <span className="text-gradient-brand">se vestir melhor</span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 lg:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-brand text-primary-foreground glow-brand"
                  : "card-surface"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                  Mais popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {p.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`h-5 w-5 shrink-0 ${p.highlight ? "text-primary-foreground" : "text-accent"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-background text-foreground"
                    : "bg-gradient-brand text-primary-foreground glow-brand"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
