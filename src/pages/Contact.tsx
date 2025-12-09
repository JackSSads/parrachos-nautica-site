import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Waves } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up text-center mx-auto">
            <MessageCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estamos prontos para ajudar você a planejar sua aventura nos Parrachos Náutica
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Waves className="w-full h-12 text-background" />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-4">(84) 9 9995-9793</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+5584999959793">Ligar Agora</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">(84) 9 9995-9793</p>
                <Button asChild className="w-full bg-gradient-ocean text-white border-0">
                  <a
                    href="https://wa.me/5584999959793?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos Náutica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar Mensagem
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">E-mail</h3>
                <p className="text-muted-foreground mb-4 text-sm">parrachosnautica2@gmail.com</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:parrachosnautica2@gmail.com">Enviar E-mail</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Localização</h3>
                <p className="text-muted-foreground mb-4 text-sm">Maracajaú, Maxaranguape - RN</p>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://maps.google.com/?q=Maracajaú,Maxaranguape,RN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Mapa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule & Location Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Schedule */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Horário de Atendimento</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Segunda a Domingo</span>
                      <span className="text-foreground font-semibold">8:00 - 20:00</span>
                    </div>
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Importante:</strong> Os passeios estão sujeitos às condições climáticas e marítimas. Em caso de tempo desfavorável, entraremos em contato para remarcar.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Como Chegar</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Partindo de Natal:</h3>
                      <p className="text-muted-foreground">
                        Distância: aproximadamente 45 km (cerca de 50 minutos de carro)
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Endereço:</h3>
                      <p className="text-muted-foreground">
                        Praia de Maracajaú<br />
                        Maxaranguape - RN<br />
                        CEP: 59580-000
                      </p>
                    </div>
                    <Button asChild className="w-full bg-gradient-ocean text-white border-0 mt-4">
                      <a
                        href="https://maps.google.com/?q=Maracajaú,Maxaranguape,RN"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir no Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Como Fazer Sua Reserva</h2>
            
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Entre em Contato</h3>
                      <p className="text-muted-foreground">
                        Utilize o WhatsApp, telefone ou e-mail para falar com nossa equipe. Informe a data desejada e o número de pessoas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Confirme Disponibilidade</h3>
                      <p className="text-muted-foreground">
                        Nossa equipe verificará a disponibilidade para a data escolhida e fornecerá todas as informações sobre valores e formas de pagamento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Receba Confirmação</h3>
                      <p className="text-muted-foreground">
                        Após a confirmação do pagamento, você receberá todas as informações necessárias sobre horário de embarque, o que levar e dicas importantes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Prepare-se Para o Passeio</h3>
                      <p className="text-muted-foreground">
                        Chegue com antecedência, traga protetor solar, toalha e prepare-se para viver uma experiência inesquecível!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Planejar Sua Aventura!</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e garanta seu lugar no melhor passeio do Rio Grande do Norte!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 border-0"
          >
            <a
              href="https://wa.me/5584999959793?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos Náutica"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp Agora
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
