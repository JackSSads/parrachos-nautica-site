import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Cylinder } from "lucide-react";

import { services } from "@/data/productData";

const ExtraServices = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Serviços Extras</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Potencialize sua experiência nos Parrachos Náutica com nossos serviços adicionais.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Waves className="w-full h-12 text-background" />
        </div>
      </section>

      {/* Featured Service - Diving */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-accent text-white text-lg px-4 py-2">Destaque Especial</Badge>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center">
                    <Cylinder className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">Mergulho com Cilindro</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Experimente a sensação única de <span className="text-primary font-semibold">mergulhar mais fundo</span> e explorar o aquário natural com maior liberdade e tempo embaixo d'água.
                </p>
                <ul className="space-y-3 mb-8">
                  {services[0].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-ocean text-white border-0"
                >
                  <a
                    href="https://wa.me/5584999959793?text=Olá! Gostaria de saber mais sobre o mergulho com cilindro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
              <div className="relative">
                <img
                  loading="lazy"
                  src={services[0].image}
                  alt="Mergulho com cilindro"
                  className="rounded-lg shadow-2xl animate-float max-h-[400px] w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-xl">
                  <p className="text-sm font-semibold">Maiores de 10 anos</p>
                  <p className="text-2xl font-bold">~30 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Outros Serviços Disponíveis</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.slice(1).map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-light rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href={`https://wa.me/5584999959793?text=Olá! Gostaria de saber mais sobre: ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mais Informações
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Informações Importantes</h2>
            <div className="space-y-4 text-left bg-card p-8 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">→</span>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Comida e bebida próprias:</span> Você pode levar seus próprios itens, mas informe nossa equipe com antecedência.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">→</span>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Reservas antecipadas:</span> Recomendamos reservar os serviços extras com antecedência para garantir disponibilidade.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">→</span>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Pagamento:</span> Serviços extras podem ser pagos no local ou antecipadamente via transferência.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">→</span>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Dúvidas:</span> Nossa equipe está sempre disponível para esclarecer qualquer questão sobre os serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto Para Reservar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato para reservar o passeio e os serviços extras!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
          >
            <a
              href="https://wa.me/5584999959793?text=Olá! Gostaria de fazer uma reserva e saber mais sobre os serviços extras"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExtraServices;
