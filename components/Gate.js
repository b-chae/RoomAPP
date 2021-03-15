import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
import { logIn, logOut } from "../redux/usersSlice";

export default () => {
    const {isLoggedIn} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch()

    return (
    <NavigationContainer>
        {isLoggedIn? (
            <Main />
        ) : (
            <Auth />
        )}
    </NavigationContainer>
    );
}