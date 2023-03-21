import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import estilo from "../estilo.js";
import Footer from "./footer.js";

export default function Forms() {
    return(
        <View style = {estilo.box}>
            <View style = {estilo.viewIcons}>
              <Feather name="user" size={24} color="black" />
              <TextInput style={estilo.input} placeholder='e-mail'/>
            </View>
            <View style = {estilo.viewIcons}>
              <FontAwesome5 name="key" size={24} color="black" />
              <TextInput style={estilo.input} placeholder='senha'/>
            </View>

            <TouchableOpacity style= {{width:'80%'}}>
              <LinearGradient
              colors = {['#d2691E','#FF4500']}
              style ={estilo.button}
              >
              <Text style= {estilo.text}>Logar</Text>

              </LinearGradient>
              <Footer></Footer>
            </TouchableOpacity>
        </View>   
    )
}