import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const Prueba = () => {

    
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
          const response = await fetch('http://34.125.167.88/api/resource/ProductoVenta?fields=["*"]', {
            headers: {
              'Authorization': 'token a796e0fa2d12433:9fbfd031ca8405a'
            }
          });
          const data = await response.json();
          console.log(data);
          setData(data)
          // Aquí puedes realizar las operaciones necesarias con los datos recibidos
        } catch (error) {
          console.log('Error:', error);
    
          // Maneja el error de la solicitud
        }
       
    
      }
   
      useEffect(() => {
        fetchData();
      }, []);

    return (  
         <View>
  {data && data.map((item, i) => (
      <View key={i}>
        <Text>{item.nombre_producto}</Text>
      </View>
    ))}
    </View>
    );
}
 
export default Prueba;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  