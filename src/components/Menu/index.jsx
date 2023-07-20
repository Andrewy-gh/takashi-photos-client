import { useMediaQuery } from '@mui/material/';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { theme } from '../../styles/styles';
import { navigation } from '../../data/index';

export default function Menu({ uploadNewImage }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <>
      {isMobile ? (
        <MenuMobile navigation={navigation} uploadNewImage={uploadNewImage} />
      ) : (
        <MenuDesktop navigation={navigation} uploadNewImage={uploadNewImage} />
      )}
    </>
  );
}
