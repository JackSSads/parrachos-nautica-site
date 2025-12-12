import {
  ShieldCheck,
  Leaf,
  Clock,
  MapPin,
  Users,
  Ship,
  Shield,
  Cylinder,
  Camera,
  Glasses,
  Coffee,
} from "lucide-react";

import { icons } from "@/libs/icons";

import Cartamara01 from "@/assets/catamara/catamara.webp";
import Cartamara02 from "@/assets/catamara/catamara02.webp";

import Parrachos01 from "@/assets/parrachos/parrachos.webp";
import Parrachos02 from "@/assets/parrachos/f_aerea.webp";
import Parrachos03 from "@/assets/parrachos/f_aerea02.webp";

import Snorkel01 from "@/assets/snorkel/snorkel01.webp";
import Snorkel02 from "@/assets/snorkel/snorkel02.webp";
import Snorkel03 from "@/assets/snorkel/snorkel03.webp";

import Cilindro01 from "@/assets/cilindro/cilindro01.webp"
import Cilindro02 from "@/assets/cilindro/cilindro02.webp"
import Cilindro03 from "@/assets/cilindro/cilindro03.webp"
import Cilindro04 from "@/assets/cilindro/cilindro04.webp"
import Cilindro05 from "@/assets/cilindro/cilindro05.webp"
import Cilindro06 from "@/assets/cilindro/cilindro06.webp"
import Cilindro07 from "@/assets/cilindro/cilindro07.webp"
import Cilindro08 from "@/assets/cilindro/cilindro08.webp"

import Quadriciclo02 from "@/assets/quadriciclo/quadriciclo02.webp";
import Quadriciclo03 from "@/assets/quadriciclo/quadriciclo03.webp";
import Quadriciclo04 from "@/assets/quadriciclo/quadriciclo04.webp";
import Quadriciclo05 from "@/assets/quadriciclo/quadriciclo05.webp";
import Quadriciclo08 from "@/assets/quadriciclo/quadriciclo08.webp";
import Quadriciclo09 from "@/assets/quadriciclo/quadriciclo09.webp";
import Quadriciclo10 from "@/assets/quadriciclo/quadriciclo10.webp";
import Quadriciclo11 from "@/assets/quadriciclo/quadriciclo11.webp";

export const products = [
  {
    id: 1,
    name: "Mergulho com Instrutor",
    slug: "mergulho-cilindro",
    image: Cilindro04,
    shortDescription: "Mergulho com cilindro acompanhado por instrutor profissional.",
    description: `Transforme o seu passeio em uma experiência única com o mergulho com
    cilindro. Guiado por instrutores credenciados, você explora mais profundamente os
    Parrachos de Maracajaú, observando de perto peixes coloridos, corais preservados
    e toda a vida marinha da região com total segurança e tranquilidade.`,
    category: "Mergulho com cilindro",
    benefits: [
      "Acompanhamento de profissional credenciado",
      "Equipamento completo fornecido",
      "Ideal para iniciantes e experientes",
      "Disponível para maiores de 10 anos",
      "Duração: aproximadamente 30 minutos",
      "Explore profundidades que o snorkel não alcança",
    ],
    policy: {
      security: "Mergulho supervisionado por instrutor profissional",
      cancellation: `Reagendamos ou reembolsamos 100% em caso de condições climáticas adversas.
      Passeios sujeitos a condições climáticas favoráveis.`,
      weather: "Passeios sujeitos a condições climáticas favoráveis",
    },
    highlights: [
      {
        color: "sky",
        text: "Catamarã homologado",
        icon: icons.boat
      },
      {
        color: "emerald",
        text: "Duração: 1h30 + deslocamento",
        icon: icons.clock
      },
      {
        color: "amber",
        text: "Local: Parrachos de Maracajaú",
        icon: icons.location
      },
    ],
    gallery: [
      {
        img: Cilindro04,
        subtitle: "Mergulho com instrutor profissional"
      },
      {
        img: Cilindro02,
        subtitle: "Explore as profundezas com segurança"
      },
      {
        img: Cilindro03,
        subtitle: "Vida marinha vibrante"
      },
      {
        img: Cilindro01,
        subtitle: "Equipamento completo fornecido"
      },
      {
        img: Cilindro05,
        subtitle: "Mergulho seguro e confortável"
      },
      {
        img: Cilindro06,
        subtitle: "Explore a vida marinha"
      },
      {
        img: Cilindro07,
        subtitle: "Aventuras subaquáticas"
      },
      {
        img: Cilindro08,
        subtitle: "Experiência inesquecível"
      }
    ],
    price: "R$ 120,00"
  },
  {
    id: 2,
    name: "Mergulho livre",
    slug: "mergulho-livre",
    image: Snorkel02,
    shortDescription: "Explore os Parrachos com snorkel e águas cristalinas.",
    description: `Descubra a magia dos Parrachos de Maracajaú com um mergulho 
    livre em águas cristalinas que formam verdadeiras piscinas naturais no 
    meio do mar. Com snorkel incluso, plataforma de apoio e toda a orientação 
    necessária, você vive momentos incríveis explorando peixes, corais e toda 
    a riqueza natural do lugar.`,
    category: "Mergulho livre",
    benefits: [
      "Máscara e snorkel inclusos",
      "Plataforma de apoio no mar",
      "Ideal para todas as idades",
      "Duração: 1h30 de mergulho livre",
      "Explore a vida marinha próxima à superfície",
    ],
    policy: {
      security: "Caso o cliente não saiba nadar, é obrigatório o uso de colete ou bóias salva-vidas.",
      cancellation: `Reagendamos ou reembolsamos 100% em caso de condições climáticas adversas.
      Passeios sujeitos a condições climáticas favoráveis.`,
      weather: "",
    },
    highlights: [
      {
        color: "sky",
        text: "Catamarã homologado",
        icon: icons.boat
      },
      {
        color: "emerald",
        text: "Duração: 1h30 + deslocamento",
        icon: icons.clock
      },
      {
        color: "amber",
        text: "Local: Parrachos de Maracajaú",
        icon: icons.location
      },
    ],
    gallery: [
      {
        img: Snorkel02,
        subtitle: "Mergulho livre com snorkel"
      },
      {
        img: Snorkel01,
        subtitle: "Águas cristalinas dos Parrachos"
      },
      {
        img: Snorkel03,
        subtitle: "Explore a vida marinha"
      }
    ],
    price: "R$ 80,00"
  },
  {
    id: 3,
    name: "Passeio de catamarã",
    slug: "passeio-catamara",
    image: Cartamara01,
    shortDescription: "Uma viagem tranquila, segura e cheia de beleza natural.",
    description: `Embarque em um catamarã nativo homologado pela Marinha do Brasil,
    projetado para oferecer segurança, estabilidade e conforto para toda a família.
    Durante o trajeto até os Parrachos de Maracajaú, você aproveita o visual do
    litoral e a tranquilidade do mar aberto em uma experiência inesquecível.`,
    category: "Passeio de catamarã",
    benefits: [
      "Catamarã homologado pela Marinha",
      "Tripulação certificada e treinada",
      "Ideal para toda a família",
      "Duração: 1h30 de passeio + deslocamento",
      "Aproveite a vista do litoral durante o trajeto",
    ],
    policy: {
      security: `Embarcação homologada pela Marinha, tripulação qualificada e coletes salva-vidas disponíveis.
      Uso obrigatório de colete salva-vidas durante todo o passeio.`,
      cancellation: `Reagendamos ou reembolsamos 100% em caso de condições climáticas adversas.
      Passeios sujeitos a condições climáticas favoráveis.`,
      weather: "Passeios sujeitos a condições climáticas favoráveis",
    },
    highlights: [
      {
        color: "sky",
        text: "Catamarã homologado",
        icon: icons.boat
      },
      {
        color: "emerald",
        text: "Duração: 1h30 + deslocamento",
        icon: icons.clock
      },
      {
        color: "amber",
        text: "Local: Parrachos de Maracajaú",
        icon: icons.location
      },
    ],
    gallery: [
      {
        img: Cartamara01,
        subtitle: "Passeio de catamarã confortável"
      },
      {
        img: Cartamara02,
        subtitle: "Navegação segura e estável"
      },
      {
        img: Parrachos01,
        subtitle: "Beleza natural dos Parrachos"
      },
      {
        img: Parrachos02,
        subtitle: "Águas cristalinas"
      },
      {
        img: Parrachos03,
        subtitle: "Experiência inesquecível"
      }
    ],
    price: "R$ 80,00"
  },
  {
    id: 4,
    name: "Passeio de quadriciclo",
    slug: "passeio-quadriciclo",
    image: Quadriciclo02,
    shortDescription: "Aventura emocionante pelas trilhas de Maracajaú.",
    description: `Explore as belas paisagens naturais de Maracajaú em um passeio de
    quadriciclo. Aventura-se por trilhas emocionantes, desfrutando da liberdade
    e da adrenalina enquanto descobre cantos escondidos e vistas panorâmicas
    inesquecíveis.`,
    category: "Aventura",
    benefits: [
      "Guias experientes e treinados",
      "Equipamento de segurança fornecido",
      "Ideal para aventureiros de todas as idades",
      "Duração: 1h30 de passeio",
      "Explore trilhas naturais e paisagens incríveis",
    ],
    policy: {
      security: "Todo piloto deve ser maior de 18 anos e não pode estar sob efeito de álcool ou drogas.",
      cancellation: "O cancelamento pode ser feito até 24 horas antes do passeio.",
      weather: "",
    },
    highlights: [
      {
        color: "sky",
        text: "Instrutores experientes",
        icon: icons.boat
      },
      {
        color: "emerald",
        text: "Duração: 1h de passeio",
        icon: icons.clock
      },
      {
        color: "amber",
        text: "Local: Praia de Maracajaú",
        icon: icons.location
      },
    ],
    gallery: [
      {
        img: Quadriciclo02,
        subtitle: "Explore trilhas naturais"
      },
      {
        img: Quadriciclo03,
        subtitle: "Aventura e adrenalina"
      },
      {
        img: Quadriciclo04,
        subtitle: "Descubra paisagens incríveis"
      },
      {
        img: Quadriciclo05,
        subtitle: "Liberdade sobre quatro rodas"
      },
      {
        img: Quadriciclo08,
        subtitle: "Aventura na natureza"
      },
      {
        img: Quadriciclo09,
        subtitle: "Explore cantos escondidos"
      },
      {
        img: Quadriciclo10,
        subtitle: "Diversão garantida"
      },
      {
        img: Quadriciclo11,
        subtitle: "Experiência inesquecível"
      }
    ],
    price: "R$ 120,00"
  }
];

export const features = [
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

export const tourDetails = [
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

export const services = [
  {
    icon: Cylinder,
    title: "Mergulho com Cilindro",
    featured: true,
    description: "A experiência mais completa para explorar o fundo dos Parrachos",
    details: [
      "Acompanhamento de profissional credenciado",
      "Equipamento completo fornecido",
      "Ideal para iniciantes e experientes",
      "Disponível para maiores de 10 anos",
      "Duração: aproximadamente 30 minutos",
      "Explore profundidades que o snorkel não alcança",
    ],
    image: Cilindro01,
  },
  {
    icon: Camera,
    title: "Fotos Subaquáticas",
    description: "Registre seus melhores momentos embaixo d'água",
    details: [
      "Fotógrafo profissional experiente",
      "Câmera subaquática de alta qualidade",
      "Fotos em alta resolução",
      "Entrega digital das fotos",
      "Edição profissional incluída",
      "Capte a beleza da vida marinha",
    ],
  },
  {
    icon: Glasses,
    title: "Máscara Full Face",
    description: "Conforto e visão panorâmica durante o mergulho",
    details: [
      "Maior campo de visão",
      "Respiração natural pelo nariz e boca",
      "Ideal para quem tem dificuldade com snorkel tradicional",
      "Higienizada e desinfetada",
      "Disponível em vários tamanhos",
      "Comunicação mais fácil embaixo d'água",
    ],
  },
  {
    icon: Coffee,
    title: "Bar a Bordo",
    description: "Bebidas e petiscos durante o passeio",
    details: [
      "Bebidas geladas e quentinhas",
      "Petiscos variados",
      "Água mineral disponível",
      "Opções alcoólicas e não-alcoólicas",
      "Serviço durante a navegação",
      "Preços acessíveis",
    ],
  },
];

export const galery_data = [
  {
    img: Cilindro01,
    subtitle: "Uma esperiência inesquecível"
  },
  {
    img: Cilindro02,
    subtitle: "Explorando a vida marinha"
  },
  {
    img: Cartamara01,
    subtitle: "Passeio de catamarã confortável"
  },
  {
    img: Parrachos02,
    subtitle: "Águas cristalinas"
  },
  {
    img: Parrachos03,
    subtitle: "Experiência inesquecível"
  },
  {
    img: Snorkel01,
    subtitle: "Águas cristalinas dos Parrachos"
  },
  {
    img: Snorkel03,
    subtitle: "Explore a vida marinha"
  },
  {
    img: Quadriciclo02,
    subtitle: "Explore trilhas naturais"
  },
  {
    img: Quadriciclo05,
    subtitle: "Liberdade sobre quatro rodas"
  }
];

export const faqs = [
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
    answer: "O destino é os Parrachos Náutica, um dos principais pontos turísticos do Rio Grande do Norte. Localizados a aproximadamente 7 km da costa, em Maxaranguape, os Parrachos formam um grande aquário natural com águas cristalinas e rica biodiversidade marinha. É uma Área de Proteção Ambiental (APA) monitorada pelo IDEMA.",
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
    answer: "Os Parrachos Náutica podem ser visitados durante todo o ano. Os meses de setembro a março geralmente apresentam melhores condições de visibilidade na água. No entanto, o passeio acontece regularmente durante todo o ano, sempre respeitando as condições climáticas e de maré favoráveis.",
  },
  {
    question: "Como é a estrutura na praia de embarque?",
    answer: "A praia de Maracajaú, onde ocorre o embarque e desembarque, possui boa infraestrutura com restaurantes, banheiros, estacionamento e barracas. Recomendamos chegar com antecedência para facilitar o check-in e embarque no horário programado.",
  },
];