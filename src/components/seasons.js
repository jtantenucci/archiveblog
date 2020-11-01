import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Card, Grid, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 200,
        overflowX: 'hidden',
    },
    box: {
        borderRadius: '5px',
    },
    title: {
        fontSize: 14,
    },
    titleBar: {
        fontStyle: 'oblique',
        color: theme.palette.primary.light,
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "1px 1px 6px grey",
        fontStyle: 'oblique',
    },
    homeContent: {
        padding: theme.spacing(1),
        overflowX: 'hidden',
    },
}));

export default function Seasons() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
        <Toolbar />
            <Grid item direction="row" spacing={1} xs={12} className={classes.homeContent}>
                <Typography variant="h2" className={classes.pageHead}>
                    seasons selection
                </Typography>
            </Grid>
            <Grid container direction="row" justify="flex-end" spacing={1} className={classes.homeContent}>
                <Grid item xs={12}>
                    <Card elevation="0" style={{height: 1400}} className={classes.homeContent}>
            
                    </Card>
                </Grid>
            </Grid> 
        </main>
    );
}
