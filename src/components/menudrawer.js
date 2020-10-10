import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { NavLink } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import EcoIcon from '@material-ui/icons/Eco';
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
        color: theme.palette.secondary.main,
    }
}));

export default function MenuDrawer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paperAnchorLeft: classes.drawerBackground,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List className={classes.drawerListItems}>
            <NavLink className={classes.drawerListItems} to="/home">
              <ListItem button>
                <ListItemIcon><PersonIcon className={classes.drawerIcon}/></ListItemIcon>
                <ListItemText> designers</ListItemText>
              </ListItem>
            </NavLink>
              <Divider />
            <NavLink className={classes.drawerListItems} to="/rafconsumed">
              <ListItem button>
                  <ListItemIcon><EcoIcon className={classes.drawerIcon}/></ListItemIcon>
                  <ListItemText> seasons</ListItemText>
              </ListItem>
            </NavLink>
              <Divider />
              <ListItem button>
                <ListItemIcon><PhotoLibraryIcon className={classes.drawerIcon}/></ListItemIcon>
                <ListItemText> gallery</ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><InfoIcon className={classes.drawerIcon}/></ListItemIcon>
                <ListItemText> about</ListItemText>
              </ListItem>
              <Divider />
          </List>
        </div>
      </Drawer>
    </div>
  );
}