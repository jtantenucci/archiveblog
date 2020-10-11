import React from 'react';
import HomeCard from './card';
import { makeStyles } from '@material-ui/core';
import { Divider, Grid, Paper, Toolbar, Typography } from '@material-ui/core';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 200,
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        flexGrow: 1,
        color: theme.palette.secondary.light,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    content: {
        flexGrow: 1,
        fontStyle: 'oblique',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(4),
    },
    divider: {

    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Paper elevation={3} variant="rounded">
            <Toolbar />
                <Grid container spacing={2} className={classes.content}>
                    <Grid item xs={12}>
                        <Typography variant="h2">what is archive fashion?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="p">What is archive clothing? At its most superficial, 
                            it’s owning an exceedingly rare piece of designer clothing to stunt in. 
                            At its most obsessive, it means becoming an archivist of your favorite designer, 
                            researching, collecting and reselling their rarest pieces out of sheer love, 
                            and maybe a little bit of one-upmanship. Strictly speaking, 
                            archival fashion is any piece of clothing taken from a designer’s past body of work, 
                            but in the last few years it has come to describe specific pieces from 
                            historically significant menswear collections. 
                            Archive clothing is essentially the obsessiveness of stamp collecting, 
                            sneakerhead culture, or Pokemon cards but applied to fashion. 
                            But unlike the people you find in the lineup outside Supreme or Palace, 
                            archival fashion collectors are more interested in the old rather than the new. 
                            As the entry point into the world of streetwear and high-fashion has become so accessible 
                            to many, archive clothing is seen as the last bastion of authenticity in fashion – 
                            no one owns a piece of archive fashion without dedicating time and energy 
                            researching and hunting for it meaning it requires more than just money to become an 
                            archival fashion collector.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                    </Grid>
                    <Grid item xs={6}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={6}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={6}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={6}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={6}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}
