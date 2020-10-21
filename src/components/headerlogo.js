import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    fontFamily: 'HelveticaWorld',
    fontWeight: "bold",
    color: theme.palette.secondary.light,
    borderRadius: '5px',
    textShadow: "0.5px 0.5px 6px darkgrey",
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',  
    }
   },
  box: {
      padding: '3px',
      borderRadius: '5px',
      background: 'linear-gradient(270deg, rgba(1, 1, 1, 0.6), rgba(44, 45, 47, 0.8))',
   },
   box2: {
    borderRadius: '5px',
    background: 'linear-gradient(90deg, rgba(1, 1, 1, 0.6), rgba(44, 45, 47, 0.8))',
   },
}));

export default function HeaderLogo () {
    const classes = useStyles();
    return(
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Paper elevation={1}>
                <Box className={classes.box}>
                    <Box className={classes.box2}>
                        <Typography variant="h6" component={NavLink} to="/" className={classes.title}>
                            selected {"//"} archive
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}
