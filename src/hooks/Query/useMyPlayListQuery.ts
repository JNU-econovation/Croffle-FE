import { useQuery } from '@tanstack/react-query';
import { getMyPlayList, GetMyPlayListRes } from '../../api/music';

export const useMyPlayListQuery = () => {
  const { data: myPlayList } = useQuery<GetMyPlayListRes>({
    queryKey: ['myPlayList'],
    queryFn: getMyPlayList,
  });

  return {
    myPlayList,
  };
};
