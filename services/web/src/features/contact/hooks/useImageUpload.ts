import { kyClient } from '@linker/ky';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const postImageUpload = (imageFile: File) => {
  const formData = new FormData();

  formData.append('file', imageFile);

  const response = kyClient.post<{ imageUrl: string }>('/v1/images/upload', {
    body: formData,
  });

  return response;
};

const useImageUpload = () => {
  const [imageS3Url, setImageS3Url] = useState<string | null>(null);

  const { mutate } = useMutation({
    mutationFn: (imageFile: File) => postImageUpload(imageFile),
    onSuccess: (data) => {
      setImageS3Url(data.imageUrl);
    },
  });

  return { mutate, imageS3Url };
};

export default useImageUpload;
