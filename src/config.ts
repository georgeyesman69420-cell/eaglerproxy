// This folder contains options for both the bridge and networking adapter.
// Environment files and .env files are available here. Set the value of any config option to process.env.<ENV name>

import { Config } from "./launcher_types.js";

export const config: Config = {
  bridge: {
    enabled: false,
    motd: null,
  },
  adapter: {
    name: "EaglerProxy",
    bindHost: "0.0.0.0",
    // CRITICAL: Render requires process.env.PORT to start correctly
    bindPort: parseInt(process.env.PORT || "8080"), 
    maxConcurrentClients: 20,
    skinUrlWhitelist: undefined,
    motd: "FORWARD", // Keeps your Aternos MOTD
    origins: {
      allowOfflineDownloads: true,
      originWhitelist: null,
      originBlacklist: null,
    },
    server: {
      // 1. CHANGE THIS to your Aternos IP (e.g., "example.aternos.me")
      host: "YOUR_SERVER_NAME.aternos.me", 
      // 2. CHANGE THIS to your Aternos Port (the 5-digit number)
      port: 46625, 
    },
    tls: undefined,
  },
};
