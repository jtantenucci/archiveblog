import React from 'react';
import { tileData } from '../shared/tileData';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import { Box, Grid, GridList, GridListTile, GridListTileBar, 
    IconButton, ListSubheader, Paper, Toolbar} from '@material-ui/core';

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
        color: theme.palette.secondary.light,
    },
    content: {
        flexGrow: 1,
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function ConsumedGallery() {
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
        <Paper elevation={3} variant="rounded">
            <Toolbar />
            <Box className={classes.root}>
                <Grid xs={12}>
                <GridList cellHeight={400} className={classes.gridList} cols={6} spacing={2}>
                    <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className={classes.listSubheader}>
                        'consumed ss03 lookbook'
                    </ListSubheader>
                    </GridListTile>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: raf</span>}
                            actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                                }
                            />
                    </GridListTile>
                        ))}
                </GridList>
                </Grid>
            </Box>
        </Paper>
    </main>
    );
}

