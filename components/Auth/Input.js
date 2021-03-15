import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import PropTypes from "prop-types"
import { Dimensions } from "react-native";
import colors from "../../colors"

const {width} = Dimensions.get("screen")

const Container = styled.TextInput`
    width: ${width/1.5}px;
    border: 1px solid ${colors.grey};
    padding: 13px 10px;
    align-items: center;
    border-radius: 20px;
    margin: 5px;
    background-color: white;
`;

const Input = ({value, placeholder, isPassword=false, autoCapitalize="none", stateFn, keyboardType}) => (
    <Container
        value={value}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        autoCapitalize={autoCapitalize}
        onChangeText={(text) => stateFn(text)}
        keyboardType={keyboardType}
    />
);

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    stateFn: PropTypes.func
}

export default Input;