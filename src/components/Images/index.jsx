import Masonry from '@mui/lab/Masonry';
import CldImage from './CldImage';

export default function Images({ cloudName, images }) {
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
