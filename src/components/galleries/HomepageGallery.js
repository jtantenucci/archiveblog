import React from 'react';
import { homepageGallery } from '../shared/homepageGallery';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import { Box, Card, Grid, GridList, GridListTile, GridListTileBar, 
    IconButton, Paper, Toolbar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 200,
        display: 'flex',
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 1,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    listSubheader: {
        fontStyle: 'oblique',
        color: theme.palette.primary.light,
    },
    content: {
        flexGrow: 1,
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
    gridListTile: {
        backgroundColor: theme.palette.primary.dark,
    }
}));

export default function HomepageGallery() {
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
                <GridList cellHeight={275} className={classes.gridList} cols={4}>
                    {homepageGallery.map((tile) => (
                    <GridListTile component={Card} className={classes.gridListTile} key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                            title="c/o raf simons redux"
                            />
                </GridListTile>
                    ))}
            </GridList>
    </main>
    );
}

