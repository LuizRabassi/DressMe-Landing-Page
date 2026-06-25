import { Camera, FolderOpen, Brain, User } from "lucide-react";

const steps = [
  { icon: Camera, title: "Envie suas fotos", desc: "Capture suas roupas com a câmera do celular em segundos." },
  { icon: FolderOpen, title: "Guarda-roupa digital", desc: "O sistema organiza tudo por categoria, cor e estilo." },
  { icon: Brain, title: "IA analisa", desc: "Nossa IA estuda combinações, tendências e suas preferências." },
  { icon: User, title: "Avatar 3D exibe", desc: "Visualize os looks recomendados em seu avatar personalizado." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Como Funciona
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Quatro passos para revolucionar seu estilo
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand glow-brand">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="mt-4 inline-block rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Etapa {i + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
