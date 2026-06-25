import aiVisual from "@/assets/ai-visual.jpg";
import { Briefcase, GraduationCap, Heart, Plane, PartyPopper } from "lucide-react";

const occasions = [
  { icon: Briefcase, label: "Trabalho" },
  { icon: GraduationCap, label: "Faculdade" },
  { icon: Heart, label: "Encontros" },
  { icon: Plane, label: "Viagens" },
  { icon: PartyPopper, label: "Festas" },
];

export function AISection() {
  return (
    <section id="ia" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Inteligência Artificial
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Uma IA que entende{" "}
            <span className="text-gradient-brand">moda</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nosso modelo analisa estilo pessoal, cores, categorias de peças e
            ocasiões para criar recomendações que parecem feitas por um estilista.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {occasions.map((o) => (
              <span
                key={o.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <o.icon className="h-4 w-4 text-accent" />
                {o.label}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              ["Estilo", "Aprende seu gosto pessoal"],
              ["Cores", "Paletas harmoniosas"],
              ["Categorias", "Classificação automática"],
              ["Ocasiões", "Looks por contexto"],
            ].map(([k, v]) => (
              <div key={k} className="card-surface rounded-xl p-4">
                <div className="text-sm font-semibold text-gradient-brand">{k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/20 blur-3xl" />
          <img
            src={aiVisual}
            alt="Visualização da IA do DressMe analisando roupas"
            width={1280}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-3xl border border-border"
          />
        </div>
      </div>
    </section>
  );
}
