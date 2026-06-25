import { Sparkles, Eye, Wand2 } from "lucide-react";
import avatar from "@/assets/avatar-3d.jpg";

const features = [
  { icon: Eye, title: "Prove virtualmente", desc: "Veja roupas no seu avatar antes de vesti-las de verdade." },
  { icon: Wand2, title: "Combinações instantâneas", desc: "Teste centenas de looks em segundos." },
  { icon: Sparkles, title: "Sugestões em tempo real", desc: "Receba recomendações conforme o clima, agenda e estilo." },
];

export function AvatarSection() {
  return (
    <section id="avatar" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-brand opacity-25 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border card-surface">
            <img
              src={avatar}
              alt="Avatar 3D interativo do DressMe AI"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Avatar 3D
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Seu reflexo,{" "}
            <span className="text-gradient-brand">reinventado</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            O grande diferencial do DressMe AI: um avatar 3D personalizado que
            experimenta as roupas por você. Visualize, ajuste e descubra combinações
            que destacam o seu melhor.
          </p>

          <ul className="mt-8 space-y-5">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary border border-border">
                  <f.icon className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
