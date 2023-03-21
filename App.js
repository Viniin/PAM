import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {View} from 'react-native';

// CSS
import estilo from './src/estilo.js';

// IMPORT COMPONENTES
import Header from './src/components/header.js';
import Forms from './src/components/Forms.js';
import Footer from './src/components/footer.js';

export default function App() {
  return (
    <View style ={estilo.container}>
     
     <Header></Header>

      {/*View com as entradas de dados*/}
      
    <Forms></Forms>


        
    </View>
  );
}

