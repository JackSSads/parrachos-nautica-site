import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Clock, MapPin, Shield, Leaf, Waves, Users, Camera } from "lucide-react";
import catamaranImage from "@/assets/catamaran.jpg";
import heroImage from "@/assets/hero-parrachos.jpg";

const AboutTour = () => {
  const tourDetails = [
    {
      icon: Ship,
      title: "Embarcação",
      description: "Catamarã nativo homologado pela Marinha do Brasil, seguro e confortável para toda a família",
    },
    {
      icon: Shield,
      title: "Tripulação",
      description: "Equipe certificada e treinada para garantir sua segurança durante todo o passeio",
    },
    {
      icon: Clock,
      title: "Duração",
      description: "30 minutos de ida + 1h30 nos parrachos + 30 minutos de volta = 2h30 de experiência",
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "A 45 km de Natal, os Parrachos ficam a 7 km da costa, em Maxaranguape/RN",
    },
    {
      icon: Leaf,
      title: "Preservação",
      description: "Área de Proteção Ambiental (APA) monitorada pelo IDEMA - turismo sustentável",
    },
    {
      icon: Users,
      title: "Equipamentos",
      description: "Máscara e snorkel inclusos, coletes salva-vidas disponíveis para todas as idades",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre o Passeio</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Conheça todos os detalhes da experiência mais emocionante do litoral norte do Rio Grande do Norte.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Waves className="w-full h-12 text-background" />
        </div>
      </section>

      {/* Tour Details Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourDetails.map((detail, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 bg-gradient-light rounded-full flex items-center justify-center">
                    <detail.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Journey Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">A Jornada Completa</h2>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Embarque</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    O passeio começa na praia de Maracajaú. Após o check-in com nossa equipe, você embarca no catamarã nativo, homologado pela Marinha do Brasil. A embarcação é espaçosa, segura e perfeita para famílias.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Navegação</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Durante aproximadamente 30 minutos, percorremos 5 milhas náuticas (cerca de 7 km) em direção aos Parrachos. Durante a navegação, você pode apreciar a paisagem costeira e o azul cristalino do mar. Nossa tripulação certificada está sempre disponível para tirar dúvidas e garantir o conforto de todos.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Mergulho Livre</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ao chegar nos Parrachos, você terá 1h30 para explorar livremente este aquário natural. Fornecemos máscara e snorkel, e nossa equipe acompanha você durante toda a atividade. As águas cristalinas revelam um espetáculo de cores, com peixes tropicais, corais e uma biodiversidade impressionante.
                  </p>
                  <div className="mt-4 p-4 bg-secondary/20 rounded-lg border border-secondary">
                    <p className="text-foreground font-semibold">✓ Incluso: Máscara + Snorkel</p>
                    <p className="text-foreground font-semibold">✓ Coletes para crianças a partir de 3 anos</p>
                    <p className="text-foreground font-semibold">✓ Acompanhamento total da equipe</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Retorno</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Após o período de mergulho, retornamos à costa em mais 30 minutos de navegação tranquila. É o momento ideal para relaxar, compartilhar as experiências vividas e apreciar as últimas vistas do mar antes de desembarcar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl h-96">
              <img
                src={catamaranImage}
                alt="Catamarã"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">Embarcação Segura</h3>
                <p className="text-white/90">Catamarã homologado e confortável</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl h-96">
              <img
                src={heroImage}
                alt="Parrachos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">Aquário Natural</h3>
                <p className="text-white/90">Biodiversidade marinha preservada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Turismo Sustentável</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Os Parrachos Náutica são uma Área de Proteção Ambiental (APA) monitorada pelo IDEMA. Nosso compromisso é proporcionar uma experiência inesquecível preservando este patrimônio natural. Seguimos rigorosos protocolos ambientais e educamos nossos visitantes sobre a importância da conservação marinha.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Segurança</h3>
                  <p className="text-sm text-muted-foreground">Equipamentos certificados e equipe treinada</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Leaf className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Preservação</h3>
                  <p className="text-sm text-muted-foreground">Respeito total ao ecossistema marinho</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Camera className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Memórias</h3>
                  <p className="text-sm text-muted-foreground">Leve apenas fotos, deixe apenas bolhas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto Para Viver Essa Experiência?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve agora e garanta seu lugar neste passeio inesquecível!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
            >
              <a
                href="https://wa.me/5584999999999?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos Náutica"
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
              <a href="/servicos">Ver Serviços Extras</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTour;
