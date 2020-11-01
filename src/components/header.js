import React from 'react';
import HeaderLogo from './headerlogo';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, ClickAwayListener, 
  Grow, MenuItem, MenuList, Paper, 
  Popper, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      paddingLeft: 10,
      paddingRight: 10,
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
      color: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
      paddingRight: 20,
  },
  containerStyle: {
      fontStyle: 'oblique',
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.dark,
  },
  content: {
      flexGrow: 1,
      fontStyle: 'oblique',
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.main,
  },
  avatar: {
      width: theme.spacing(3),
      margin: theme.spacing(1),
      height: theme.spacing(3),
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.dark,
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
          <HeaderLogo />
          <Button 
            variant="outlined"
            size="small"
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
