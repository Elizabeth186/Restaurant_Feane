import React, {useState} from 'react';
import { View, Text, StyleSheet , KeyboardAvoidingView, TextInput, Dimensions, TouchableOpacity, Image} from 'react-native';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input, Icon } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Login = ({navigation}) => {

    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
  
    const toggleSecureTextEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };
  return (
    <ImageBackground source={require('../src/images/fondo2.png')} style={{flex: 1}}>
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
         
   <SafeAreaView style={styles.container}>
    
    <View style={styles.container} >
    <Image style={{width:windowWidth/1.6, height:windowHeight/5, top: 230, alignSelf:'center'}} 
   source={require('../src/images/Feane.png')}></Image>
       <Text style={styles.title}>Sing In</Text>
       
        <View style={styles.inputs}>

            <View style={styles.inputs2}>
        <View style={styles.viewemail}>
        <Ionicons
                 name="mail-sharp"
                  color='white'
                  size={23}
                  alignItems='center'
                  top={8}
                  style={styles.iconleft}
                  ></Ionicons>
            <TextInput
                 style={styles.inputemail}
                 placeholder="EMAIL"
                 placeholderTextColor={'white'}
            />
      </View>
       
   
      
        <View style={styles.viewseepasswoord}>
        <Ionicons
                 name="lock-closed-sharp"
                  color='white'
                  size={23}
                  alignItems='center'
                  top={8}
                  style={styles.iconleft}
                  ></Ionicons>
            <TextInput
                 value={password}
                 onChangeText={setPassword}
                 secureTextEntry={secureTextEntry}
                 style={styles.inputpass}
                 placeholder="PASSWORD"
                 placeholderTextColor={'white'}
            />
        
       
            
          <TouchableOpacity style={styles.setvisivility}>
               <Ionicons
                  name={secureTextEntry ? 'eye-off-outline' : 'eye'}
                  onPress={toggleSecureTextEntry}
                  color='white'
                  size={20}
                  />
          </TouchableOpacity>

      </View>
      
      </View>
      
 
      <Text style={styles.txtnohaveacount}>You do not have an account?</Text>

      <TouchableOpacity style={styles.btnhome}
       onPress={() => navigation.navigate('Home')}>
              <Text style={styles.txtlogin}>
                Login
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnsingup}
       onPress={() => navigation.navigate('SingUp')}>
               <Text style={styles.txtsingup}>Sing Up</Text>
          </TouchableOpacity>
         
        </View>
        </View>
       
   </SafeAreaView>
   
   </KeyboardAvoidingView>
   </ImageBackground> 
  );f}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      top: -24
       // Se definen las dimensiones de la imagen de fondo
   
    
    },
    inputs:{
     alignItems:'center',
     alignContent:'center',
     alignSelf:'center',
     top:200,
     width:windowWidth/1.1,
     height:windowHeight/1.5,
     borderRadius:20,
    },
    txtnohaveacount:{
    color:'white',
    margin:25,
    top:145,
    },
    inputs2:{
        alignItems:'center',
        top:10,
       },
       txtlogin:{
      fontSize: 20,
      alignItems:'center',
      padding:10,
      color:'#1C2226',
      fontWeight:'600'
       },
    btnhome:{
    alignItems:'center',
    position:'absolute',
    top:200,
    borderColor: '#1C2226',
    borderWidth:1,
    alignSelf:'center',
    backgroundColor:'white',
    width:windowWidth/1.24,
    height:windowHeight/14,
    borderRadius: 10, 
    elevation:10
    },
    iconbtnhome:{
    alignSelf:'center',
   top:8
    },
    btnsingup:{
     top:140,
     backgroundColor:'#D99C2B',
     width:windowWidth/1.28,
     height:windowHeight/14,
    borderRadius:10,
     elevation:3,
     shadowColor:'white'
    },
    inputemail:{
    width:windowWidth/1.54,
    height:windowHeight/13,
     textAlign:'left',
     marginLeft: 20,
     color:'white',
    
    },
    txtsingup:{
    alignSelf:'center',
    top: 10,
    fontSize: 22,
    color: 'white'
    },
    inputpass:{
     width:windowWidth/1.85,
     textAlign:'left',
     marginLeft: 20,
     color:'white'
     
    },
    title:{
        fontSize: 25,
        top:200,
        textAlign: 'left',
        left:40,
        color:'#D9D9D9'
    },
    iconleft:{
    marginLeft: 25,
    justifyContent:'center',
    top:-2
    },
    viewseepasswoord:{
        flexDirection:'row',
        alignItems:'center',
        height: windowHeight /12,
        color:'white',
        backgroundColor: 'rgba(28, 34, 38, 1)',
        borderWidth: 1,
        borderRadius:20,
        marginTop:10
    },
    viewemail:{
        flexDirection:'row',
        alignItems:'center',
        height: windowHeight /12,
        color:'white',
        // borderBottomWidth:1,

        backgroundColor: 'rgba(28, 34, 38, 1)',
        borderRadius:20,
        borderWidth:1
        
    },
    setvisivility:{
      width:windowWidth/20,
      marginRight:20
    }
   
  });
  

