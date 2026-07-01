// ─── Business Info (replace placeholders before launch) ───────────────────────
export const BUSINESS_NAME = "Andymore Business Concept";
export const BUSINESS_TAGLINE = "Your one-stop shop for quality building materials and kitchen appliances in Lagos.";
export const PHONE_1 = "+2347032882655";
export const PHONE_2 = "+2349034457588";
export const WHATSAPP_NUMBER = "+2349034457588";
export const EMAIL = "andrewmaduabuchiokwara@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/andymorebusinessconcept/";
export const FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61591179934497&sk=about";
export const TIKTOK_URL = "https://www.tiktok.com/@andymorebusinessconcept";

export const ADDRESS_LINE1 = "36/75 Yakoyo Road, before Alagbole Road";
export const ADDRESS_LINE2 = "Ojodu Berger, Lagos State, Nigeria";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/YdqKGZmG7B1CpmTG8";
export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=36+Yakoyo+Road+Ojodu+Berger+Lagos&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const LAT = 6.6478;
export const LNG = 3.3583;

export const SITE_URL = "https://andymorebusiness.com"; // update when deployed

export const whatsappLink = (productName?: string) => {
  const text = productName
    ? encodeURIComponent(`Hi, I'm interested in ${productName}`)
    : encodeURIComponent("Hi, I'd like to make an enquiry");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
