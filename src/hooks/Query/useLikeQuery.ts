import { postMusicLike } from '../../api/music';
import { useMutation, QueryClient } from '@tanstack/react-query';

export const useLikeQuery = () => {
  const queryClient = new QueryClient();
  const useLikeMutation = useMutation({
    mutationKey: ['postMusicLike'],
    mutationFn: postMusicLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['playList'],
      });
      queryClient.invalidateQueries({
        queryKey: ['popularPlayList'],
      });
      window.location.reload();
      alert('해당 음악에 좋아요 표시를 했습니다.');
    },
    onError: () => {
      alert('이미 좋아요를 누른 음악입니다.');
    },
  });

  return {
    useLikeMutation,
  };
};
