import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import DragDrop from '../components/DragDrop/index';
import { updateImageOrder } from '../features/imageSlice';
import { theme } from '../styles/styles';

import DragItem from '../components/DragDrop/DragItem';

export default function Edit({ cloudName, images, updateImageOrder }) {
  // const dispatch = useDispatch();

  // const { data } = useSelector(({ images }) => images);

  // const updateOrder = (images) => {
  //   dispatch(updateImageOrder(images));
  // };

  if (!images.length) return <p>Loading...</p>;

  return (
    <>
      <Link to="/">
        <IconButton style={{ placeSelf: 'start start' }}>
          <HomeIcon
            fontSize="large"
            sx={{ color: theme.palette.custom.light }}
          />
        </IconButton>
      </Link>
      <DragDrop
        cloudName={cloudName}
        images={images}
        updateImageOrder={updateImageOrder}
      />
    </>
  );
}
