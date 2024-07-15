import { PlayListDetailMember } from './PlayListDetailMember';
import { PlayListDetailGuest } from './PlayListDetailGuest';
import { useEffect, useState } from 'react';

export const PlayList = () => {
  const [isMember, setIsMember] = useState<boolean>(false);
  const checkMember = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsMember(true);
    } else {
      setIsMember(false);
    }
    console.log(isMember);
  };
  useEffect(() => {
    checkMember();
  }, []);
  return <>{isMember ? <PlayListDetailMember /> : <PlayListDetailGuest />}</>;
};
