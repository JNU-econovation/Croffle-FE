import { postMusicLike } from '../../api/music';
import { useMutation } from '@tanstack/react-query';

export const useLikeQuery = () => {
  const useLikeMutation = useMutation({
    mutationKey: ['postMusicLike'],
    mutationFn: postMusicLike,
    onSuccess: () => {
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
