import "../App.css";

import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    const navigate = useNavigate();

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" 
          onClick={
            () => {
              navigate('/');
            }
          }>
          The Anime Basket
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}

export default Copyright;