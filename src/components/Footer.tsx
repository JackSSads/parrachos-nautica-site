import { Phone, MapPin, Mail } from "lucide-react";
import LogoBranca from "../assets/logo_branca.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={LogoBranca} className="p-1 w-28 rounded-xl" />
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
                <Phone className="w-5 h-5" />
                <span>(84) 9 9995-9793</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>parrachosnautica2@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Maracajaú, Maxaranguape - RN</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-white/80">
              <p>Segunda a Domingo</p>
              <p className="font-semibold text-white">8:00 - 20:00</p>
              <p className="text-sm mt-4">
                *Passeios sujeitos a condições climáticas favoráveis e horários da maré
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
