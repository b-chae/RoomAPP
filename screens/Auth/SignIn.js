import React from "react";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native"
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input"
import { userLogin } from "../../redux/usersSlice";
import { isEmail } from "../../utils";
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

export default ({route:{params}}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const isFormValid = () =>{
        if(email === "" || password === ""){
            Alert("All fields are required.")
            return false;
        }
        if(!isEmail(email)){
            Alert("Email is invalid");
            return false;
        }
        return true;
    }
    const handleSubmit = () => {
        if(!isFormValid()){
            return;
        }
        dispatch(userLogin(
            {
                username: email,
                password
            }
        ))
    };

    return (
    <DismissKeyboard>
    <Container>
        <StatusBar barStyle="dark-content"/>
        <KeyboardAvoidingView behavior="position">
        <InputContainer>
            <Input
                autoCapitalize="none"
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                stateFn={setEmail}
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