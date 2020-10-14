import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Card, Divider, Grid, Paper, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 200,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
        overflowX: 'hidden',
    },
    title: {
        fontSize: 14,
    },
    pageHead: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
        textShadow: "1px 1px 6px grey",
        paddingLeft: theme.spacing(4),
    },
    content: {
        fontStyle: 'oblique',
        padding: theme.spacing(1),
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Toolbar />
            <Paper variant="rounded" className={classes.content}>
                <Grid item direction="row" spacing={1} xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        about us
                    </Typography>
                </Grid>
                <Grid container direction="row" justify="flex-end" spacing={1}>
                    <Grid item xs={12}>
                        <Card className={classes.content} elevation="0" style={{height: 1400}}/>
                    </Grid>
                </Grid> 
            </Paper>
        </main>
    );
}
