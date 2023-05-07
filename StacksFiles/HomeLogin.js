import React, {useState} from 'react'
import { ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const HomeLogin = () => {
    const [selectedValue, setSelectedValue] = useState('');
    
  
    return ( 
       
        <SafeAreaView style={styles.container}>
           
            <View >
             <View style={styles.cajabtninicio}>
              <TouchableOpacity style={styles.btninicio}>
                <Text>Iniciar</Text>
              </TouchableOpacity>
              
              <View style={styles.category}>

              <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Opción 1" value="opcion1" />
        <Picker.Item label="Opción 2" value="opcion2" />
        <Picker.Item label="Opción 3" value="opcion3" />
      </Picker>
              </View>

             </View>
             <ScrollView contentContainerStyle={styles.contentContainer}>
           <View style = {styles.containerproducts}>
           

            <TouchableOpacity >
            <View style = {styles.caja}>
                <View style = {styles.cajaimg}>
                <Image style={{width:windowWidth/3.5, height:windowHeight/9, alignSelf:'center'
                 , top: 10}}  
                 source={require('../src/images/f2.png')}></Image>
                </View>
                <Text style={styles.title}>Hamburguesa</Text>
                <Text style={styles.description}>Exquisita hamburguesa de carne de res
                con cebolla, tomate y salsa al bufalo</Text>
                <Text style = {styles.price}>$12.40</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity >
            <View style = {styles.caja}>
                <View style = {styles.cajaimg}>
                <Image style={{width:windowWidth/3.5, height:windowHeight/9, alignSelf:'center'
                 , top: 10}}  
                 source={require('../src/images/f2.png')}></Image>
                </View>
                <View></View>
                <Text style={styles.title}>Hamburguesa</Text>
                <Text style={styles.description}>Exquisita hamburguesa de carne de res
                con cebolla, tomate y salsa al bufalo</Text>
                <Text style = {styles.price}>$12.40</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity >
            <View style = {styles.caja}>
                <View style = {styles.cajaimg}>
                <Image style={{width:windowWidth/3.5, height:windowHeight/9, alignSelf:'center'
                 , top: 10}}  
                 source={require('../src/images/f2.png')}></Image>
                </View>
                <View></View>
                <Text style={styles.title}>Hamburguesa</Text>
                <Text style={styles.description}>Exquisita hamburguesa de carne de res
                con cebolla, tomate y salsa al bufalo</Text>
                <Text style = {styles.price}>$12.40</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity >
            <View style = {styles.caja}>
                <View style = {styles.cajaimg}>
                <Image style={{width:windowWidth/3.5, height:windowHeight/9, alignSelf:'center'
                 , top: 10}}  
                 source={require('../src/images/f2.png')}></Image>
                </View>
                <View></View>
                <Text style={styles.title}>Hamburguesa</Text>
                <Text style={styles.description}>Exquisita hamburguesa de carne de res
                con cebolla, tomate y salsa al bufalo</Text>
                <Text style = {styles.price}>$12.40</Text>
            </View>
            </TouchableOpacity>
            
          

           </View>
           </ScrollView>
            </View>

            
        </SafeAreaView>
      
     );
}
 
export default HomeLogin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    category:{
     flexDirection:'row',
     justifyContent: 'center'
    },
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    cajabtninicio:{ 
    width: windowWidth/1,
    margin:50
    },
    btninicio:{
   backgroundColor:'red',
    height: windowHeight/15,
    width: windowWidth/2, 
    alignSelf: 'center'
    },
   containerproducts:{


   },
    caja:{
        width: windowWidth/1.2,
        height: windowHeight/3.3,
        backgroundColor: '#1C2226',
        margin:5,
        elevation: 10,
        borderRadius: 10
    },
    cajaimg:{
   backgroundColor: 'white',
   elevation: 10, 
   height: windowHeight/6,
   borderBottomLeftRadius: 25,
   borderTopLeftRadius: 10,
   borderTopRightRadius: 10
    },
    imgproduct:{
        width: windowWidth/5,
        height: windowHeight/5,
        alignContent:'center'
    },
    title:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },
    description:{
        color:'white',
        fontSize: 13,
        marginLeft: 10
    },
    price:{
        marginTop: 6,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20
    }
  });