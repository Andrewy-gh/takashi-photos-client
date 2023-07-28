import { useContext, useEffect, useState } from 'react';
import imageServices from '../services/image';
import NotificationContext from '../contexts/NotificationContext';

export function useImage() {
  const [images, setImages] = useState([]);
  const { setOpen, setMessage } = useContext(NotificationContext);

  const getAllImages = async () => {
    const initialImages = await imageServices.getAllImages();
    setImages(initialImages);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const uploadNewImage = async (content) => {
    const newImage = await imageServices.uploadNewImage(content);
    if (newImage.success) {
      setOpen(true);
      setMessage(newImage.message);
      setImages(images.concat(newImage.data));
    }
  };

  const updateImageDetails = async (id, content) => {
    const updatedImage = await imageServices.updateImageDetails(id, content);
    if (updatedImage.success) {
      setOpen(true);
      setMessage(updatedImage.message);
      const newImages = images.map((image) =>
        image.id === id ? updatedImage.data : image
      );
      setImages(newImages.data);
    }
  };

  const removeOneImage = async (id) => {
    const response = await imageServices.removeOneImage(id);
    if (response.status === 204) {
      setOpen(true);
      setMessage('Successfully removed image');
      const newState = images.filter((image) => image.id !== id);
      setImages(newState);
    }
  };

  const updateImageOrder = async (order) => {
    const updatedImageOrder = await imageServices.updateImageOrder(order);
    if (updatedImageOrder.success) {
      setOpen(true);
      setMessage(updatedImageOrder.message);
      setImages(updatedImageOrder.data);
    }
  };

  return {
    images,
    uploadNewImage,
    updateImageOrder,
    updateImageDetails,
    removeOneImage,
  };
}
