import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Explore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/MapScreen";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import colors from "../colors";
import { Ionicons, MaterialIcons } from "expo-vector-icons";

const Main = createBottomTabNavigator();

export default() => (

    <Main.Navigator tabBarOptions={{
        activeTintColor: colors.green,
        tabStyle:{
            paddingTop: 10
        },
        labelStyle:{
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: 14
        }
    }}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
                let iconName = ""
                if(route.name === "Explore"){
                    iconName += "search"
                } else if(route.name === "Saved"){
                    iconName += "offline-pin"
                } else if(route.name === "Map"){
                    iconName += "map"
                } else if(route.name === "Profile"){
                    iconName += "person"
                }
                return <MaterialIcons name={iconName} size={22} color={focused ? colors.green: colors.grey}></MaterialIcons>
            }
        })}
    >
        <Main.Screen name="Explore" component={Explore}></Main.Screen>
        <Main.Screen name="Saved" component={Saved}></Main.Screen>
        <Main.Screen name="Map" component={MapScreen}></Main.Screen>
        <Main.Screen name="Profile" component={Profile}></Main.Screen>
    </Main.Navigator>

);