import { Anchor, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-8 h-8" />
              <span className="font-bold text-xl">Parrachos de Maracajaú</span>
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
                <span>(84) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contato@parrachosmaracajau.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Maracajaú, Maxaranguape - RN</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-white/80">
              <p>Segunda a Domingo</p>
              <p className="font-semibold text-white">8:00 - 17:00</p>
              <p className="text-sm mt-4">
                *Passeios sujeitos a condições climáticas favoráveis
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Parceiros Parrachos de Maracajaú. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
