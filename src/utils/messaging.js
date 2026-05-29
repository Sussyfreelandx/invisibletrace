// Shared messaging helpers for delivering contact-form leads through
// multiple channels (Telegram Bot API and WhatsApp deep links).
//
// These run entirely in the browser, so any configured tokens are exposed to
// the client. Use a bot/number dedicated to receiving public contact leads.

const DEFAULT_WHATSAPP_NUMBER = '17134281255';

/**
 * Build a human-readable plain-text summary of a contact submission.
 * @param {{name?: string, email?: string, phone?: string, service?: string, urgency?: string, message?: string}} formData
 * @returns {string}
 */
export const formatLeadMessage = (formData) => {
  const {
    name = '',
    email = '',
    phone = '',
    service = '',
    urgency = '',
    message = '',
  } = formData || {};

  return [
    'New consultation request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Service: ${service}`,
    `Urgency: ${urgency}`,
    '',
    'Message:',
    message,
  ].join('\n');
};

/**
 * Whether Telegram delivery is configured via Vite env vars.
 * @returns {boolean}
 */
export const isTelegramConfigured = () =>
  Boolean(
    import.meta.env.VITE_TELEGRAM_BOT_TOKEN &&
      import.meta.env.VITE_TELEGRAM_CHAT_ID,
  );

/**
 * Send a contact submission to a Telegram chat via the Bot API.
 * Throws if the request fails so callers can fall back to other channels.
 * @param {object} formData
 * @returns {Promise<void>}
 */
export const sendTelegramMessage = async (formData) => {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Telegram is not configured');
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadMessage(formData),
        disable_web_page_preview: true,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Telegram request failed with status ${response.status}`);
  }
};

/**
 * Build a wa.me deep link that opens WhatsApp with a prefilled lead message.
 * @param {object} formData
 * @returns {string}
 */
export const buildWhatsAppUrl = (formData) => {
  const number = (
    import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER
  ).replace(/[^0-9]/g, '');

  return `https://wa.me/${number}?text=${encodeURIComponent(
    formatLeadMessage(formData),
  )}`;
};
