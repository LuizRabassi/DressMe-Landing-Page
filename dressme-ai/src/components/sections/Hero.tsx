import { ArrowRight, Play } from "lucide-react";
import heroApp from "@/assets/hero-app.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[400px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
            Fashion Tech · Powered by AI
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Seu Guarda-Roupa{" "}
            <span className="text-gradient-brand">Inteligente</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            O DressMe AI organiza suas roupas digitalmente, gera recomendações
            personalizadas por Inteligência Artificial e exibe combinações em um
            avatar 3D interativo. Vista-se melhor, em segundos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-brand transition-transform hover:scale-105"
            >
              Testar Gratuitamente
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#funcionalidades"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-secondary"
            >
              <Play className="h-4 w-4 text-accent" />
              Ver Demonstração
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["10k+", "Beta users"],
              ["98%", "Satisfação"],
              ["3D", "Avatar real-time"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-2xl font-bold text-gradient-brand">{k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative animate-float">
            <img
              src={heroApp}
              alt="App DressMe AI exibindo guarda-roupa digital"
              width={1280}
              height={1600}
              className="mx-auto w-full max-w-md rounded-[2rem] border border-border shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
