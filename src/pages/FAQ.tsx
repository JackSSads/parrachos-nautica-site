import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Waves, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Posso levar comida e bebida para o passeio?",
      answer: "Sim, você pode levar seus próprios alimentos e bebidas. Também oferecemos um serviço de bar a bordo com bebidas e petiscos. Pedimos apenas que nos informe com antecedência caso traga itens próprios para melhor organização do espaço na embarcação.",
    },
    {
      question: "Como funciona o cancelamento por mau tempo?",
      answer: "A segurança é nossa prioridade. Se as condições climáticas ou do mar não estiverem favoráveis, entramos em contato com você para remarcar o passeio para outra data ou oferecer reembolso total de 100%, conforme sua preferência. Nossa equipe monitora constantemente as condições meteorológicas e marítimas.",
    },
    {
      question: "Qual é o destino do passeio?",
      answer: "O destino é os Parrachos de Maracajaú, um dos principais pontos turísticos do Rio Grande do Norte. Localizados a aproximadamente 7 km da costa, em Maxaranguape, os Parrachos formam um grande aquário natural com águas cristalinas e rica biodiversidade marinha. É uma Área de Proteção Ambiental (APA) monitorada pelo IDEMA.",
    },
    {
      question: "Como faço para reservar o passeio?",
      answer: "Para reservar, entre em contato conosco através do WhatsApp pelo número disponível no site. Nossa equipe fornecerá informações sobre disponibilidade de datas, valores e formas de pagamento. Recomendamos fazer a reserva com antecedência, especialmente em alta temporada e feriados.",
    },
    {
      question: "Crianças podem participar do passeio?",
      answer: "Sim! Oferecemos coletes salva-vidas para crianças a partir de 3 anos. As crianças devem estar sempre acompanhadas por um responsável adulto. Para o mergulho com cilindro, a idade mínima é de 10 anos. Nossa equipe está treinada para auxiliar famílias com crianças durante todo o passeio.",
    },
    {
      question: "Quanto tempo dura o passeio completo?",
      answer: "O passeio completo tem duração aproximada de 2h30. Sendo: 30 minutos de navegação até os Parrachos, 1h30 de permanência para mergulho livre e exploração, e mais 30 minutos para o retorno à costa. O tempo pode variar ligeiramente dependendo das condições do mar.",
    },
    {
      question: "O que está incluído no valor do passeio?",
      answer: "O valor básico do passeio inclui: transporte de ida e volta no catamarã, equipamentos de snorkel (máscara e snorkel), coletes salva-vidas (se necessário), e acompanhamento completo da tripulação certificada durante toda a experiência. Serviços extras como mergulho com cilindro, fotos subaquáticas e máscara full face são cobrados à parte.",
    },
    {
      question: "Preciso saber nadar para fazer o passeio?",
      answer: "Não é obrigatório saber nadar, pois fornecemos coletes salva-vidas e nossa equipe oferece acompanhamento total durante o mergulho livre. No entanto, é importante informar à equipe caso você não saiba nadar ou tenha algum receio, para que possamos oferecer assistência personalizada e garantir sua segurança e conforto.",
    },
    {
      question: "Qual é a melhor época para fazer o passeio?",
      answer: "Os Parrachos de Maracajaú podem ser visitados durante todo o ano. Os meses de setembro a março geralmente apresentam melhores condições de visibilidade na água. No entanto, o passeio acontece regularmente durante todo o ano, sempre respeitando as condições climáticas e de maré favoráveis.",
    },
    {
      question: "Como é a estrutura na praia de embarque?",
      answer: "A praia de Maracajaú, onde ocorre o embarque e desembarque, possui boa infraestrutura com restaurantes, banheiros, estacionamento e barracas. Recomendamos chegar com antecedência para facilitar o check-in e embarque no horário programado.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up text-center mx-auto">
            <HelpCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Tire todas as suas dúvidas sobre o passeio aos Parrachos de Maracajaú
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Waves className="w-full h-12 text-background" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ainda tem dúvidas?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe está sempre disponível para responder suas perguntas e fornecer todas as informações necessárias para tornar sua experiência inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-ocean text-white border-0"
              >
                <a
                  href="https://wa.me/5584999999999?text=Olá! Tenho algumas dúvidas sobre o passeio aos Parrachos de Maracajaú"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="/contato">Página de Contato</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto Para Sua Aventura?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve agora seu lugar e viva uma experiência inesquecível nos Parrachos de Maracajaú!
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
              Reservar Agora
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
