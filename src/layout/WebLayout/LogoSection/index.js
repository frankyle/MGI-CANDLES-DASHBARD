import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
// import config from 'config';
import WebLogo from 'ui-component/WebLogo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN WebLOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={"/"}>
      <WebLogo />
    </ButtonBase>
  );
};

export default LogoSection;
