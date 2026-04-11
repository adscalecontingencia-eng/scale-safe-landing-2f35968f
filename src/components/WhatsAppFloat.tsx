import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/message/LT3GZH6T7PTYB1?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20conting%C3%AAncia%20da%20AD%20Scale."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloat;