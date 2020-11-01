import React, { useState } from 'react';
import { virginiaCreeper } from '../shared/virginiaCreeper';
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
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    listSubheader: {
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
    },
    listSubhider: {
        fontStyle: 'oblique',
        color: theme.palette.primary.dark,
    },
    content: {
        flexGrow: 1,
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export default function VirginiaGallery() {
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
                <Grid xs={12}>
                <GridList cellHeight={300} className={classes.gridList} cols={12} spacing={2}>
                    <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                    <ListSubheader component="div" className={classes.listSubheader}>
                        "virginia creeper" - autumn/winter 2003
                    </ListSubheader>
                    </GridListTile>
                    {virginiaCreeper.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            className={classes.titleBar}
                            title={tile.title}
                            subtitle={<span>by: raf</span>}
                            actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} onClick={imageClickHandler(tile)} className={classes.icon}>
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
            </Box>
        </Paper>
    </main>
    );
}

