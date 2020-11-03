import React, {useEffect, useState, useCallback} from "react";
import {StyleSheet} from "react-native";
import {Layout, Text, Avatar, Card, Icon, Spinner} from "@ui-kitten/components";

import {getLive} from "./utils/api";

const Header = ({children}) => (
  <Text style={styles.headerTitle} category="h6">
    {children}
  </Text>
);

const Live = () => {
  const [outside, setOutside] = useState({});
  const [home, setHome] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    const {data} = await getLive();
    setHome(data.inside);
    setOutside(data.outside);
    setIsLoading(false);
  }, [setHome]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) {
    return (
      <Layout style={styles.layout}>
        <Spinner size="giant" />
      </Layout>
    );
  }

  return (
    <Layout style={styles.layout}>
      <Text category="h2">@ Home</Text>
      <Layout style={styles.section}>
        <Card status="warning">
          <Text style={styles.textCard}>
            <Icon style={styles.icon} fill="#8F9BB3" name="thermometer" />
            {home.temperature}°C
          </Text>
        </Card>
        <Card status="primary">
          <Text style={styles.textCard}>
            <Icon style={styles.icon} fill="#8F9BB3" name="droplet" />
            {home.humidity}%
          </Text>
        </Card>
      </Layout>
      <Text category="h2">@ Caen</Text>
      <Card status="basic">
        <>
          <Text style={styles.textCard}>
            <Avatar
              source={`http://openweathermap.org/img/wn/${outside.weather[0].icon}@2x.png`}
              size="large"
            />
            {outside.main.temp}°C
          </Text>
          <Text appearance="hint">{outside.weather[0].description}</Text>
        </>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {flex: 1, justifyContent: "space-evenly", alignItems: "center"},
  section: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    width: 42,
    height: 42,
    flex: 1,
  },
  textCard: {
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerCard: {
    padding: 12,
  },
  headerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerButton: {
    marginLeft: 12,
  },
});

export default Live;
