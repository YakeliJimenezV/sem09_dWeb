
import Link from "next/link";

const ejercicios = [
  {
    titulo: "Pokémon CSR",
    descripcion: "Consulta de Pokémon desde el navegador.",
    ruta: "/pokemon-csr",
  },
  {
    titulo: "Pokémon SSR",
    descripcion: "Consulta de Pokémon desde el servidor.",
    ruta: "/pokemon-ssr",
  },
  {
    titulo: "Dashboard del Clima",
    descripcion: "Aplicación híbrida con SSR y CSR.",
    ruta: "/weather",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-purple-300">
            DESARROLLO WEB AVANZADO
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Laboratorio 09
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Renderizado SSR y CSR con Next.js
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {ejercicios.map((ejercicio) => (
            <article
              key={ejercicio.ruta}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/10 p-6"
            >
              <h2 className="mb-3 text-xl font-bold">
                {ejercicio.titulo}
              </h2>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
                {ejercicio.descripcion}
              </p>

              <Link
                href={ejercicio.ruta}
                className="rounded-xl bg-purple-600 px-4 py-3 text-center font-semibold transition hover:bg-purple-500"
              >
                Ver ejercicio →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
