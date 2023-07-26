import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Default from '../../assets/default.avif';
import { renderLink } from '../../utils/navigation';
import { theme } from '../../styles/styles';

const activeStyle = {
  color: theme.palette.custom.main,
};

const inActiveStyle = {
  color: theme.palette.custom.light,
};

const flexColumns = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sticky = {
  position: 'sticky',
  top: theme.spacing(2),
};

const typographyStyle = {
  lineHeight: '1.6',
  fontFamily: 'Quando',
  marginBottom: theme.spacing(1),
  cursor: 'pointer',
};

export default function MenuDesktop({
  filter,
  handleFilterChange,
  handleLogout,
  loggedIn,
  navigation,
  token,
}) {
  return (
    <Container sx={sticky}>
      <div style={{ ...flexColumns, padding: theme.spacing(6) }}>
        <Link to="/">
          <div
            style={{ minWidth: 200 }}
            onClick={() => handleFilterChange(null)}
          >
            <img src={Default} alt="logo" />
          </div>
        </Link>
        <div style={flexColumns}>
          {navigation.map((nav) =>
            nav.type === 'filter' ? (
              <Typography
                key={nav.id}
                variant="h6"
                sx={{
                  ...typographyStyle,
                  ...(filter === nav.filter ? activeStyle : inActiveStyle),
                }}
                onClick={() => handleFilterChange(nav.filter)}
              >
                {nav.name}
              </Typography>
            ) : renderLink(nav, loggedIn, token) ? (
              <Link to={nav.path} key={nav.id}>
                <Typography variant="h6" sx={typographyStyle}>
                  {nav.name}
                </Typography>
              </Link>
            ) : null
          )}
          {loggedIn && token && (
            <Typography
              variant="h6"
              sx={typographyStyle}
              onClick={handleLogout}
            >
              Logout
            </Typography>
          )}
        </div>
      </div>
    </Container>
  );
}
