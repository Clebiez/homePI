import React, {useState, useEffect} from 'react';
import { Typography, Box } from '@material-ui/core';
import { Plugins } from '@capacitor/core';
const { Device, Geolocation } = Plugins;



const DeviceInfo = () => {
    const [info, setInfo] = useState();
    const [batteryInfo, setBatteryInfo] = useState();
    const [geolocation, setGeolocation] = useState();

    useEffect(() => {
        const getInfo = async() => {
            const data = await Device.getInfo();
            setInfo(data);
        };

        const getBatteryInfo = async() => {
            const data = await Device.getBatteryInfo();
            setBatteryInfo(data);
        };

        getInfo();
        getBatteryInfo();
    }, [setInfo, setBatteryInfo]);

    useEffect(() => {
        const getLocation = async () => {
            const coordinates = await Geolocation.getCurrentPosition({
                enableHighAccuracy: true
            });
            setGeolocation(coordinates)
        };
        getLocation();
    }, [setGeolocation]);
  return (
    <Box align="left" m={4}>
        {info && (
            <Box m={4}>
                <Typography variant="h5">Device info</Typography>
                <Typography>{info?.id}</Typography>
                <Typography>{info?.model}</Typography>
                <Typography>{info?.manufacturer}</Typography>
            </Box>
        )}
        {
            batteryInfo && (
                <Box m={4}>
                    <Typography variant="h5">Battery</Typography>
                    <Typography>Battery : {Math.round(batteryInfo?.batteryLevel * 100)} %</Typography>
                    <Typography>{batteryInfo?.isCharging ? "Charging...": "Not charging"}</Typography>
                </Box>
            )
        }
        {
            geolocation && (
                <Box m={4}>
                    <Typography variant="h5">Geolocation</Typography>
                    <Typography>Lat : {geolocation.coords.latitude}, Long : {geolocation.coords.longitude}</Typography>
                    <Typography>Accuracy: {geolocation.coords.accuracy}</Typography>
                </Box>
            )
        }
    </Box>
  )
};

export default DeviceInfo;
