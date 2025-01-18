import { state } from '@/store';
const store = state();

const sendWhatsappMessage = (): string => {
  const phone = store.whatsapp.phone;
  const encodedMessage = encodeURIComponent(store.whatsapp.message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export { sendWhatsappMessage };
