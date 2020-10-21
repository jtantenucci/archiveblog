import React from 'react';
import { closedFeelingGallery } from '../shared/closedFeelingGallery';
import { closedFeelingGallery2 } from '../shared/closedFeelingGallery';
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
    sub: {
        color: theme.palette.primary.dark,
        paddingLeft: 2,
    },
    content: {
        flexGrow: 1,
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function ClosedFeelingGallery() {
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
        <Paper elevation={3} variant="rounded">
            <Toolbar />
            <Box className={classes.root}>
                <Grid container direction="row" alignItems="center" justify="center" xs={12}>
                    <Grid item container xs={6}>
                    <GridList cellHeight={500} className={classes.gridList} cols={12} spacing={2}>
                        <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                        <ListSubheader component="div" className={classes.listSubheader}>
                            "a closed feeling" - autumn/winter 2009
                        </ListSubheader>
                        </GridListTile>
                        {closedFeelingGallery.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                className={classes.titleBar}
                                title={tile.title}
                                subtitle={<span>by: takahiro miyashita</span>}
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
                    <Grid item xs={12} sm={6}>
                    <GridList cellHeight={500} className={classes.sub} cols={12} spacing={2}>
                        <GridListTile key="Subheader" cols={12} style={{ height: '52' }}>
                        <ListSubheader className={classes.sub}>
                            ' '
                        </ListSubheader>
                        </GridListTile>
                        {closedFeelingGallery2.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                className={classes.titleBar}
                                title={tile.title}
                                subtitle={<span>by: takahiro miyashita</span>}
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
                </Grid>
            </Box>
        </Paper>
    </main>
    );
}
