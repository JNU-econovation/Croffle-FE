import { useQuery } from 'react-query';
import {
  GetPlayListRes,
  getPlayList,
  getPopularPlayList,
} from '../../api/music';

export const usePlayListQuery = () => {
  const { data: playList } = useQuery<GetPlayListRes>({
    queryKey: 'playList',
    queryFn: getPlayList,
  });

  const { data: popularPlayList } = useQuery<GetPlayListRes>({
    queryKey: 'popularPlayList',
    queryFn: getPopularPlayList,
  });

  return {
    playList,
    popularPlayList,
  };
};
