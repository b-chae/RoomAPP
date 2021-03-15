import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import styled from "styled-components/native"
import api, { createAccount } from "../../api";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input"
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

export default ({navigation: {navigate}}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const isFormValid = () => {
        if(firstName === "" || lastName === "" || email === "" || password === ""){
            alert("All fields are required");
            return false
        } 
        if(!isEmail(email)){
            alert("Please add a valid email")
            return false
        }
        return true;
    }

    const handleSubmit = async() => {
        if(!isFormValid()){
            return;
        }
        setLoading(true);
        try{
            const {status} = await api.createAccount({
                first_name: firstName,
                last_name: lastName,
                email,
                username: email,
                password
            })
            if(status === 201){
                alert("Account created. Sign in, please.")
                navigate("SignIn", {email, password})
            }
        }
        catch (e){
            alert("The email is taken")
        } finally{
            setLoading(false);
        }
    }



    return (
    <DismissKeyboard>
    <Container>
        <StatusBar barStyle="dark-content"/>
        <KeyboardAvoidingView behavior="position">
        <InputContainer>
            <Input
                autoCapitalize="words"
                value={firstName}
                placeholder="First Name"
                stateFn={setFirstName}
            ></Input>
            <Input
                autoCapitalize="words"
                value={lastName}
                placeholder="Last Name"
                stateFn={setLastName}
            ></Input>
            <Input
                keyboardType = {"email-address"}
                autoCapitalize="none"
                value={email}
                placeholder="Email"
                stateFn={setEmail}
            ></Input>
            <Input 
                onChangeText={(password) => setPassword(password)}
                value={password} placeholder="Password"
                isPassword={true}
                stateFn={setPassword}
            ></Input>
        </InputContainer>
        <Btn loading={loading} text={"Sign Up"} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
    </Container>
    </DismissKeyboard>
    );
};