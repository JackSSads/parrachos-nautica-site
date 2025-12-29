import { useState } from "react";
import { products } from "@/data/productData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {products.map((item) => (
          <div key={item.id} className="min-w-full flex justify-center p-6">
            <Link
              to={`/produto/${item.slug}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className="bg-white rounded-2xl shadow p-4 sm:p-6 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] mx-auto hover:shadow-lg transition-transform duration-300 ease-[cubic-bezier(.22,.9,.32,1)] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img loading="lazy" src={item.image} alt={item.name} className="w-full h-44 sm:h-52 md:h-64 object-cover rounded-xl" />
              <h3 className="text-[clamp(1rem,2.2vw,1.25rem)] font-bold mt-4 text-gray-800">{item.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">{item.shortDescription}</p>

              <div className="pt-5 flex justify-between items-end w-full">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">Por apenas</p>
                  <p className="text-2xl font-bold text-sky-700">{item.price}</p>
                </div>
                <p className="underline text-accent hover:scale-105 transition-all delay-75">Saiba mais</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
      >
        <ChevronRight />
      </button>
    </div>
  );
};