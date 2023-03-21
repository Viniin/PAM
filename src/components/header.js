import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import estilo from "../estilo.js";

export default function Header() {
    return(
        <LinearGradient
      colors = {['#FBEA9D','black']}
      style = {estilo.gradienteBackground}
      >

      <Image
      source = {{uri : 'https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
      style = {estilo.image}>

      </Image>
      
      </LinearGradient>
    )
}