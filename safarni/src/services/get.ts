import { api } from "./api";

export interface GoogleAuthResponse {
  success: boolean;
  url: string;
}

export const getGoogleAuthUrl = async (): Promise<GoogleAuthResponse> => {
  const response = await api.get("/auth/google");
  return response.data;
};
