import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import DrawerRouter from './components/listrouter';
import Home  from './components/home';
import Seasons from './components/seasons';
import Gallery from './components/gallery';
import About from './components/about';
import ConsumedGallery from './components/galleries/ConsumedGallery';
import FearGallery from './components/galleries/FearGallery';
import VirginiaGallery from './components/galleries/VirginiaGallery';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
  }
}));

export default function App() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <CssBaseline />
        <Header />
        <DrawerRouter />
        <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/FearGallery" render={props => <FearGallery {...props} />} />
            <Route exact from="/ConsumedGallery" render={props => <ConsumedGallery {...props} />} />
            <Route exact from="/VirginiaGallery" render={props => <VirginiaGallery {...props} />} />
            <Route exact from="/seasons" render={props => <Seasons {...props} />} />
            <Route exact from="/gallery" render={props => <Gallery {...props} />} />
            <Route exact from="/about" render={props => <About {...props} />} />
        </Switch>
      </div>
  ); 
}