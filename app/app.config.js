import dotenv from "dotenv";

const params = dotenv.config().parsed;

export default {
  expo: {
    name: "FrankyHome",
    slug: "franky-home",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    privacy: "unlisted",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      API_URL: params.API_URL,
    },
    android: {
      package: "com.clebiez.home",
    },
  },
};
