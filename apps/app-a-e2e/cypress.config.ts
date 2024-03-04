import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run app-a:serve',
        production: 'nx run app-a:preview',
      },
      ciWebServerCommand: 'nx run app-a:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
