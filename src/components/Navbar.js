import React from "react";
import Standings from "../Pages/Standings";
import Fixtures from "../Pages/Fixtures";
import Statistics from "../Pages/Statistics";
import TeamDetails from "../Pages/TeamDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Fixtures"
          component={Fixtures}
          options={{
            tabBarLabel: "Fixtures",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Standings"
          component={Standings}
          options={{
            tabBarLabel: "Standings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="table-large"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            tabBarLabel: "Statistics",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="arrow-up-right"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Team Details"
          component={TeamDetails}
          options={{
            tabBarLabel: "Team Details",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="soccer-field"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
