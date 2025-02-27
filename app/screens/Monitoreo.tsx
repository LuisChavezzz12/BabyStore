import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from 'react';

const Monitoreo = () => {
    return (
        <ScrollView contentContainerStyle={estilos.contentContainer}>
            <View style={estilos.header}>
                <Image
                    source={require('../../assets/babystore.png')}
                    style={estilos.imagenHeader}
                />
                <Text style={estilos.titulocam}>Bienvenido a BabyStore</Text>
            </View>
            <View style={estilos.line} />
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Monitorea a Tu Bebé</Text>
                <View style={estilos.dataContainer}>
                    <View style={estilos.dataBox}>
                        <Text style={estilos.subtitulo}>Temperatura</Text>
                        <Text style={estilos.num}>30°C</Text>
                    </View>
                    <View style={estilos.dataBox}>
                        <Text style={estilos.subtitulo}>Humedad</Text>
                        <Text style={estilos.num}>50%</Text>
                    </View>
                    <View style={estilos.dataBox}>
                        <Text style={estilos.subtitulo}>Carrusel</Text>
                    </View>
                    <View style={estilos.dataBox}>
                        <Text style={estilos.subtitulo}>Motor</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Monitoreo;

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
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    imagenHeader: {
        width: 50, 
        height: 50, 
        marginRight: 10, 
        borderRadius: 16, 
    },
    titulocam: {
        fontSize: 18,
        color: 'white', 
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 24,
        textAlign: 'center',
        color: '#2196F3',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitulo: {
        textAlign: 'center',
        color: '#2196F3',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dataContainer: {
        alignItems: 'center', 
    },
    dataBox: {
        borderWidth: 1,
        borderColor: '#BDBDBD', 
        borderRadius: 10,
        padding: 16,
        width: '80%', 
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#E3F2FD',
    },
    line: {
        height: 1,
        backgroundColor: '#BDBDBD',
        marginVertical: 16,
    },
    num: {
        textAlign: 'center',
        color: '#000000', 
        fontSize: 15,
        fontWeight: 'bold',
    },
});