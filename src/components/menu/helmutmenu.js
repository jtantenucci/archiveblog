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

export default function HelmutMenu() {
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
        <ListItemText primary="helmut lang" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" dense disablePadding>
                <ListItem button component={NavLink} to="/" className={classes.nested2}>
                    <ListItemText primary="untitled aw98" />
                </ListItem>
                <ListItem button component={NavLink} to="/" className={classes.nested2}>
                    <ListItemText primary="séance de travail aw99" />
                </ListItem>
            </List>
        </Collapse>
    </List>
  );
}