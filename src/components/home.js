import React from 'react';
import MainCard from './hometext.js';
import HomeCard from './card';
import HomepageGallery from './galleries/HomepageGallery';
import { Box, GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import { Card, Grid, Toolbar, Typography } from '@material-ui/core';
import { homepageGallery2 } from './shared/homepageGallery.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 200,
        overflowX: 'hidden',
    },
    title: {
        fontSize: 14,
    },
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "1px 1px 6px grey",
        fontStyle: 'oblique',
    },
    homeContent: {
        padding: theme.spacing(2),
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
            <Toolbar />
            <Grid container direction="col" spacing={2} className={classes.homeContent}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        what is archive fashion?
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={2} className={classes.homeContent}>
                <Grid item xs={12} sm={8}>
                    <HomepageGallery />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HomeCard />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <MainCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                <GridList cellHeight={275} className={classes.gridList} spacing={0} cols={12}>
                    {homepageGallery2.map((tile) => (
                        <GridListTile component={Card} className={classes.gridListTile} key={tile.img} rows={tile.rows || 1} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar className={classes.titleBar} title="c/o raf simons redux"/>
                        </GridListTile>
                    ))}
                </GridList>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.image} style={{ backgroundImage: './gridimages/legs.jpg', backgroundPositionY: 'top', }}/>
                </Grid>
            </Grid>


            <Grid container direction="col" spacing={2} className={classes.homeContent}>
                <Grid item xs={12} sm={4}>
                    <HomepageGallery />
                </Grid>
                <Grid item xs={12} sm={8}>
                </Grid>
                <Grid item xs={12} sm={8}>
                </Grid>
            </Grid>
        </main>
    );
}
