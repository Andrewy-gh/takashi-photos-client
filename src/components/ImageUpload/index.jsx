import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonDialog from '../ButtonDialog';
import Preview from './Preview';
import UploadForm from './UploadForm';

import { uploadNewImage } from '../../features/imageSlice';

export default function ImageUpload({ uploadNewImage }) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const clearImages = () => {
    setImages([]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImages([]);
  };

  const submitImageData = (data) => {
    const formData = new FormData();
    for (const image of images) {
      formData.append('file', image.data);
    }
    formData.append('title', data.title);
    formData.append('type', data.type);
    uploadNewImage(formData);
    // dispatch(uploadNewImage(formData));
    setImages([]);
  };

  const previewImages = (images) => {
    setImages(images);
  };

  const removeImage = (id) =>
    setImages(images.filter((image) => image.id !== id));

  return (
    <ButtonDialog
      buttonText={'Image Upload'}
      handleClose={handleClose}
      handleOpen={handleOpen}
      open={open}
    >
      <UploadForm
        clearImages={clearImages}
        handleClose={handleClose}
        previewImages={previewImages}
        submitImageData={submitImageData}
      />
      {images.length > 0 && (
        <Preview images={images} removeImage={removeImage} />
      )}
    </ButtonDialog>
  );
}
