// src/lib/api.ts
import axios from 'axios';
import Constants from 'expo-constants';

const baseURL =
  (Constants.expoConfig?.extra as any)?.apiUrl ??
  process.env.EXPO_PUBLIC_API_URL; // fallback

export const api = axios.create({
  baseURL,
  headers: { Accept: 'application/json' },
});
