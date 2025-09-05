import 'dotenv/config';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: "Pirbaba_carpet_app_client",
  slug: "Pirbaba_carpet_app_client",
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
  },
};
export default config;
