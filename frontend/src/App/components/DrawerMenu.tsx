import { Link as RouterLink } from 'react-router-dom';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  AccountBoxRounded,
  BallotRounded,
  GroupAdd,
  NoteAdd,
} from '@material-ui/icons';

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
          <ListItem>
            <Typography variant="h6" noWrap>
              Customers
            </Typography>
          </ListItem>
          <ListItem button component={RouterLink} to="/customers">
            <ListItemIcon>
              <AccountBoxRounded />
            </ListItemIcon>
            <ListItemText primary={'View Customers'} />
          </ListItem>
          <ListItem button component={RouterLink} to="/new-customer">
            <ListItemIcon>
              <GroupAdd />
            </ListItemIcon>
            <ListItemText primary={'Add Customer'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h6" noWrap>
              Maintenance
            </Typography>
          </ListItem>
          <ListItem button component={RouterLink} to="/reports">
            <ListItemIcon>
              <BallotRounded />
            </ListItemIcon>
            <ListItemText primary={'View Reports'} />
          </ListItem>
          <ListItem button component={RouterLink} to="/new-maintenance">
            <ListItemIcon>
              <NoteAdd />
            </ListItemIcon>
            <ListItemText primary={'New Maintenance'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
