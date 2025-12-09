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
              className="bg-white rounded-2xl shadow p-6 max-w-md w-full hover:shadow-lg transition"
            >
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-xl" />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.shortDescription}</p>
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