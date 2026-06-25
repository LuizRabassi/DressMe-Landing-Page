import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <p className="mt-4 text-muted-foreground">Página não encontrada.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-gradient-brand px-6 py-2.5 font-semibold text-primary-foreground">Voltar ao início</Link>
      </div>
    </div>
  );
}
