import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(treatmentName?: string) {
  const baseUrl = "https://wa.me/5511999263636";
  if (treatmentName) {
    const text = `Olá! Gostaria de agendar uma avaliação com a Dra. Samara. Venho do site e me interessei pelo procedimento: ${treatmentName}`;
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }
  const text = "Olá! Gostaria de agendar uma avaliação com a Dra. Samara.";
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
}

