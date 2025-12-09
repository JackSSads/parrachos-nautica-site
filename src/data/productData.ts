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

import Cartamara from "@/assets/catamaran.jpg";

import Snorkel01 from "@/assets/snorkel01.jpg";
import Snorkel02 from "@/assets/snorkel02.jpg";
import Snorkel03 from "@/assets/snorkel03.jpg";

import Cilindro01 from "@/assets/cilindro01.jpg"
import Cilindro02 from "@/assets/cilindro02.jpg"
import Cilindro03 from "@/assets/cilindro03.jpg"
import Cilindro04 from "@/assets/cilindro04Casal.jpg"
import Cilindro05 from "@/assets/cilindro05.jpg"
import Cilindro06 from "@/assets/cilindro06.jpg"
import Cilindro07 from "@/assets/cilindro07.jpg"
import Cilindro08 from "@/assets/cilindro08.jpg"

import Quadriciclo01 from "@/assets/quadriciclho01.png";

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
    image: Cartamara,
    shortDescription: "Uma viagem tranquila, segura e cheia de beleza natural.",
    description: `Embarque em um catamarã nativo homologado pela Marinha do Brasil,
    projetado para oferecer segurança, estabilidade e conforto para toda a família.
    Durante o trajeto até os Parrachos de Maracajaú, você aproveita o visual do
    litoral e a tranquilidade do mar aberto em uma experiência inesquecível.`,
    gallery: [
      {
        img: Cartamara,
        subtitle: "Passeio de catamarã confortável"
      }
    ],
    price: "R$ 80,00"
  },
  {
    id: 4,
    name: "Passeio de quadriciclo",
    slug: "passeio-quadriciclo",
    image: Quadriciclo01,
    shortDescription: "Aventura emocionante pelas trilhas de Maracajaú.",
    description: `Explore as belas paisagens naturais de Maracajaú em um passeio de
    quadriciclo. Aventura-se por trilhas emocionantes, desfrutando da liberdade
    e da adrenalina enquanto descobre cantos escondidos e vistas panorâmicas
    inesquecíveis.`,
    gallery: [
      {
        img: Quadriciclo01,
        subtitle: "Passeio de quadriciclo emocionante"
      }
    ],
    price: "R$ 100,00"
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
    img: Cilindro03,
    subtitle: "Beleza subaquática"
  },
  {
    img: Cilindro04,
    subtitle: "Seu parceiro de aventuras"
  },
  {
    img: Cilindro05,
    subtitle: "Momentos inesquecíveis"
  },
  {
    img: Cilindro06,
    subtitle: "Aventuras subaquáticas"
  },
  {
    img: Cilindro07,
    subtitle: "Mergulho com cilindro: segurança e diversão"
  },
  {
    img: Cilindro08,
    subtitle: "Explorando as profundezas com segurança"
  }
];