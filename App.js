import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './TabsFiles/Home';
import Tabs from './Navs/Tabs';
import Stacks from './Navs/Stacks';
import Prueba from './prueba';
export default function App() {
  return (
  <Prueba></Prueba>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
