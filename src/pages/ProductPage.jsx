import { useParams, Link } from "react-router-dom";
import { products } from "@/data/productData";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-center mt-20 text-gray-600">Produto não encontrado.</p>;
  }

  return (
    <main className="flex flex-col pt-20 ">
      <Header />

      {/* Hero / Top */}
      <div className="relative h-[300px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[300px] object-cover object-center"
        />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-t-2xl border-t border-x border-white/20">

              <nav className="text-sm text-white/90 mb-2">
                <Link to="/" className="hover:text-white transition">Serviços</Link>
                <span className="mx-2">›</span>
                <span className="font-medium">{product.category || "Passeio"}</span>
              </nav>

              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-2xl">{product.name}</h1>
              <p className="text-base md:text-lg text-white/90 max-w-3xl drop-shadow">{product.shortDescription}</p>

            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="max-w-6xl mx-auto mt-8 px-4 bg-white rounded-2xl shadow-md">
        <div className="px-6 py-6 sm:px-10 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Main description */}
          <section className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Sobre este serviço</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

            {/* Destaques */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Example highlights; edit/remove as needed */}
              <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-800 px-3 py-1.5 rounded-full text-sm">
                {/* boat icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 13c3 1.5 6 2 9 2s6-.5 9-2v4H3v-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 13l1.5-4h15L21 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Catamarã homologado
              </span>

              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full text-sm">
                {/* clock icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 7v5l3 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"></circle>
                </svg>
                Duração: 1h30 + deslocamento
              </span>

              <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full text-sm">
                {/* location icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.2"></path>
                  <path d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" stroke="currentColor" strokeWidth="1.2"></path>
                </svg>
                Local: Parrachos de Maracajaú
              </span>
            </div>

            {/* Benefits / inclusos */}
            {product.benefits?.length ? (
              <div className="mt-6">
                <h3 className="text-md font-medium text-gray-800 mb-3">O que está incluso</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 text-sky-600">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          {/* Sidebar / CTA */}
          <aside className="space-y-4">
            <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Por apenas</p>
                  <p className="text-2xl font-bold text-sky-700">{product.price}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Vagas</p>
                  <p className="text-sm font-medium text-gray-700">Confirmar no agendamento</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  type="button"
                  asChild
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
                >
                  <a
                    href={`https://wa.me/5584999959793?text=Olá!%20Quero%20reservar%20o%20serviço%20de%20%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar Agora
                  </a>
                </Button>

                <Button
                  type="button"
                  
                  size="lg"
                  className="w-full hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Ver galeria
                </Button>
              </div>
            </div>

            <div className="mt-4 p-4 bg-secondary/20 rounded-lg border border-secondary">
              <p className="font-medium text-gray-800 mb-2">Segurança</p>
              <p className="text-muted-foreground text-md leading-relaxed">Embarcação homologada pela Marinha, tripulação qualificada e coletes salva-vidas disponíveis.</p>
            </div>

            <div className="mt-4 p-4 bg-secondary/20 rounded-lg border border-secondary">
              <p className="font-medium text-gray-800 mb-2">Política de cancelamento</p>
              <p className="text-muted-foreground text-md leading-relaxed">Reagendamos ou reembolsamos 100% em caso de condições climáticas adversas.</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Gallery */}
      <section className="mt-8 mb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Galeria</h2>
            <p className="text-xl text-muted-foreground">Veja as belezas que te esperam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.gallery.length && (
              product.gallery.map((img, i) => (
                <div className="relative overflow-hidden rounded-lg group cursor-pointer h-80">
                  <img
                    src={img.img}
                    alt={`${product.name} - ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold text-xl">{product.gallery[i].subtitle}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
