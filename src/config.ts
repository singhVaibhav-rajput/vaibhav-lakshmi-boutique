/**
 * Add the real business details before publishing.
 * WhatsApp number must include country code, digits only (India: 91XXXXXXXXXX).
 * Leave blank until confirmed; enquiry buttons will explain what needs configuring.
 */
export const businessConfig = {
  name: 'Vaibhav Lakshmi Boutique', // e.g. Vaibhav Lakshmi Boutique
  city: 'Baraut-250611', // e.g. Khurja, Uttar Pradesh
  locality: "https://www.google.com/maps/place/19%2F145,+Nehru+Road,+Baraut,+Uttar+Pradesh+250611/@29.0987294,77.2658027,624m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390c4bed72465315:0xb0f7ee6333bb61e1!8m2!3d29.0987294!4d77.2658027!16s%2Fg%2F11f5qpvby0?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
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