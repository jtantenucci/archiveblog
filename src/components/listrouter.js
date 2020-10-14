import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import RafMenu from './menu/rafmenu';
import HelmutMenu from './menu/helmutmenu';
import TakahiroMenu from './menu/takahiromenu';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import EcoIcon from '@material-ui/icons/Eco';
import ListItemText from '@material-ui/core/Link';
import { MemoryRouter as Router, withRouter } from 'react-router';
import { ListItemIcon, Toolbar, Collapse } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import grey from '@material-ui/core/colors/grey'
import { ListItem, Drawer } from '@material-ui/core';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    flexGrow: 1,
  },
  drawerBackground: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    color: grey[100],
  },
  drawerIcon: {
    color: grey[100],
    width: theme.spacing(3),
    margin: theme.spacing(1),
  },
  drawerContainer: {
    width: 200,
    overflow: 'hidden',
  },
  drawerListItems: {
    fontStyle: 'oblique',
    fontSize: '10',
    color: theme.palette.secondary.main,
  },
  menuRoot: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.primary.main,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  nested2: {
    paddingLeft: theme.spacing(5),
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
      onClick: () => history.push('/home')
    },
    {
      text: "designers",
      icon: <PersonIcon />,
      expandable: true,
      onClick: () => setOpen(!open),
    },
    {
      text: "seasons",
      icon: <EcoIcon />,
      onClick: () => history.push('/seasons')
    },
    {
      text: "gallery",
      icon: <PhotoLibraryIcon />,
      onClick: () => history.push('/gallery')
    },
    {
      text: "about",
      icon: <InfoIcon />,
      onClick: () => history.push('/about')
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer 
      variant="permanent" 
      className={classes.drawer}
      classes={{
          paperAnchorLeft: classes.drawerBackground,
      }}
      >
      <Toolbar />
        <List 
        dense
        >
          {itemsList.map((item, index)=> {
            const { text, icon, onClick, expandable } = item;
              return(
                <> 
                <ListItem button key={text} onClick={onClick} activeStyle={{fontWeight: "bold", color: "red"}}>
                  <ListItemText className={classes.drawerListItems}>{text}</ListItemText>
                  {icon && <ListItemIcon className={classes.drawerIcon}>{icon}</ListItemIcon> }
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
    </div>
  );
}

export default withRouter(DrawerRouter);