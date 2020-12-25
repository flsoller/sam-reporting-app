import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// M-UI imports
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Style definitions for M-UI
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
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={RouterLink} to="/">
            Input Screen
          </Button>
          <Button color="inherit" component={RouterLink} to="/report">
            Report Screen
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
