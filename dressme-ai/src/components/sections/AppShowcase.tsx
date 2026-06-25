import type { ReactNode } from "react";
import screenWardrobe from "@/assets/screen-wardrobe.jpg";
import screenRecommendations from "@/assets/screen-recommendations.jpg";
import screenAvatar from "@/assets/screen-avatar.jpg";
import screenHistory from "@/assets/screen-history.jpg";

export interface ShowcaseScreen {
  image?: string;
  title: string;
  description: string;
  badge?: string;
}

// EDIT THIS LIST to swap or add real app screenshots later.
const screens: ShowcaseScreen[] = [
  { image: screenWardrobe, title: "Guarda-roupa Digital", description: "Toda sua coleção organizada por cor, tipo e ocasião.", badge: "01" },
  { image: screenRecommendations, title: "Recomendações IA", description: "Looks gerados em tempo real com base no seu estilo.", badge: "02" },
  { image: screenAvatar, title: "Avatar 3D", description: "Veja como cada combinação fica antes de vestir.", badge: "03" },
  { image: screenHistory, title: "Histórico de Looks", description: "Acompanhe o que já usou e nunca repita sem querer.", badge: "04" },
];

function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto h-[560px] w-[280px] rounded-[3rem] border border-border bg-secondary p-3 shadow-2xl">
      <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-background" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background">
        {children}
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Uma experiência feita para você
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veja as principais telas do DressMe AI em ação.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {screens.map((s) => (
            <div key={s.title} className="group">
              <div className="transition-transform duration-500 group-hover:-translate-y-3">
                <PhoneMockup>
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary to-background p-6 text-center">
                      <span className="font-display text-5xl font-bold text-gradient-brand">
                        {s.badge}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        Screenshot
                      </span>
                    </div>
                  )}
                </PhoneMockup>
              </div>
              <h3 className="mt-6 text-center text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
