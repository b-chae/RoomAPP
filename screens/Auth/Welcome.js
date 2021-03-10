import { BlurView } from "expo-blur";
import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native"
import Btn from "../../components/Auth/Btn";

const LOGO_URL = "https://cdn.logo.com/hotlink-ok/logo-social-sq.png"

const Container = styled.View`
    justify_content: center;
    align-items: center;
    flex:1;
`
const Image = styled.Image`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%
    height: 100%
`
const Logo = styled.Image`
    width: 100px;
    height: 100px
`

const BtnContainer = styled.View`
    margin-top: 50px
`

export default ({navigation}) => {

    const goToSignUp = () => navigation.navigate("SignUp")
    const goToSignIn = () => navigation.navigate("SignIn")

    return(
        <Container>
            <BlurView 
                tint="light" 
                style={{flex:1, width:"100%", alignItems: "center", justifyContent:"center"}} intensity={10}
            >
                <Logo source={{uri:LOGO_URL}}/>
                <BtnContainer>
                    <Btn onPress={goToSignUp} text={"Sign Up"} accent={true}/>
                    <Btn onPress={goToSignIn} text={"Sign In"} accent={false}/>
                </BtnContainer>
            </BlurView>
            <Image source={require("../../assets/loading.jpg")}/>
            <StatusBar barStyle="light-content" />
        </Container>
    )
};