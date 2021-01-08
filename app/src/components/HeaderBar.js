import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    width: '84px',
  }
}));

function HeaderBar({onRefresh}) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Home Data
          </Typography>
        <Button startIcon={<RefreshIcon />} onClick={onRefresh}>Refresh</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
