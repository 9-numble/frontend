import { callImageUrl } from "../api/post";

const useImagePath = () => {
  const getImageUrl = async (image) => {
    const response = await callImageUrl(image);
    return response.data.imagePath;
  };

  return { getImageUrl };
};

export default useImagePath;
