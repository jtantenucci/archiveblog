import React from 'react';
import { homepageGallery } from '../shared/homepageGallery';
import { makeStyles } from '@material-ui/core/styles';
import { Card, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    listSubheader: {
        fontStyle: 'oblique',
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    content: {
        flexGrow: 1,
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
    },
}));


export default function HomepageGallery() {
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
        <GridList cellHeight={275} className={classes.gridList} spacing={0} cols={12}>
            {homepageGallery.map((tile) => (
                <GridListTile component={Card} className={classes.gridListTile} key={tile.img} rows={tile.rows || 1} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar className={classes.titleBar} title="c/o raf simons redux"/>
                </GridListTile>
            ))}
        </GridList>
    </main>
    );
}

