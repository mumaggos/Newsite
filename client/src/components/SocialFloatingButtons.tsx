import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function SocialFloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Renderizar apenas após o LCP e interação inicial (ou 3s)
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setIsVisible(true));
      } else {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://t.me/ludban_lbd"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-[#3b82f6] shadow-lg flex items-center justify-center text-white font-bold text-xl hover:shadow-xl transition-all duration-300 group animate-in fade-in duration-500"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-4 bg-card border border-border px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Join Telegram
      </span>
    </a>
  );
}
