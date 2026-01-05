import { Phone, MapPin, Mail, Instagram } from "lucide-react";
import { logo } from "@/assets";
import { WhatsAppIcon } from "@/libs/icons.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo.LogoBranca} className="p-1 w-28 rounded-xl" />
              <span className="font-bold text-xl">Parrachos Náutica</span>
            </div>
            <p className="text-white/80">
              Venha viver uma experiência única no aquário natural em alto-mar do Rio Grande do Norte!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <WhatsAppIcon />
                <Link to={"https://wa.me/5584996211431?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos Náutica"}
                >(84) 9 9921-1789</Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <Link to="tel:+5584996211431">(84) 9 9621-1431</Link>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <Link to="https://www.instagram.com/parrachosnautica/"
                >@parrachosnautica</Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <Link to={"mailto:parrachosnautica2@gmail.com"}>parrachosnautica2@gmail.com</Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <Link to="https://maps.google.com/?q=Maracajaú,Maxaranguape,RN">Maracajaú, Maxaranguape - RN</Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-white/80">
              <p>Segunda a Domingo</p>
              <p className="font-semibold text-white">8:00 - 22:00</p>
              <p className="text-sm mt-4">
                *Passeios sujeitos a condições climáticas favoráveis e horários da maré.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Parrachos Náutica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
