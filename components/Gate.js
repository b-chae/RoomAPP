import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/usersSlice";

export default () => {
    const {isLoggedIn} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch()

    return (
    <View style={{ justifyContent:"center", alignItems:"center", flex:1, color:"black" }}>
        {isLoggedIn? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
            <Text>Log out</Text>
        </TouchableOpacity> 
        ) : (
        <TouchableOpacity onPress={() => dispatch(logIn("bs.token"))}>
            <Text>Log In</Text>
        </TouchableOpacity> 
        )}
        
        </View>
    );
}