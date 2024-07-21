import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useMemberQuery = () => {
  const queryClient = useQueryClient();
  const checkAccessToken = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return false;
    return true;
  };

  const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
  };
  const checkIsMember = async () => {
    const isMember = await checkAccessToken();
    return isMember;
  };

  const logOut = () => {
    removeAccessToken();
    queryClient.invalidateQueries({ queryKey: ['isMember'] });
  };

  const { data } = useQuery({
    queryKey: ['isMember'],
    queryFn: checkIsMember,
  });

  return {
    isMember: data,
    logOut,
  };
};
