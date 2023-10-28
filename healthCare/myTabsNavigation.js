import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Navigation from "./navigation";
import MainScreen from "./screans/MainScrean";

import DoctorsScreen from "./screans/DoctorsScrean";
import SpecialtiesScreen from "./screans/ٍٍSpecialtiesScrean";
import HomeScreen from "./screans/HomeScrean";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        
      >
          
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Doctors" component={DoctorsScreen} />
        <Tab.Screen name="Chats" component={SpecialtiesScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

