import { useEffect, useState } from 'react';
import imageServices from '../services/image';

export function useImage() {
  const [images, setImages] = useState([]);

  const getAllImages = async () => {
    const initialImages = await imageServices.getAllImages();
    setImages(initialImages);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const uploadNewImage = async (content) => {
    const newImage = await imageServices.uploadNewImage(content);
    setImages(images.concat(newImage.images));
  };

  const updateImageDetails = async (id, content) => {
    const updatedImage = await imageServices.updateImageDetails(id, content);
    const newImages = images.map((image) =>
      image.id === id ? updatedImage : image
    );
    setImages(newImages);
  };

  const removeOneImage = async (id) => {
    await imageServices.removeOneImage(id);
    const newState = images.filter((image) => image.id !== id);
    setImages(newState);
  };

  const updateImageOrder = async (order) => {
    const updatedImageOrder = await imageServices.updateImageOrder(order);
    setImages(updatedImageOrder);
  };

  return {
    images,
    uploadNewImage,
    updateImageOrder,
    updateImageDetails,
    removeOneImage,
  };
}
