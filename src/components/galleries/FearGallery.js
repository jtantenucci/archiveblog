import React from 'react';
import { fearGeneration } from '../shared/fearGeneration';
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
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
    imgFullWidth: {
    },
}));

export default function FearGallery() {
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
        <Paper elevation={3} variant="rounded">
            <Toolbar />
            <Box className={classes.root}>
                <Grid xs={12}>
                <GridList cellHeight={500} className={classes.gridList} cols={12} spacing={2}>
                    <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className={classes.listSubheader}>
                        "woe unto those who spit on the fear generation ... the wind will blow it back" - autumn/winter 2002
                    </ListSubheader>
                    </GridListTile>
                    {fearGeneration.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            className={classes.titleBar}
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

