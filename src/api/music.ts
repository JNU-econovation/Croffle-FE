import { https, authorizationRequest } from './https';

export interface Music {
  musicId: number;
  musicUrl: string;
  title: string;
  like: number;
}

export interface GetPlayListRes {
  musicId: number;
  musicUrl: string;
  title: string;
  like: number;
  pressed: boolean;
}
export interface GetMyPlayListRes {
  name: string;
  musicId: number;
  musicUrl: string;
  title: string;
  like: number;
}

export interface PostMusicLikeReq {
  musicId: number;
}
export interface PostMusicLikeRes {
  success: false;
  response: null;
  error: {
    message: string;
    statusCode: number;
  };
}

export const getPlayList = async (): Promise<Music> => {
  const response = await https.get('/playlist');
  return response.data.response.music;
};

export const getMyPlayList = async (): Promise<GetMyPlayListRes> => {
  const response = await authorizationRequest.get('/myplaylist');
  return response.data.response.music;
};

export const getPopularPlayList = async (): Promise<GetPlayListRes> => {
  const token = localStorage.getItem('accessToken'); // 예시로 localStorage에서 토큰을 가져오는 경우
  const request = token ? authorizationRequest : https;
  const response = await request.get('/popular-playlist');
  return response.data.response.music;
};

export const postMusicLike = async ({
  musicId,
}: PostMusicLikeReq): Promise<PostMusicLikeRes> => {
  const response = await authorizationRequest.post(`/music/${musicId}/like`, {
    musicId,
  });
  return response.data;
};

export interface PostGenerateMusicReq {
  prompt1: string;
  prompt2: string;
}

interface PostGenerateMusicRes {
  musicUrl: string;
}

export const postGenerateMusic = async ({
  prompt1,
  prompt2,
}: PostGenerateMusicReq): Promise<PostGenerateMusicRes> => {
  const response = await https.post('/generate-music', { prompt1, prompt2 });
  return response.data;
};

export const postMemberGenerateMusic = async ({
  prompt1,
  prompt2,
}: PostGenerateMusicReq): Promise<PostGenerateMusicRes> => {
  const response = await authorizationRequest.post('/generate-music', {
    prompt1,
    prompt2,
  });
  return response.data;
};
