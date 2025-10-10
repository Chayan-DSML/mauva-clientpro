export interface PurchaseInfo {
  productId: string;
  productName: string;
  price: string;
}

/**
 * Configuration for WhatsApp Business
 * Replace this with your actual WhatsApp Business number
 * Format: Country code + number (without + or spaces)
 * Example: 919876543210 for India
 */
const WHATSAPP_NUMBER = '918197697480'; // Replace with your WhatsApp Business number

/**
 * Generates a WhatsApp message for product inquiry
 */
function generateWhatsAppMessage(productInfo: PurchaseInfo): string {
  const message = `Hi! I'm interested in purchasing:

*${productInfo.productName}*
Price: ${productInfo.price}
Product ID: ${productInfo.productId}

Please provide more details about availability and delivery.`;
  
  return encodeURIComponent(message);
}

/**
 * Handles the purchase flow by redirecting to WhatsApp
 */
export function handlePurchase(productInfo: PurchaseInfo) {
  const message = generateWhatsAppMessage(productInfo);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
  
  // Log for debugging
  console.log('WhatsApp purchase initiated:', {
    product: productInfo,
    url: whatsappUrl
  });
}
