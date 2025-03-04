import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import DetalleProducto from "./app/screens/DetalleProductos";
import Inicio from "./app/screens/Inicio";
import Registro from "./app/screens/Registro";
import LoginCuna from "./app/screens/LoginCuna";
import Monitoreo from "./app/screens/Monitoreo";
import MonitoreoMAC from "./app/screens/MonitoreoMAC";


export default function App() {
  return (
    <View style={estilos.container}>
      <MonitoreoMAC />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#EDE0D4',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})