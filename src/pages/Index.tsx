import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, ShieldCheck, Leaf, Clock, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-parrachos.jpg";
import catamaranImage from "@/assets/catamaran.jpg";
import divingImage from "@/assets/diving-cylinder.jpg";
import snorkelingImage from "@/assets/snorkeling.jpg";

const Index = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Segurança Total",
      description: "Catamarã homologado pela Marinha e tripulação certificada",
    },
    {
      icon: Leaf,
      title: "Sustentável",
      description: "Área de preservação ambiental monitorada pelo IDEMA",
    },
    {
      icon: Clock,
      title: "Experiência Completa",
      description: "1h30 de mergulho livre nos parrachos + equipamentos inclusos",
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description: "Adequado para crianças a partir de 3 anos com supervisão",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Descubra o Aquário Natural do RN
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
              Mergulhe nos Parrachos de Maracajaú, um paraíso preservado a 7 km da costa com águas cristalinas e vida marinha exuberante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
              >
                <a
                  href="https://wa.me/5584999999999?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos de Maracajaú"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar Agora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                <a href="/sobre">Saiba Mais</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-wave">
          <Waves className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por Que Escolher Nosso Passeio?</h2>
            <p className="text-xl text-muted-foreground">Experiência única com segurança e sustentabilidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-light rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">O Passeio</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Embarque em nosso <span className="text-primary font-semibold">catamarã nativo homologado</span> e navegue por 30 minutos (5 milhas náuticas) até alcançar os famosos Parrachos de Maracajaú.
                </p>
                <p>
                  Durante <span className="text-primary font-semibold">1h30 de permanência</span>, você terá acesso a máscara e snorkel para explorar este aquário natural em alto-mar, com acompanhamento completo de nossa equipe certificada.
                </p>
                <p>
                  Localizado a apenas <span className="text-primary font-semibold">45 km de Natal</span>, este é um dos principais pontos turísticos do Rio Grande do Norte.
                </p>
              </div>
              <Button asChild className="mt-6 bg-gradient-ocean text-white border-0" size="lg">
                <a href="/sobre">Saiba Mais Sobre o Passeio</a>
              </Button>
            </div>
            <div className="relative">
              <img
                src={catamaranImage}
                alt="Catamarã nos Parrachos de Maracajaú"
                className="rounded-lg shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diving Highlight Section */}
      <section className="py-20 bg-gradient-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url(${divingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={divingImage}
                alt="Mergulho com cilindro nos Parrachos"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Mergulho com Cilindro</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Experimente a sensação de <span className="text-accent font-semibold">mergulhar mais fundo</span> e explorar o aquário natural de forma única, acompanhado por profissionais credenciados.
              </p>
              <ul className="space-y-3 text-lg text-white/90 mb-8">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Acompanhamento de profissional certificado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Experiência única para iniciantes e experientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Disponível para maiores de 10 anos</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-0">
                <a href="/servicos">Ver Todos os Serviços Extras</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Galeria</h2>
            <p className="text-xl text-muted-foreground">Veja as belezas que te esperam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-80">
              <img
                src={heroImage}
                alt="Recifes de coral"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-xl">Recifes Preservados</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-80">
              <img
                src={divingImage}
                alt="Mergulho profissional"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-xl">Mergulho Profissional</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-80">
              <img
                src={snorkelingImage}
                alt="Snorkeling"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-xl">Snorkeling Livre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto Para Sua Aventura?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve agora seu lugar no passeio mais emocionante do Rio Grande do Norte!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
          >
            <a
              href="https://wa.me/5584999999999?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos de Maracajaú"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
