import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// M-UI imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Style definitions for M-UI
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {/* ToDo: Display active route */}
          SAM App: Current Route
        </Typography>
        {/* <Button color="inherit" component={RouterLink} to="/">
            Input Screen
          </Button>
          <Button color="inherit" component={RouterLink} to="/report">
            Report Screen
          </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
