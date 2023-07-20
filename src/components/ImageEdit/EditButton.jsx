import { useDispatch } from 'react-redux';
import ButtonDialog from '../ButtonDialog';
import EditForm from './EditForm';
import { updateOneImage } from '../../features/imageSlice';
import { useDialog } from '../../hooks/useDialog';

export default function EditButton({ image }) {
  const { open, handleClose, handleOpen } = useDialog();
  const dispatch = useDispatch();

  const updateImage = (newData) => dispatch(updateOneImage(image.id, newData));

  const buttonStyle = {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <ButtonDialog
      variant={'text'}
      buttonText={'EDIT'}
      buttonStyle={buttonStyle}
      handleOpen={handleOpen}
      open={open}
    >
      <EditForm
        handleClose={handleClose}
        image={image}
        updateImage={updateImage}
      />
    </ButtonDialog>
  );
}
