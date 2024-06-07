import { https, aiRequest } from './https';

export interface Music {
  musicId: number;
  musicUrl: string;
  title: string;
}

interface GetPlayListRes {
  music: Music[];
}

export const getPlayList = async (): Promise<GetPlayListRes> => {
  const response = await https.get('/playlist');
  return response.data;
};

export interface PostGenerateMusicReq {
  prompt: string;
}

interface PostGenerateMusicRes {
  musicUrl: string;
}

export const postGenerateMusic = async ({
  prompt,
}: PostGenerateMusicReq): Promise<PostGenerateMusicRes> => {
  const response = await aiRequest.post('/generate-music', { prompt });
  return response.data;
};
