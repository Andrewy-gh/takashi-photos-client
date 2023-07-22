import { useMediaQuery } from '@mui/material/';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { theme } from '../../styles/styles';
import { navigation } from '../../data/index';

export default function Menu({
  filter,
  handleFilterChange,
  handleLogout,
  loggedIn,
  token,
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <>
      {isMobile ? (
        <MenuMobile
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleLogout={handleLogout}
          loggedIn={loggedIn}
          navigation={navigation}
          token={token}
        />
      ) : (
        <MenuDesktop
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleLogout={handleLogout}
          loggedIn={loggedIn}
          navigation={navigation}
          token={token}
        />
      )}
    </>
  );
}
