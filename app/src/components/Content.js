import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { Typography, LinearProgress, Fade } from '@material-ui/core';
import HeaderBar from './HeaderBar';
import Card from './Card';
import DevinceInfo from './DeviceInfo';
import { getLive } from '../utils/api';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '56px',
  },
  content: {
    padding: theme.spacing(2)
  },
  dataContainer: {
    display: 'flex',
    marginTop: theme.spacing(4),
    justifyContent: 'space-even',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

function Content() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getLive();
      setData(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, [setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <>
      <HeaderBar onRefresh={fetchData} />
      <div className={classes.root}>
        {loading && <LinearProgress />}
        <Fade in={data && data.inside && data.outside}>
          <div className={classes.content}>
            <Typography variant="h4">Inside</Typography>
            <div className={classes.dataContainer}>
              <Card icon={<WhatshotIcon style={{ color: red[500], fontSize: 54 }} />} label="Temperature" data={`${data?.inside?.temperature}°C`} />
              <Card icon={<LocalDrinkIcon style={{ color: blue[500], fontSize: 54 }} />} label="Humidity" data={`${data?.inside?.humidity}%`} />
            </div>
            <Typography variant="h4">Outside</Typography>
            <div className={classes.dataContainer}>
              <Card icon={<WhatshotIcon style={{ color: red[500], fontSize: 54 }} />} label="Temperature" data={`${data?.outside?.main.temp}°C`} />
              <Card icon={<LocalDrinkIcon style={{ color: blue[500], fontSize: 54 }} />} label="Humidity" data={`${data?.outside?.main.humidity}%`} />
            </div>
          </div>
        </Fade>
        <DevinceInfo />
      </div>
    </>
  );
}

export default Content;
