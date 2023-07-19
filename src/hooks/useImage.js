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
  }, []); // This useEffect will run only once on the initial render

  const handleRemoveImage = async (id) => {
    await imageService.removeOneImage(id);
    const newState = images.filter((image) => image.id !== id);
    setImages(newState);
  };

  return { images, handleRemoveImage };
}
