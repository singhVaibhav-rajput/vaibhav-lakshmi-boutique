/**
 * Add the real business details before publishing.
 * WhatsApp number must include country code, digits only (India: 91XXXXXXXXXX).
 * Leave blank until confirmed; enquiry buttons will explain what needs configuring.
 */
export const businessConfig = {
  name: 'Vaibhav Lakshmi Boutique', // e.g. Vaibhav Lakshmi Boutique
  city: 'Baraut-250611', // e.g. Khurja, Uttar Pradesh
  locality: '',
  whatsappNumber: '918006102274', // e.g. 919876543210 — no +, spaces, or hyphens
  address: 'Nehru Road',
  openingHours: '11:00 AM – 7:00 PM',
  email: 'anitasingh31966@gmail.com',
}
  
export const isConfigured = Boolean(
  businessConfig.whatsappNumber.trim() &&
  businessConfig.whatsappNumber.replace(/\D/g, '').length >= 10,
)

export function whatsappUrl(message: string) {
  const number = businessConfig.whatsappNumber.replace(/\D/g, '')
  if (!number) return ''
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function locationLabel() {
  return [businessConfig.locality, businessConfig.city].filter(Boolean).join(', ')
}