import React, {useEffect, useState, useCallback} from "react";
import {StyleSheet} from "react-native";
import {Layout, Text, Avatar, Card, Button} from "@ui-kitten/components";

import {getLive} from "./utils/api";

const Header = ({children}) => (
  <Text style={styles.headerTitle} category="h4">
    {children}
    <Button style={styles.headerButton}>
      Retry
    </Button>
  </Text>
);

const Live = () => {
  const [outside, setOutside] = useState({});
  const [home, setHome] = useState({});

  const getData = useCallback(async () => {
    const {data} = await getLive();
    setHome(data.inside);
    setOutside(data.outside);
  }, [setHome]);

  const HeaderHome = () => (
    <Header style={styles.headerCard} retryCallback={getHome}>
      Home
    </Header>
  );
  const HeaderOutside = () => (
    <Header>Outside</Header>
  );

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Layout
      style={{flex: 1, justifyContent: "space-evenly", alignItems: "center"}}
    >
      <Card style={styles.card} header={HeaderHome}>
        {home.temp && <Text category="h5">{home.temp}°C</Text>}
        {home.humidity && <Text category="h5">{home.humidity}%</Text>}
      </Card>
      <Card style={styles.card} header={HeaderOutside}>
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

const styles = StyleSheet.create({
  card: {
    width: "90%",
  },
  headerCard: {
    padding: 12,
  },
  headerTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerButton: {
    marginLeft: 12
  }
});

export default Live;
