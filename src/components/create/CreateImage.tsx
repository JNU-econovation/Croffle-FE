import { useGenerateQuery } from '../../hooks/Query/useGenerateQuery';
import styled from 'styled-components';
import React, { useState } from 'react';

export const CreateImage = () => {
  const [formData, setFormData] = useState<FormData>(new FormData());
  const { handleImageUpload } = useGenerateQuery();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    const formData = new FormData();
    formData.append('image', image);
    setFormData(formData);
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
      <CreateImageButton onClick={submitImage}>이미지 업로드</CreateImageButton>
    </CreateImageContainer>
  );
};

const CreateImageContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 30rem;
  margin: 2rem 0 2rem 2rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.875rem;
  border: 1px solid #e2d2fe;
  background: #fff;
  box-shadow: -2px 5px 13px 2px rgba(0, 0, 0, 0.25);
`;

const CreateImageInput = styled.input`
  display: block;
`;

const CreateImageButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin-top: 1rem;
  border: none;
  border-radius: 1.25rem;
  cursor: pointer;
`;
