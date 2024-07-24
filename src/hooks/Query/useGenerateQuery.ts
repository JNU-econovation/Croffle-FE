import { useMutation } from '@tanstack/react-query';
import { postFormData } from '../../api/music';

export const useGenerateQuery = () => {
  const postFormDataMutation = useMutation({
    mutationKey: ['postFormData'],
    mutationFn: postFormData,
    onSuccess: () => {
      alert('음악이 성공적으로 생성되었습니다.');
    },
    onError: () => {
      alert('이미지 업로드에 실패했습니다.');
    },
  });

  const handleImageUpload = async (formData: FormData) => {
    postFormDataMutation.mutate({ formData });
  };
  return {
    postFormDataMutation,
    handleImageUpload,
  };
};
