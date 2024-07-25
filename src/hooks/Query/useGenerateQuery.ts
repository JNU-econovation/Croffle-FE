import { useMutation } from '@tanstack/react-query';
import { postFormData } from '../../api/music';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGenerate } from '../useGenerate';

export const useGenerateQuery = () => {
  const navigate = useNavigate();
  const { generateMusic } = useGenerate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postFormDataMutation = useMutation({
    mutationKey: ['postFormData'],
    mutationFn: postFormData,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      setIsLoading(false);
      alert('음악이 성공적으로 생성되었습니다.');
      navigate('/createEnd');
    },
    onError: () => {
      setIsLoading(false);
      alert('이미지 업로드에 실패했습니다.');
    },
  });

  const generateMusicMutate = useMutation({
    mutationKey: ['generateMusic'],
    mutationFn: generateMusic,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      setIsLoading(false);
      alert('음악이 성공적으로 생성되었습니다.');
      navigate('/createEnd');
    },
    onError: () => {
      setIsLoading(false);
      alert('음악 생성에 실패했습니다.');
    },
  });

  const generateMemberMusicMutate = useMutation({
    mutationKey: ['generateMemberMusic'],
    mutationFn: generateMusic,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      setIsLoading(false);
      alert('음악이 성공적으로 생성되었습니다.');
      navigate('/createEnd');
    },
    onError: () => {
      setIsLoading(false);
      alert('음악 생성에 실패했습니다.');
    },
  });

  const handleImageUpload = async (formData: FormData) => {
    postFormDataMutation.mutate({ formData });
  };
  return {
    postFormDataMutation,
    handleImageUpload,
    generateMusicMutate,
    generateMemberMusicMutate,
    isLoading,
  };
};
