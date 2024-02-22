import { useMutation } from '@tanstack/react-query';

const uploadToS3 = async (imageUrl: string, imageFile: File) => {
  const formData = new FormData();

  formData.append('file', imageFile);

  const response = await fetch(imageUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'image/*',
    },
    body: formData,
  });

  const result = await response.json();

  return result;
};

interface Props {
  imageUrl: string;
  imageFile: File;
}

const useImageUploadToS3 = () => {
  return useMutation({
    mutationFn: ({ imageUrl, imageFile }: Props) => uploadToS3(imageUrl, imageFile),
  });
};

export default useImageUploadToS3;
