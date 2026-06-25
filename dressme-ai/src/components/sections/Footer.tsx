import { Sparkles, Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/80 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-bold">
                DressMe <span className="text-gradient-brand">AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A primeira plataforma de Fashion Tech que une Inteligência Artificial,
              guarda-roupa digital e avatar 3D para revolucionar a forma como você
              se veste.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#como-funciona" className="hover:text-foreground">Como Funciona</a></li>
              <li><a href="#funcionalidades" className="hover:text-foreground">Funcionalidades</a></li>
              <li><a href="#avatar" className="hover:text-foreground">Avatar 3D</a></li>
              <li><a href="#premium" className="hover:text-foreground">Premium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest">
              Contato
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                hello@dressme.ai
              </li>
              <li><a href="#" className="hover:text-foreground">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} DressMe AI. Todos os direitos reservados.</p>
          <p>Feito com paixão por moda e tecnologia.</p>
        </div>
      </div>
    </footer>
  );
}
