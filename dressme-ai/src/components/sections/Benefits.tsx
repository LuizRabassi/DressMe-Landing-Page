import { Clock, Recycle, FolderTree, PiggyBank, Zap, Palette } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Economia de tempo", desc: "Decida o que vestir em segundos, não em minutos." },
  { icon: Recycle, title: "Aproveite mais", desc: "Redescubra peças esquecidas e crie novos looks." },
  { icon: FolderTree, title: "Organização", desc: "Seu guarda-roupa todo catalogado e acessível." },
  { icon: PiggyBank, title: "Menos compras impulsivas", desc: "Saiba o que já tem antes de comprar mais." },
  { icon: Zap, title: "Praticidade total", desc: "Tudo no celular, pronto para usar a qualquer hora." },
  { icon: Palette, title: "Personalização", desc: "Recomendações que combinam com você." },
];

export function Benefits() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Benefícios
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Por que você vai amar
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-surface group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_oklch(0.62_0.22_27/0.4)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary border border-border transition-colors group-hover:bg-gradient-brand">
                <b.icon className="h-6 w-6 text-accent transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
