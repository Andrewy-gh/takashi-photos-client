import { useEffect, useState } from 'react';
import imageService from '../services/image';

export function useImage() {
  const [images, setImages] = useState([]);

  const getAllImages = async () => {
    const initialImages = await imageService.getAllImages();
    setImages(initialImages);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const uploadNewImage = async (content) => {
    const newImage = await imageService.uploadNewImage(content);
    setImages(images.concat(newImage));
  };

  const removeOneImage = async (id) => {
    await imageService.removeOneImage(id);
    const newState = images.filter((image) => image.id !== id);
    setImages(newState);
  };

  const updateImageOrder = async (order) => {
    const updatedImageOrder = await imageService.updateImageOrder(order);
    setImages(updatedImageOrder);
  };

  return {
    images,
    updateImageOrder,
    uploadNewImage,
    removeOneImage,
  };
}
