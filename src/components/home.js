import React from 'react';
import MainCard from './hometext.js';
import HomeCard from './card';
import HomeCardImage from './galleries/HomepageGallery';
import { Box, makeStyles } from '@material-ui/core';
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
    pageHead: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
        textShadow: "1px 1px 6px grey",
    },
    content: {
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Paper elevation={3} variant="rounded" className={classes.content}>
            <Toolbar />
                <Grid container direction="row" spacing={1} xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        what is archive fashion?
                    </Typography>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" justify="flex-start" spacing={2} wrap="nowrap">
                    <Grid xs={12} sm={4}>
                        <HomeCard />
                    </Grid>
                    <Grid xs={12} sm={8}>
                        <HomeCardImage />
                    </Grid>
                </Grid>

                <Grid container direction="row" alignItems="flex-start" justify="flex-start" spacing={1} wrap="nowrap">
                    <Grid xs={12} sm={8}>
                        <MainCard />
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Box className={classes.image}>
                            <img className={classes.img} src="./gridimages/rafgirl.jpg" alt="rafgirl" />
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <Card className={classes.content} elevation="0" style={{height: 400}}/>
                    </Grid>
                </Grid> 
            </Paper>
        </main>
    );
}
