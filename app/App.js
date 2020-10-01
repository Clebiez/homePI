import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
} from "@ui-kitten/components";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Live from './src/Live';
import Weekly from "./src/Weekly";
import Footer from './src/components/Footer';

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator tabBar={(props) => <Footer {...props} />}>
    <Screen name="LIVE" component={Live} />
    <Screen name="WEEKLY" component={Weekly} />
  </Navigator>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </ApplicationProvider>
);
