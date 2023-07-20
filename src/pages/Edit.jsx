import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import DragDrop from '../components/DragDrop/index';
import { theme } from '../styles/styles';

export default function Edit({
  cloudName,
  images,
  updateImageOrder,
  updateImageDetails,
  removeOneImage,
}) {
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
        updateImageDetails={updateImageDetails}
        removeOneImage={removeOneImage}
      />
    </>
  );
}
