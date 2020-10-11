import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import {  Accordion, AccordionDetails, AccordionSummary, 
  Drawer, List, ListItem, ListItemIcon, 
  ListItemText, Toolbar, Typography } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerBackground: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
        overflow: "hidden",
    },
    drawerContainer: {
        width: 200,
        overflow: 'hidden',
    },
    drawerIcon: {
        color: theme.palette.secondary.light,
    },
    drawerListItems: {
        fontStyle: 'oblique',
        fontSize: '10',
        color: theme.palette.secondary.main,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    rootAccordion: {
      width: '100%',
    },
}));

export default function MenuDrawer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paperAnchorLeft: classes.drawerBackground,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Accordion 
            className={classes.drawerBackground} 
            expanded={expanded === 'panel1'} 
            onChange={handleChange('panel1')}
            TransitionProps={{ unmountOnExit: true }} 
            >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <ListItemIcon><PersonIcon className={classes.drawerIcon}/></ListItemIcon>
              <Typography className={classes.heading}>designers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <NavLink className={classes.drawerListItems} to="/home">
                <ListItem button>
                  <ListItemIcon><PersonIcon className={classes.drawerIcon}/></ListItemIcon>
                  <ListItemText> designers</ListItemText>
                </ListItem>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          <Accordion 
          className={classes.drawerBackground} 
          expanded={expanded === 'panel2'} 
          onChange={handleChange('panel2')}
          TransitionProps={{ unmountOnExit: true }} 
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <ListItemIcon><EcoIcon className={classes.drawerIcon}/></ListItemIcon>
              <Typography className={classes.heading}>seasons</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <NavLink className={classes.drawerListItems} to="/rafconsumed">
                <ListItem button>
                    <ListItemIcon><EcoIcon className={classes.drawerIcon}/></ListItemIcon>
                    <ListItemText> seasons</ListItemText>
                </ListItem>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          <Accordion 
          className={classes.drawerBackground} 
          expanded={expanded === 'panel3'} 
          onChange={handleChange('panel3')}
          TransitionProps={{ unmountOnExit: true }} 
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <ListItemIcon><PhotoLibraryIcon className={classes.drawerIcon}/></ListItemIcon>
              <Typography className={classes.heading}>gallery</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button>
                  <ListItemIcon><PhotoLibraryIcon className={classes.drawerIcon}/></ListItemIcon>
                  <ListItemText> gallery</ListItemText>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion 
          className={classes.drawerBackground} 
          expanded={expanded === 'panel4'} 
          onChange={handleChange('panel4')}
          TransitionProps={{ unmountOnExit: true }} 
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <ListItemIcon><InfoIcon className={classes.drawerIcon}/></ListItemIcon>
              <Typography className={classes.heading}>about</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button>
                <ListItemIcon><InfoIcon className={classes.drawerIcon}/></ListItemIcon>
                <ListItemText> about</ListItemText>
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </div>
      </Drawer>
    </div>
  );
}