import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useState } from 'react';

const MonitoreoMAC = () => {
    const [macReal, setMacReal] = useState('');
    const [macConfirm, setMacConfirm] = useState('');
    const [message, setMessage] = useState('');

    const obtenerMac = () => {
        const mac = '00:14:22:01:23:45';
        setMacReal(mac);
        setMacConfirm('');
        setMessage('');
    };

    const confirmarMac = () => {
        if (macConfirm === macReal) {
            setMessage('¡La dirección MAC ha sido confirmada correctamente!');
        } else {
            setMessage('¡La dirección MAC no coincide! Intenta de nuevo.');
        }
    };

    return (
        <ScrollView contentContainerStyle={estilos.contentContainer}>
            <View style={estilos.header}>
                <Text style={estilos.titulocam}>Verificación de Dirección MAC del Dispositivo IoT </Text>
            </View>
            <View style={estilos.line} />

            <View style={estilos.container}>
                <Text style={estilos.titulo}>Dirección MAC del dispositivo IoT:</Text>
                <TextInput
                    style={estilos.input}
                    value={macReal}
                    editable={false}
                    placeholder="MAC del dispositivo"
                />

                <Text style={estilos.titulo}>Confirmar Dirección MAC IoT:</Text>
                <TextInput
                    style={estilos.input}
                    value={macConfirm}
                    onChangeText={setMacConfirm}
                    placeholder="Confirma la MAC"
                />

                <View style={estilos.buttonContainer}>
                    <Text style={estilos.button} onPress={obtenerMac}>Obtener MAC</Text>
                    <Text style={estilos.buttonConfirm} onPress={confirmarMac}>Confirmar</Text>
                </View>

                {message && (
                    <Text style={macConfirm === macReal ? estilos.successMessage : estilos.errorMessage}>
                        {message}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
}

export default MonitoreoMAC;

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        padding: 16,
    },
    contentContainer: {
        paddingVertical: 8,
    },
    header: {
        backgroundColor: '#2196F3', 
        padding: 16,
        alignItems: 'center',
    },
    titulocam: {
        fontSize: 18,
        color: 'white', 
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 20,
        color: '#2196F3',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        textAlign: 'center',
    },
    buttonConfirm: {
        backgroundColor: '#28a745',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        textAlign: 'center',
    },
    line: {
        height: 1,
        backgroundColor: '#BDBDBD',
        marginVertical: 16,
    },
    successMessage: {
        color: 'green',
        textAlign: 'center',
        fontSize: 16,
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
    },
});