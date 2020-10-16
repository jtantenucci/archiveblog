import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
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

export default function RafMenu() {
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
      style={{ padding: 0}}
    >
      <ListItem button onClick={handleClick} className={classes.nested}>
        <ListItemText primary="raf simons" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" dense disablePadding>
              <ButtonBase>
                <ListItem button component={NavLink} activeStyle={{fontWeight: "bold", color: '#212121', background: 'linear-gradient(270deg, rgba(178, 94, 99, 1), rgba(130, 53, 61, 0.5))'}} to="/FearGallery" className={classes.nested2}>
                  <ListItemText primary="fear generation aw02" />
                </ListItem>
              </ButtonBase>
              <ButtonBase>
                <ListItem button component={NavLink} activeStyle={{fontWeight: "bold", color: 'rgba(178, 94, 99, 5)'}} to="/ConsumedGallery" className={classes.nested2}>
                  <ListItemText primary="consumed ss03" />
                </ListItem>
              </ButtonBase>
              <ButtonBase>
                <ListItem button component={NavLink} activeStyle={{fontWeight: "bold", color: 'rgba(178, 94, 99, 5)'}} to="/VirginiaGallery" className={classes.nested2}>
                  <ListItemText primary="virginia creeper aw03" />
                </ListItem>
              </ButtonBase>
            </List>
        </Collapse>
    </List>
  );
}