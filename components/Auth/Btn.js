import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { ActivityIndicator, Dimensions } from "react-native";
import colors from "../../colors";

const {width, height} = Dimensions.get("screen")
const Button = styled.View`
    border: 1px solid ${props => (props.accent ? "transparent" : colors.black)};
    width: ${width / 1.5}px;
    background-color: ${props => (props.accent ? colors.green : "transparent")};
    padding: 13px 0px;
    align-items: center;
    border-radius: 20px;
    margin: 2px;
`
const Text = styled.Text`
    font-weight: 600;
    font-size: 14px
    color: ${props => (props.accent ? "white" : colors.black)}
`


const Btn = ({loading, onPress, text, accent = false}) => (
    <TouchableOpacity onPress={loading? null: onPress}>
        <Button accent={accent}>
            {loading ? <ActivityIndicator color={accent ? "white": "black"}/> : <Text accent={accent}>{text}</Text>}
        </Button>
    </TouchableOpacity>
)

Btn.propTypes = {
    onPress : PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    accent: PropTypes.bool,
    loading: PropTypes.bool
}

export default Btn;
