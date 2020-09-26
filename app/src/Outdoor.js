import React, {useEffect, useState} from "react";
import format from "date-fns/format";

import {Layout, List, ListItem, Avatar, Text} from "@ui-kitten/components";

import {getTownOneCallWeather} from "./utils/openWeatherUtils";

const weatherAvatar = (icon) => (
    <Avatar source={`http://openweathermap.org/img/wn/${icon}@2x.png`} size="large" />
);

const renderItem = ({item}) => (
  <ListItem
    title={`${format(new Date(item.dt * 1000), "eeee")} - ${
      Math.round(item.temp.day * 10) / 10
    }°C`}
    description={item.weather[0].description}
    accessoryRight={() => weatherAvatar(item.weather[0].icon)}
  />
);

const Outdoor = () => {
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    async function getData() {
      const {data} = await getTownOneCallWeather();
      setWeathers(data.daily);
    }
    getData();
  }, []);

  return (
    <Layout
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{marginTop: "50px"}} category="h2">
        Weekly @ Caen
      </Text>
      <List
        style={{marginTop: "50px", backgroundColor: 'white'}}
        data={weathers}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default Outdoor;
