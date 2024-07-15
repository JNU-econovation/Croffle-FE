export interface GoogleLoginRes {
  success: boolean;
  response: {
    accessToken: string;
  };
  error: null;
}

export interface Token {
  accessToken: string;
}
