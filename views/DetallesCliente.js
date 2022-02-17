import axios from 'axios'
import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, Headline, Subheading } from 'react-native-paper'
import globalStyles from '../styles/global'

const DetallesCliente = ({navigation, route}) => {
    
    const { setConsultarAPI } = route.params

    const { nombre, telefono, correo, empresa, id } = route.params.item

    const mostrarConfirmacion=()=>{
        Alert.alert(
            'Deseas Eliminar?',
            'Un contacto eliminado no se puede recuperar',
            [
                {text: 'Si, eliminar', onPress: () => eliminarContacto()},
                {text: 'Cancelar', style: 'cancel'}
            ]
        )
    }
    const eliminarContacto = async () => {
        const url = `http://192.168.0.13:3000/clientes/${id}`
        try {
            await axios.delete(url)
        } catch (error) {
            console.log(error)
        }

        navigation.navigate('Inicio')

        setConsultarAPI(true)
    }

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>Empresa: <Subheading>{empresa}</Subheading></Text>
            <Text style={styles.texto}>Correo: <Subheading>{correo}</Subheading></Text>
            <Text style={styles.texto}>Telefono: <Subheading>{telefono}</Subheading></Text>

            <Button
                mode='contained'
                icon='cancel'
                style={styles.boton}
                onPress={() => mostrarConfirmacion()}
            >
                Eliminar Cliente
            </Button>

            <FAB 
                icon='pencil'
                style={globalStyles.fab}
                onPress={() => navigation.navigate('NuevoCliente', {cliente: route.params.item, setConsultarAPI} )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        marginBottom: 20,
        fontSize: 18
    },
    boton:{
        marginTop: 100,
        backgroundColor: 'red'
    }
})

export default DetallesCliente