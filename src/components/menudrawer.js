import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar } from '@material-ui/core';
import NestedList from './testdrawer';

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
        color: theme.palette.secondary.light,
        overflow: "hidden",
    },
    drawerContainer: {
        width: 200,
        overflow: 'hidden',
    },
    drawerIcon: {
        color: theme.palette.secondary.light,
    },
    drawerListItems: {
        fontStyle: 'oblique',
        fontSize: '10',
        color: theme.palette.secondary.main,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
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
          <NestedList />
        </div>
      </Drawer>
    </div>
  );
}