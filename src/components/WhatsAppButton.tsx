import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [whatsappLink, setWhatsappLink] = useState<string>("#");
  useEffect(() => {
    const isMobile = /iPhone|Android/i.test(navigator.userAgent);
    const phoneNumber = "573108425208";
    const message = "Hola, estoy interesado en sus servicios.";
    const link = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`;

    setWhatsappLink(link);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 max-sm:bottom-5 max-sm:right-4"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.8 11.8 0 001.73 6.1L0 24l6.27-1.64A11.8 11.8 0 0012 24c6.63 0 12-5.37 12-12a11.8 11.8 0 00-3.48-8.52zM12 22a9.8 9.8 0 01-5.26-1.52l-.38-.24-3.72.97.99-3.63-.25-.38A9.81 9.81 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.17-7.64c-.28-.14-1.64-.8-1.89-.9s-.44-.14-.63.14-.72.9-.88 1.09-.33.21-.61.07a7.9 7.9 0 01-2.34-1.44 8.76 8.76 0 01-1.62-2.01c-.17-.29-.02-.45.13-.6.14-.15.32-.39.47-.58.16-.2.21-.34.32-.56s.05-.42-.07-.6-.63-1.53-.86-2.1c-.22-.53-.45-.45-.63-.46H8c-.2 0-.5.07-.76.35a3.17 3.17 0 00-.99 2.34c0 1.38 1 2.71 1.14 2.9.14.19 2.04 3.1 4.96 4.35a16.9 16.9 0 001.65.61c.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.33.23-.65.23-1.2.16-1.33-.07-.14-.25-.21-.53-.36z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
