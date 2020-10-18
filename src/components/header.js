import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { AppBar, Avatar, Button, ClickAwayListener, 
  Grow, MenuItem, MenuList, Paper, 
  Popper, Toolbar, Typography } from '@material-ui/core';


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
      color: theme.palette.secondary.light,
  },
  title: {
      flexGrow: 1,
      fontStyle: 'oblique',
      fontFamily: 'HelveticaWorld',
      color: theme.palette.secondary.light,
      '&:hover': {
        color: theme.palette.secondary.main,
        textDecoration: 'none',  
      }
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
          <Typography variant="h6" component={NavLink} to="/" className={classes.title} noWrap>
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
