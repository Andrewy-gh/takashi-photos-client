import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material/';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { filterImages } from '../../features/filterSlice';
import { theme } from '../../styles/styles';
import navigation from '../../data/navigation';

export default function Menu() {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  const setImageFilter = (filter) => {
    dispatch(filterImages(filter));
  };

  return (
    <>
      {isMobile ? (
        <MenuMobile
          filter={filter}
          navigation={navigation}
          setImageFilter={setImageFilter}
        />
      ) : (
        <MenuDesktop
          filter={filter}
          navigation={navigation}
          setImageFilter={setImageFilter}
        />
      )}
    </>
  );
}
