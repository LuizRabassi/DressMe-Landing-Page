import { Clock, ShirtIcon, Search, ShoppingBag } from "lucide-react";

const problems = [
  { icon: Clock, title: "Tempo perdido", desc: "Horas gastas decidindo o que vestir todos os dias." },
  { icon: Search, title: "Combinações difíceis", desc: "Dificuldade em montar looks que realmente combinam." },
  { icon: ShirtIcon, title: "Peças esquecidas", desc: "Roupas que ficam paradas no fundo do guarda-roupa." },
  { icon: ShoppingBag, title: "Compras impulsivas", desc: "Itens duplicados e gastos desnecessários." },
];

export function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            O Problema
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Vestir-se não deveria ser{" "}
            <span className="text-gradient-brand">complicado</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Todos os dias, milhões enfrentam os mesmos dilemas na frente do espelho.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="card-surface group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand glow-brand">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
