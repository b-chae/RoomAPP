import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import styled from "styled-components/native"
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input"
import DismissKeyboard from "./DismissKeyboard"

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`

const InputContainer = styled.View`
    margin-bottom: 30px;
`

const TextInput = styled.TextInput``;

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => alert(`${username} ${password}`)

    return (
    <DismissKeyboard>
    <Container>
        <StatusBar barStyle="dark-content"/>
        <KeyboardAvoidingView behavior="position">
        <InputContainer>
            <Input
                autoCapitalize="none"
                value={username}
                placeholder="Username"
                stateFn={setUsername}
            ></Input>
            <Input 
                onChangeText={(password) => setPassword(password)}
                value={password} placeholder="Password"
                isPassword={true}
                stateFn={setPassword}
            ></Input>
        </InputContainer>
        <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
    </Container>
    </DismissKeyboard>
    );
};