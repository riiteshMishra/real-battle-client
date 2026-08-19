import { USER } from "../store/types";

export interface AUTH_RESPONSE {
  success: boolean;
  message: string;
  user?: USER;
  accessToken?: string;
}
