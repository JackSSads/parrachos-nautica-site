export const icons = {
    boat: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 13c3 1.5 6 2 9 2s6-.5 9-2v4H3v-4z"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 13l1.5-4h15L21 13"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    clock: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 7v5l3 1"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="9"
                stroke="currentColor" strokeWidth="1.2"></circle>
        </svg>
    ),

    location: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 11a3 3 0 100-6 3 3 0 000 6z"
                stroke="currentColor" strokeWidth="1.2" />
            <path d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
                stroke="currentColor" strokeWidth="1.2" />
        </svg>
    ),
};

export const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.01 3C9.38 3 4 8.38 4 15c0 2.64.86 5.08 2.32 7.05L5 29l7.12-1.87A11.9 11.9 0 0 0 16 27c6.63 0 12-5.38 12-12S22.63 3 16.01 3zm6.98 17.05c-.3.85-1.48 1.56-2.38 1.75-.62.13-1.44.24-4.17-.9-3.5-1.45-5.77-5-5.95-5.24-.17-.23-1.42-1.9-1.42-3.63s.9-2.58 1.22-2.94c.3-.34.68-.43 1-.43h.73c.24 0 .56-.09.87.66.3.74 1.05 2.58 1.14 2.77.1.2.17.43.04.7-.13.28-.2.45-.4.7-.2.24-.42.54-.6.73-.2.2-.4.43-.17.85.24.43 1.08 1.78 2.32 2.88 1.6 1.43 2.95 1.87 3.38 2.08.43.2.68.17.94-.1.26-.27 1.08-1.26 1.36-1.7.28-.43.56-.36.94-.2.38.16 2.38 1.13 2.78 1.33.4.2.66.3.76.47.1.17.1.98-.2 1.83z" />
    </svg>
);
