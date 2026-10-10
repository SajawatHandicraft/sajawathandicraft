// Sajawat Handicraft website settings
// Add your business WhatsApp number when ready: country code + number, digits only.
// India example format: 919876543210 (do not include +, spaces or dashes).
const BUSINESS_WHATSAPP_NUMBER = "";

document.getElementById("year")?.replaceChildren(String(new Date().getFullYear()));

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle?.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
navMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("inquiryForm");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const messageEl = document.getElementById("formMessage");
  const fields = {
    name: document.getElementById("customerName").value.trim(),
    phone: document.getElementById("customerPhone").value.trim(),
    product: document.getElementById("productType").value,
    quantity: document.getElementById("quantity").value.trim(),
    requirements: document.getElementById("requirements").value.trim()
  };
  const message = [
    "Hello Sajawat Handicraft, I would like to request a quote.",
    "Name / Business: " + fields.name,
    "Contact number: " + fields.phone,
    "Product: " + fields.product,
    "Quantity: " + fields.quantity,
    "Requirements: " + (fields.requirements || "Not specified")
  ].join("\n");

  if (!BUSINESS_WHATSAPP_NUMBER) {
    messageEl.textContent = "Your inquiry is ready, but WhatsApp is not connected yet. Open script.js and add your business number to BUSINESS_WHATSAPP_NUMBER.";
    const preview = document.getElementById("messagePreview");
    if (preview) preview.remove();
    const box = document.createElement("textarea");
    box.id = "messagePreview";
    box.readOnly = true;
    box.rows = 7;
    box.value = message;
    box.setAttribute("aria-label", "Copy your prepared inquiry");
    messageEl.after(box);
    box.focus();
    box.select();
    return;
  }
  const digits = BUSINESS_WHATSAPP_NUMBER.replace(/\D/g, "");
  if (digits.length < 10) {
    messageEl.textContent = "Please check the WhatsApp number in script.js. Use country code and digits only.";
    return;
  }
  window.open("https://wa.me/" + digits + "?text=" + encodeURIComponent(message), "_blank", "noopener");
  messageEl.textContent = "WhatsApp opened with your inquiry. Please review and send the message.";
});