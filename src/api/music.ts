import { https, authorizationRequest } from './https';

export interface Music {
  musicId: number;
  musicUrl: string;
  title: string;
  like: number;
}

interface GetPlayListRes {
  music: Music[];
}
interface GetMyPlayListRes {
  name: string;
  music: Music[];
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
  const response = await https.get('/popular-playlist');
  return response.data.response.music;
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
