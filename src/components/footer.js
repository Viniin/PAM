import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estilo from "../estilo.js";

export default function Footer() {
    return(

        <View style = {estilo.text}>
            <TouchableOpacity>

            <Text style = {estilo.textRecuperar}>Esqueceu senha </Text>
            <Text style = {estilo.textRecuperar}>Login</Text>

            </TouchableOpacity>
              
        </View>
    )
}