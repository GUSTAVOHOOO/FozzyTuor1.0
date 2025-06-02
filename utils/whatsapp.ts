const WHATSAPP_NUMBER = '5545991481772';
const DEFAULT_MESSAGE = 'Olá! Gostaria de saber mais sobre os passeios.';

export const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}; 