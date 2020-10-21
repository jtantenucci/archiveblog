import React from 'react';
import HomepageGallery from './galleries/HomepageGallery';
import { GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import { Card, Grid, Toolbar, Typography } from '@material-ui/core';
import { homepageGallery2, homepageGallery3, homepageGallery4 } from './shared/homepageGallery.js';

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

export default function Gallery() {
    const classes = useStyles();

    return (
        <main className={classes.root} >
            <Toolbar />
            <Grid container direction="row" spacing={1} className={classes.homeContent}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        gallery ?
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.homeContent}>
                <Grid item>
                    <HomepageGallery />
                </Grid>
                <Grid item>
                    <GridList cellHeight={400} className={classes.gridList} spacing={0} cols={12}>
                    {homepageGallery3.map((tile) => (
                            <GridListTile component={Card} className={classes.gridListTile} key={tile.img} rows={tile.rows || 1} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar className={classes.titleBar} title="c/o raf simons redux"/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item>
                    <GridList cellHeight={300} className={classes.gridList} spacing={0} cols={12}>
                        {homepageGallery2.map((tile) => (
                            <GridListTile component={Card} className={classes.gridListTile} key={tile.img} rows={tile.rows || 1} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar className={classes.titleBar} title="c/o raf simons redux"/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item>
                    <GridList cellHeight={300} className={classes.gridList} spacing={0} cols={12}>
                        {homepageGallery4.map((tile) => (
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
