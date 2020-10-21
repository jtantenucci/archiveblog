import React from 'react';
import MainCard from './hometext.js';
import HomeCard from './card';
import HomepageGallery from './galleries/HomepageGallery';
import { GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import { Box, Card, Grid, Toolbar, Typography } from '@material-ui/core';
import { homepageGallery2, homepageGallery3 } from './shared/homepageGallery.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 200,
        overflowX: 'hidden',
    },
    box: {
        padding: '3px',
        borderRadius: '5px',
        background: 'linear-gradient(270deg, rgba(1, 1, 1, 0.6), rgba(44, 45, 47, 0.8))',
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

export default function Home() {
    const classes = useStyles();

    return (
        <main className={classes.root} >
            <Toolbar />
            <Grid container direction="col" spacing={1} className={classes.homeContent}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        what is archive fashion?
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.homeContent}>
                <Grid item xs={12} sm={8}>
                    <HomepageGallery />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.box}>
                        <HomeCard />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.box}>
                        <MainCard />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <GridList cellHeight={400} className={classes.gridList} spacing={0} cols={12}>
                    {homepageGallery3.map((tile) => (
                            <GridListTile component={Card} className={classes.gridListTile} key={tile.img} rows={tile.rows || 1} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar className={classes.titleBar} title="c/o raf simons redux"/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item xs={12}>
                <GridList cellHeight={300} className={classes.gridList} spacing={12} cols={12}>
                    {homepageGallery2.map((tile) => (
                        <GridListTile component={Card} className={classes.gridListTile} key={tile.img} rows={tile.rows || 1} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar className={classes.titleBar} title="c/o raf simons redux"/>
                        </GridListTile>
                    ))}
                </GridList>
                </Grid>
            </Grid>
        </main>
    );
}
