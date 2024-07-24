import { useEffect } from 'react';
import { BASE_URL, memberRequest } from '../api/https';

export const useMember = () => {
  // const FRONT_URL = 'http://localhost:3000';
  const FRONT_URL = 'https://croffle-fe.vercel.app';
  const CLIENT_ID =
    '343811570389-v2c7b274ap2drc630gut75l80ivm889t.apps.googleusercontent.com';
  const REQUEST_URI = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${FRONT_URL}&response_type=code&scope=profile`;

  const handleGoogleLogin = () => {
    window.location.href = REQUEST_URI;
  };

  const getGoogleLogin = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) {
      console.error('Authorization code not found');
      return;
    }
    try {
      const res = await memberRequest.get(
        `${BASE_URL}/login/oauth2/code/google`,
        {
          params: { code },
        },
      );
      const response = res.data;
      if (response.success) {
        localStorage.setItem('accessToken', response.response.accessToken);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('code')) {
      getGoogleLogin();
    }
  }, []);

  return {
    handleGoogleLogin,
    getGoogleLogin,
  };
};
