import React from 'react';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar, List, Typography, Divider } from '@material-ui/core';

const drawerWidth = 220;

// Style definitions for M-UI
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const DrawerMenu = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <Typography variant="h5" noWrap>
            Customers
          </Typography>
        </List>
        <Divider />
        <List>
          <Typography variant="h5" noWrap>
            Maintenance
          </Typography>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
