import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d3d3d3'
    },

    gradienteBackground:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%',
        alingItems:'center',
        justifyContent:'center'
    },

    box:{
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'white',
        width:'85%',
        height:400
    },

    input:{
        borderRadius:5,
        width:'80%',
        marginLeft:4,
        padding:15,
        borderWidth:1
    },

    viewIcons:{
        width:'100%',
        justifyContent:'center',
        alingItems:'center',
        flexDirection:'row',
        marginTop:35

    },

    button:{
        padding:20,
        marginTop:60,
        alingItems:'center',
        justifyContent:'center'
    },

    text:{
        fontWeight:'bold',
        color:'white',
        justifyContent:'center'
    },

    image:{
        marginBottom:'50%',
        height: 400,
        width:'100%'
    }



})
export default estilo;