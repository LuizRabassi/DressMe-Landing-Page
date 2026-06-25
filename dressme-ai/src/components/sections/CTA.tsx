import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border card-surface p-10 sm:p-16 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Lista de Espera
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Seja um dos primeiros a vestir{" "}
            <span className="text-gradient-brand">o futuro</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Acesso antecipado, benefícios exclusivos e desconto vitalício no Premium
            para quem entrar agora.
          </p>

          {submitted ? (
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 px-6 py-5 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              Cadastro recebido! Em breve entraremos em contato.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                className="flex-1 rounded-full border border-border bg-background/60 px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                className="flex-1 rounded-full border border-border bg-background/60 px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-brand transition-transform hover:scale-105"
              >
                Cadastrar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
