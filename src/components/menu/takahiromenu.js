import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

export default function TakahiroMenu() {
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
        <ListItemText primary="takahiro miyashita" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" dense disablePadding>
                <ListItem button className={classes.nested2}>
                    <ListItemText primary="fear generation aw02" />
                </ListItem>
                <ListItem button component={NavLink} to="/rafconsumed" className={classes.nested2}>
                    <ListItemText primary="consumed ss03" />
                </ListItem>
                <ListItem button className={classes.nested2}>
                    <ListItemText primary="virginia creeper aw03" />
                </ListItem>
            </List>
        </Collapse>
    </List>
  );
}