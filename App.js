import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import estilo from './src/estilo.js';

export default function App() {
  return (
    <View style ={estilo.container}>
      <LinearGradient
      colors = {['#FBEA9D','black']}
      style = {estilo.gradienteBackground}
      >

      <Image
      source = {{uri : 'https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
      style = {estilo.image}>

      </Image>
      
      </LinearGradient>

      {/*View com as entradas de dados*/}
      
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
            </TouchableOpacity>
        </View>   
    </View>
  );
}

