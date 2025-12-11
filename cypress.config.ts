import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
  },
});

