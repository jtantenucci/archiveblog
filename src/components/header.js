import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'
import { Avatar, Button, Paper, MenuItem, MenuList, Popper, Grow, ClickAwayListener } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      backgroundColor: theme.palette.primary.dark,
      flexGrow: 1,
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
      marginRight: theme.spacing(2),
  },
  button: {
      fontFamily: 'HelveticaWorld',
      color: grey[100],
  },
  title: {
      flexGrow: 1,
      fontStyle: 'oblique',
      fontFamily: 'HelveticaWorld',
      color: grey[100],
  },
  containerStyle: {
      fontStyle: 'oblique',
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.dark,
  },
  content: {
      flexGrow: 1,
      fontStyle: 'oblique',
      color: grey[100],
      backgroundColor: grey[700],
  },
  avatar: {
      width: theme.spacing(3),
      margin: theme.spacing(1),
      height: theme.spacing(3),
      color: grey[100],
      backgroundColor: grey[800],
  }
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title} noWrap>
            archive fashion
          </Typography>
          <Button 
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true" 
            onClick={handleToggle} 
            className={classes.button}>
            <Avatar className={classes.avatar}></Avatar> user
          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow 
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'left' }}
                >
                  <Paper className={classes.content}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        id="menu-list-grow"
                        autoFocusItem={open}
                  >
                        <MenuItem onClick={handleClose}>my account</MenuItem>
                        <MenuItem onClick={handleClose}>saved looks</MenuItem>
                        <MenuItem onClick={handleClose}>logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  );
}
