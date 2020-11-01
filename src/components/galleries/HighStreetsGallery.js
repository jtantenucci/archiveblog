import React, { useState } from 'react';
import { consumedGallery } from '../shared/consumedGallery';
import { consumedGallery2 } from '../shared/consumedGallery';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, GridList, GridListTile, GridListTileBar, 
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
    sub: {
        color: theme.palette.primary.dark,
        paddingLeft: 2,
    },
    paper: {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export default function HighStreetsGallery() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({});
    
    const handleModalClose = () => {
        setOpen(false);
        setSelectedImage({});
    };
    
    const imageClickHandler = tile => () => {
        setSelectedImage(tile);
        setOpen(true);
    };


    
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
                        "the high streets" - autumn/winter 2005
                    </ListSubheader>
                    </GridListTile>
                    {consumedGallery.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            className={classes.titleBar}
                            title={tile.title}
                            subtitle={<span>by: takahiro miyashita</span>}
                            actionIcon={
                            <IconButton 
                                aria-label={`info about ${tile.title}`} 
                                className={classes.icon}
                                onClick={imageClickHandler(tile)}
                            >
                                <InfoIcon />
                            </IconButton>
                                }
                            />
                            <Dialog onClose={handleModalClose} open={open} maxWidth="xl">
                            <DialogTitle className={classes.listSubheader} onClose={handleModalClose} style={{ backgroundColor:'rgba(1, 1, 1, 0.6)'}}>
                                {selectedImage.id}
                            </DialogTitle>
                                <DialogContent className={classes.paper}>
                                <img
                                    src={selectedImage.img}
                                    alt={selectedImage.id}
                                    style={{ borderRadius: "5px" ,
                                        maxHeight:'700px',
                                        maxWidth: '900px',
                                    }}
                                />
                                </DialogContent>
                                <DialogActions style={{ backgroundColor:'rgba(1, 1, 1, 0.6)'}}>
                                    <Button fullWidth onClick={handleModalClose} color="secondary">
                                        return
                                    </Button>
                                </DialogActions>
                            </Dialog>
                    </GridListTile>
                        ))}
                </GridList>

                </Grid>
                <Grid xs={12} sm={6}>
                <GridList cellHeight={500} className={classes.sub} cols={12} spacing={2}>
                    <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className={classes.sub}>
                    ' '                    
                    </ListSubheader>
                    </GridListTile>
                    {consumedGallery2.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            className={classes.titleBar}
                            title={tile.title}
                            subtitle={<span>by: takahiro miyashita</span>}
                            actionIcon={
                            <IconButton 
                                aria-label={`info about ${tile.title}`} 
                                className={classes.icon}
                                onClick={imageClickHandler(tile)}
                            >
                                <InfoIcon />
                            </IconButton>
                                }
                            />
                            <Dialog onClose={handleModalClose} open={open} maxWidth="xl">
                            <DialogTitle className={classes.listSubheader} onClose={handleModalClose} style={{ backgroundColor:'rgba(1, 1, 1, 0.6)'}}>
                                {selectedImage.id}
                            </DialogTitle>
                                <DialogContent className={classes.paper}>
                                <img
                                    src={selectedImage.img}
                                    alt={selectedImage.id}
                                    style={{ borderRadius: "5px" ,
                                        maxHeight:'700px',
                                        maxWidth: '900px',
                                    }}
                                />
                                </DialogContent>
                                <DialogActions style={{ backgroundColor:'rgba(1, 1, 1, 0.6)'}}>
                                    <Button fullWidth onClick={handleModalClose} color="secondary">
                                        return
                                    </Button>
                                </DialogActions>
                            </Dialog>
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
