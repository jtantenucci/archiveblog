import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import EcoIcon from '@material-ui/icons/Eco';
import ListItemLink from '@material-ui/core/Link'
import ListItemText from '@material-ui/core/Link';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import grey from '@material-ui/core/colors/grey'


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerBackground: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.dark,
        color: grey[100],
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerIcon: {
        color: grey[100],
    },
    drawerListItems: {
        fontStyle: 'oblique',
        fontSize: '10',
    }
}));

export default function ListRouter() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.drawerContainer}>
        <Paper elevation={0}>
          <List aria-label="main paths">
            <Link to="/testing">
                <ListItemLink to="/testing" component={RouterLink} primary="Designers" icon={<PersonIcon />} />
                <ListItemText> designers</ListItemText>
            </Link>
            <Link to="/home">
                <ListItemLink to="/home" component={RouterLink} primary="Seasons" icon={<EcoIcon/>} />
            </Link>
            <Link to="/testing">
                <ListItemLink to="/testing" component={RouterLink} primary="Gallery" icon={<PhotoLibraryIcon />} />
            </Link>
            <Link to="/home">
                <ListItemLink to="/home" component={RouterLink} primary="About" icon={<InfoIcon/>} />
            </Link>
          </List>
          <Divider />
        </Paper>
      </div>
    </Router>
  );
}