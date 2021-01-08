import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUICard from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 'auto',
    minWidth: '110px',
    flex: 1,
    margin: theme.spacing(2)
  },
  cardTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2), 
  },
  icon: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2), 
  }
}));

const Card = ({ icon, label, data }) => {
  const classes = useStyles();

  return (
    <MUICard className={classes.card}>
      <Typography className={classes.cardTitle} variant="h6" align="center">{label}</Typography>
      <Typography variant="h2" align="center">{data}</Typography>
      <div className={classes.icon}>
        {icon}
      </div>
    </MUICard>
  )
};

export default Card;