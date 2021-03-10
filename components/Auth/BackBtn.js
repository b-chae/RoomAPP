import React from "react";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android"

const Container = styled.View`
    padding-left: 20px;
`

export default () => <Container>
        <Ionicons name="caret-back-circle-outline" size={28} color="green" />
    </Container>