import React from "react";
import {BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";

const Footer = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" />
    <BottomNavigationTab title="OUTDOOR" />
  </BottomNavigation>
);

export default Footer;
