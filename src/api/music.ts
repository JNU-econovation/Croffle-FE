import {
  https,
  authorizationRequest,
  imageRequest,
  imageMemberRequest,
} from './https';

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
  pressed?: boolean;
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
  message: string;
  statusCode: number;
}

export interface PostFormDataReq {
  formData: FormData;
}

export interface PostFormDataRes {
  message: string;
  statusCode: number;
}

export const getPlayList = async (): Promise<GetPlayListRes> => {
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

export interface PostGenerateMusicRes {
  success: boolean;
  response: {
    musicUrl: string;
  };
  error: null;
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

export const postFormData = async ({
  formData,
}: PostFormDataReq): Promise<PostFormDataRes> => {
  const token = localStorage.getItem('accessToken');
  const request = token ? imageMemberRequest : imageRequest;
  const response = await request.post('/generate-music/image', formData);
  return response.data;
};
