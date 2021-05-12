import { BrowserRouter as Router } from 'react-router-dom';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, CssBaseline } from '@material-ui/core';

// Component imports
import AppHeader from './components/AppHeader';
import DrawerMenu from './components/DrawerMenu';
import AppRouter from './components/AppRouter';

// Style definitions for M-UI
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        <AppHeader />
        <DrawerMenu />
        <main className={classes.content}>
          <Toolbar variant="dense" />
          <AppRouter />
        </main>
      </div>
    </Router>
  );
};

export default App;
