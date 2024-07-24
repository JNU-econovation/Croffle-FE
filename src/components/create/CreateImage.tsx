import { useGenerateQuery } from '../../hooks/Query/useGenerateQuery';
import styled from 'styled-components';
import React, { useState } from 'react';
import imageUpload from '../../assets/imageUpload.svg';
import { useNavigate } from 'react-router-dom';

export const CreateImage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(new FormData());
  const { handleImageUpload } = useGenerateQuery();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    const formData = new FormData();
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        alert('사진이 성공적으로 업로드되었습니다!');
      };
      reader.readAsDataURL(image);
    }
    formData.append('image', image);
    setFormData(formData);
    navigate('/createEnd');
  };

  const addImage = () => {
    document.querySelector('input')?.click();
  };

  const submitImage = () => {
    handleImageUpload(formData);
  };

  return (
    <CreateImageContainer>
      <CreateImageInput
        type="file"
        accept="image/*"
        onChange={handleChangeInput}
      />
      <CreateInputImage
        src={imageUpload}
        alt="imageUpload"
        onClick={addImage}
      />
      <CreateImageButton onClick={submitImage}>
        사진으로 음악 생성하기
      </CreateImageButton>
    </CreateImageContainer>
  );
};

const CreateImageContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 20rem;
  margin: 2rem 0 2rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.875rem;
  border: 1px solid #e2d2fe;
  background: #fff;
  box-shadow: -2px 5px 13px 2px rgba(0, 0, 0, 0.25);
`;

const CreateImageInput = styled.input`
  display: none;s
`;

const CreateInputImage = styled.img`
  width: 5rem;
  height: 5rem;
  src: url(${imageUpload});
  cursor: pointer;
`;

const CreateImageButton = styled.button`
  border: none;
  background: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 2rem;
  color: #000;
  letter-spacing: 0.125rem;
  text-transform: capitalize;
  border-radius: 0.875rem;
`;
