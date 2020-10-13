import React from 'react';
import MainCard from './hometext.js';
import HomeCard from './card';
import HomeCardImage from './galleries/HomepageGallery';
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
    divider: {
        color: theme.palette.secondary.light,
        paddingBottom: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    gridList: {
        flexWrap: 'nowrap',
    },
    pageHead: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
        textShadow: "1px 1px 6px grey",
    },
    content: {
        overflow: 'hidden',
        fontStyle: 'oblique',
        padding: theme.spacing(1),
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Paper elevation={3} variant="rounded" className={classes.content}>
            <Toolbar />
                <Grid item direction="row" spacing={1} xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        what is archive fashion?
                    </Typography>
                </Grid>
                <Divider className={classes.divider}/>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item xs={12}>
                        <Card className={classes.content} elevation="0" style={{height: 15 }}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <HomeCardImage />
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="flex-end" spacing={1}>
                    <Grid item xs={12} sm={8}>
                        <MainCard />
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.content} elevation="0" style={{height: 400}}/>
                    </Grid>
                </Grid> 
            </Paper>
        </main>
    );
}
