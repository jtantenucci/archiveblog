import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.main,
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

export default function MainCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p" className={classes.main}>
          when it comes to archive fashion, many are confused. archive fashion is heavily valued when you can understand the significance of it within the context of the time it existed. many groundbreaking trends and stylistic decisions were made decades ago - things that would change the landscape of fashion forever. for this reason, it is very interesting to many to study reasons why things stuck around and what will come in the future that provides a similar impact on the medium as a whole.
        </Typography>
        <Typography variant="body2" component="p" className={classes.pos} style={{marginBottom: 0}}>
          {'to the archives, no longer relevant - raf simons, 2015'}
        </Typography>
      </CardContent>
    </Card>
  );
}