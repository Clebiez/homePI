import React, {useEffect, useState} from "react";
import {Layout, Text, Avatar, Card} from "@ui-kitten/components";

import {getTownCurrentWeather} from "./utils/openWeatherUtils";

const HeaderHome = () => <Text style={{textAlign: 'center', padding: '8px'}} category="h4">Home</Text>;

const Home = () => {
  const [outside, setOutside] = useState({});

  useEffect(() => {
    async function getData() {
      const {data} = await getTownCurrentWeather();
      setOutside(data);
    }

    getData();
  }, []);

  return (
    <Layout style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Card header={HeaderHome}>
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

export default Home;
