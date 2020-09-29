import React, {useEffect, useState} from "react";
import {Layout, Text, Avatar, Card} from "@ui-kitten/components";

import {getTownCurrentWeather} from "./utils/openWeatherUtils";

import {getLive} from "./utils/live";

const Header = ({children}) => (
  <Text style={{textAlign: "center", padding: "8px"}} category="h4">
    {children}
  </Text>
);

const HeaderHome = () => <Header>Home</Header>;
const HeaderOutside = () => <Header>Outside</Header>;

const Live = () => {
  const [outside, setOutside] = useState({});
  const [home, setHome] = useState({});

  useEffect(() => {
    async function getOutside() {
      const {data} = await getTownCurrentWeather();
      setOutside(data);
    }

    async function getHome() {
      const test = await getLive();
      // setHome();
    }

    getOutside();
    getHome();
  }, []);

  return (
    <Layout style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Card header={HeaderHome}></Card>
      <Card header={HeaderOutside}>
        {outside.weather && (
          <>
            <Avatar
              source={`http://openweathermap.org/img/wn/${outside.weather[0].icon}@2x.png`}
              size="giant"
            />
            <Text category="h5">{outside.weather[0].description}</Text>
            <Text category="h5">{outside.main.temp}°C</Text>
          </>
        )}
      </Card>
    </Layout>
  );
};

export default Live;
