import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    minWidth: 200,
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.main,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: theme.palette.secondary.dark,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.secondary.dark,
  },
  main: {
    marginBottom: 12,
    color: theme.palette.secondary.light,
  }
}));

export default function HomeCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          ar{bull}chive
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          noun
        </Typography>
        <Typography variant="body2" component="p" className={classes.main}>
          a collection of historical documents or records providing information about a place, institution, or group of people. "source materials in local archives"
          <br />
        </Typography>
        <Typography variant="body2" component="p" className={classes.main}>
          any extensive record or collection of data          
          <br />
        </Typography>
        <Typography variant="body2" component="p" className={classes.pos} style={{marginBottom: 0}}>
          {'to the archives, no longer relevant - raf simons, 2015'}
        </Typography>
      </CardContent>
    </Card>
  );
}