import Masonry from '@mui/lab/Masonry';
import { useSelector } from 'react-redux';
import CldImage from './CldImage';

export default function Images({ cloudName, images }) {
  // const { data } = useSelector(({ images }) => images);
  // const filter = useSelector(({ filter }) => filter);
  // const cloudName = useSelector(({ cloudName }) => cloudName);
  // const images =
  //   filter === null ? data : data.filter((image) => image.type === filter);

  return (
    <Masonry
      variant="masonry"
      columns={{ mobile: 1, tablet: 1, laptop: 2, desktop: 3 }}
      spacing={1}
      sx={{ marginInline: 'auto', paddingInline: { laptop: 2 } }}
    >
      {images.map((image) => (
        <div key={image.id}>
          <CldImage cloudName={cloudName} cloudinaryId={image.cloudinaryId} />
        </div>
      ))}
    </Masonry>
  );
}
