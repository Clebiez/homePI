import React from "react";
import * as eva from "@eva-design/eva";
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {EvaIconsPack} from "@ui-kitten/eva-icons";

import Live from "./src/Live";
import Weekly from "./src/Weekly";
import Footer from "./src/components/Footer";

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator tabBar={(props) => <Footer {...props} />}>
    <Screen name="LIVE" component={Live} />
    <Screen name="WEEKLY" component={Weekly} />
  </Navigator>
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
