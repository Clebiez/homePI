import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
} from "@ui-kitten/components";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from './src/Home';
import Outdoor from "./src/Outdoor";
import Footer from './src/components/Footer';

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator tabBar={(props) => <Footer {...props} />}>
    <Screen name="HOME" component={Home} />
    <Screen name="OUTDOOR" component={Outdoor} />
  </Navigator>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </ApplicationProvider>
);
