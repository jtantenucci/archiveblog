import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MemoryRouter as Router, withRouter } from 'react-router';
import RafMenu from './menu/rafmenu';
import HelmutMenu from './menu/helmutmenu';
import TakahiroMenu from './menu/takahiromenu';
import { Collapse, Drawer, List, ListItem, ListItemIcon, Paper, Toolbar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import EcoIcon from '@material-ui/icons/Eco';
import ListItemText from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  drawerBackground: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
  },
  drawerIcon: {
    
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  drawerContainer: {
    width: drawerWidth,
    overflow: 'hidden',
  },
  drawerListItems: {
    fontStyle: 'oblique',
    fontSize: '10',
    color: theme.palette.secondary.main,
  },
  menuRoot: {
    width: '100%',
    maxWidth: drawerWidth,
  },
}));

const DrawerRouter = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const itemsList = [
    {
      text: "home",
      icon: <HomeIcon />,
      open: false,
      onClick: () => history.push('/')
    },
    {
      text: "designers",
      icon: <PersonIcon />,
      open: false,
      expandable: true,
      onClick: () => setOpen(!open),
    },
    {
      text: "seasons",
      icon: <EcoIcon />,
      open: false,
      onClick: () => history.push('/seasons')
    },
    {
      text: "gallery",
      icon: <PhotoLibraryIcon />,
      open: false,
      onClick: () => history.push('/gallery')
    },
    {
      text: "about",
      icon: <InfoIcon />,
      open: false,
      onClick: () => history.push('/about')
    },
  ];

  return (
    <div className={classes.root}>
    <Paper elevation={3}>
      <Drawer 
        variant="permanent" 
        className={classes.drawer}
        classes={{
            paperAnchorLeft: classes.drawerBackground,
      }}> 
      <Toolbar />
        <List dense>
          {itemsList.map((item)=> {
            const { text, icon, onClick, expandable } = item;
              return(
                <> 
                  <ListItem button key={text} onClick={onClick} activeStyle={{fontWeight: "bold", color: "red"}}>
                  {icon && <ListItemIcon style={{ justifyContent: 'flex-start' }} className={classes.drawerIcon}>{icon}</ListItemIcon> }
                    <ListItemText style={{ justifyContent: 'flex-start'}} className={classes.drawerListItems}>{text}</ListItemText>
                  </ListItem>
                  <Collapse in={expandable === true ? open : null} timeout="auto" unmountOnExit>
                      <RafMenu />
                      <HelmutMenu />
                      <TakahiroMenu />
                  </Collapse>
                </>
                );
              })}
        </List>
      </Drawer>
    </Paper>
    </div>
  );
}

export default withRouter(DrawerRouter);