import { useMediaQuery } from '@mui/material/';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { theme } from '../../styles/styles';
import { navigation } from '../../data/index';

export default function Menu({ filter, handleFilterChange, uploadNewImage }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <>
      {isMobile ? (
        <MenuMobile
          filter={filter}
          navigation={navigation}
          uploadNewImage={uploadNewImage}
          handleFilterChange={handleFilterChange}
        />
      ) : (
        <MenuDesktop
          filter={filter}
          navigation={navigation}
          uploadNewImage={uploadNewImage}
          handleFilterChange={handleFilterChange}
        />
      )}
    </>
  );
}
