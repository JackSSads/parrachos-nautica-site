import { NavLink } from "./NavLink";
import { ArrowUp, InstagramIcon } from "lucide-react";
import { Button } from "./ui/button";
import { WhatsAppIcon } from "@/libs/icons.jsx";

export const ToTop = () => {
    return (
        <div className="z-10 fixed bottom-4 right-1 flex justify-end gap-4 pr-10">
            <NavLink
                to="https://www.instagram.com/parrachosnautica/"
                className="
                bg-gradient-to-br flex justify-center items-center
                from-[#feda75] via-[#fa7e1e]
                via-[#d62976] to-[#4f5bd5]
                text-white rounded-full h-10 w-10
                hover:opacity-90 transition"
            >
                <InstagramIcon />
            </NavLink>

            <NavLink
                to="https://wa.me/5584999959793?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos Náutica"
                className="
                bg-green-500 flex
                justify-center items-center
                text-white rounded-full
                h-10 w-10 hover:bg-white-500
                hover:text-white delay-100"
            >
                <div className=" border-2 rounded-full p-1">
                    <WhatsAppIcon />
                </div>
            </NavLink>

            <Button
                className="rounded-full bg-secondary h-10 w-10 flex justify-center items-center shadow-md text-white cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <ArrowUp />
            </Button>
        </div>
    );
};