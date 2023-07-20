import { useDispatch } from 'react-redux';
import ButtonDialog from '../ButtonDialog';
import DeleteDialog from './DeleteDialog';
import { removeOneImage } from '../../features/imageSlice';
import { useDialog } from '../../hooks/useDialog';
export default function DeleteButton({ image }) {
  const dispatch = useDispatch();
  const { open, handleClose, handleOpen } = useDialog();

  const removeImage = () => dispatch(removeOneImage(image.id));

  const buttonStyle = {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <ButtonDialog
      buttonStyle={buttonStyle}
      buttonText={'DELETE'}
      handleOpen={handleOpen}
      open={open}
      variant={'text'}
    >
      <DeleteDialog handleClose={handleClose} removeImage={removeImage} />
    </ButtonDialog>
  );
}
