import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Waves, HelpCircle } from "lucide-react";

import { faqs } from "@/data/productData";

import { useNavigate } from "react-router-dom";

const FAQ = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up text-center mx-auto">
            <HelpCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Tire todas as suas dúvidas sobre o passeio aos Parrachos Náutica
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
                  href="https://wa.me/5584999959793?text=Olá! Tenho algumas dúvidas sobre o passeio aos Parrachos Náutica"
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
                <button onClick={() => navigate("/contato")}>Página de Contato</button>
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
            Reserve agora seu lugar e viva uma experiência inesquecível nos Parrachos Náutica!
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
              Reservar Agora
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
