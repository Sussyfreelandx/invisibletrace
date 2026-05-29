# WEBSITEPROJECT1

Invisible Trace Tech is a React 19 + Vite website for cybersecurity and recovery services.

## Getting started

```bash
npm install
npm run dev
npm run build
```

## Deploying on Railway

This app is configured to deploy on [Railway](https://railway.app) out of the box
(see `railway.json`):

1. Create a new Railway project from this repository.
2. Railway builds the site with `npm run build` and serves the built `dist/`
   output with `npm run start` (`vite preview`), binding to the `PORT` Railway
   provides. Railway hosts (`*.up.railway.app`) and custom domains are allowed.
3. (Optional) Add the `VITE_*` environment variables below under the service's
   **Variables** tab so the contact form delivery channels are configured. Note
   that `VITE_*` values are bundled into the client at build time, so set them
   before deploying.

## Contact form delivery channels

The contact form can deliver leads through several channels, configured via
environment variables (copy `.env.example` to `.env`):

- **Email (EmailJS):** set `VITE_EMAILJS_*` for direct email delivery.
- **Telegram:** set `VITE_TELEGRAM_BOT_TOKEN` and `VITE_TELEGRAM_CHAT_ID` to push
  submissions to a Telegram chat via the Bot API. `VITE_TELEGRAM_CONTACT_URL`
  sets the public link for the "Telegram Chat" button.
- **WhatsApp:** the "Send via WhatsApp" button opens a prefilled chat using
  `VITE_WHATSAPP_NUMBER` (digits only, including country code).

When no Telegram/EmailJS channel is configured, the form falls back to opening a
pre-filled email to invisibletracetech@gmail.com.

> Note: Vite `VITE_*` variables are bundled into the client. Use a bot and number
> dedicated to receiving public contact leads.
