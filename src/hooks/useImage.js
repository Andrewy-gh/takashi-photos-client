import { useContext, useEffect, useState } from 'react';
import imageServices from '../services/image';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';

export function useImage() {
  const [images, setImages] = useState([]);
  const { setOpen, setMessage } = useContext(NotificationContext);
  const { handleLogout } = useContext(AuthContext);

  const getAllImages = async () => {
    const initialImages = await imageServices.getAllImages();
    setImages(initialImages);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const uploadNewImage = async (content) => {
    try {
      const newImage = await imageServices.uploadNewImage(content);
      if (newImage.success) {
        setOpen(true);
        setMessage(newImage.message);
        setImages(images.concat(newImage.data));
      }
    } catch (error) {
      if (error === 'token expired') {
        handleLogout();
      }
      console.error(error);
    }
  };

  const updateImageDetails = async (id, content) => {
    try {
      const updatedImage = await imageServices.updateImageDetails(id, content);
      if (updatedImage.success) {
        setOpen(true);
        setMessage(updatedImage.message);
        const newImages = images.map((image) =>
          image.id === id ? updatedImage.data : image
        );
        setImages(newImages.data);
      }
    } catch (error) {
      if (error === 'token expired') {
        handleLogout();
      }
      console.error(error);
    }
  };

  const removeOneImage = async (id) => {
    try {
      const response = await imageServices.removeOneImage(id);
      if (response.status === 204) {
        setOpen(true);
        setMessage('Successfully removed image');
        const newState = images.filter((image) => image.id !== id);
        setImages(newState);
      }
    } catch (error) {
      if (error === 'token expired') {
        handleLogout();
      }
      console.error(error);
    }
  };

  const updateImageOrder = async (order) => {
    try {
      const updatedImageOrder = await imageServices.updateImageOrder(order);
      if (updatedImageOrder.success) {
        setOpen(true);
        setMessage(updatedImageOrder.message);
        setImages(updatedImageOrder.data);
      }
    } catch (error) {
      if (error === 'token expired') {
        handleLogout();
      }
      console.error(error);
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
