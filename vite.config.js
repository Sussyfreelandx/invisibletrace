import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Railway (and most PaaS providers) inject the port to listen on via the
// PORT environment variable. Bind to 0.0.0.0 so the container is reachable.
const port = process.env.PORT ? Number(process.env.PORT) : 5173;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port
  },
  preview: {
    host: true,
    port,
    // Allow Railway's generated *.up.railway.app domains (and any custom
    // domain) to access the preview server.
    allowedHosts: true
  }
});