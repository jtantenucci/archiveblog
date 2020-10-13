import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import RafMenu from '../components/menu/rafmenu';
import HelmutMenu from '../components/menu/helmutmenu';
import TakahiroMenu from '../components/menu/takahiromenu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.primary.dark,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className={classes.root}
      dense
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="designers" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <RafMenu />
            <HelmutMenu />
            <TakahiroMenu />
        </Collapse>
      <ListItem button>
        <ListItemText primary="seasons" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="gallery" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="about" />
      </ListItem>
      <ListItem button component={NavLink} activeStyle={{fontWeight: "bold", color: "red"}} to="/home">
        <ListItemText primary="home" />
      </ListItem>
    </List>
  );
}