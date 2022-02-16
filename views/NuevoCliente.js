import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Headline, TextInput } from 'react-native-paper'
import globalStyles from '../styles/global'

const NuevoCliente = () => {
    //campos formulario
    const [ nombre, setNombre ] = useState('')
    const [ telefono, setTelefono ] = useState('')
    const [ correo, setCorreo ] = useState('')
    const [ empresa, setEmpresa ] = useState('')
    

    const leerNombre = () => {
        console.log('escribiendo')
    }

    return (
        <View style={globalStyles.contenedor}>
             
            <Headline 
                style={globalStyles.titulo}
            >
                Añadir nuevo cliente
            </Headline>

            <TextInput 
                label='Nombre'
                placeholder='John Doe'
                onChangeText={ () => leerNombre()}
                style={styles.input}
            />
            <TextInput 
                label='Telefono'
                placeholder='John Doe'
                onChangeText={ () => leerNombre()}
                style={styles.input}
            />
            <TextInput 
                label='Correo'
                placeholder='johndoe@email.com'
                onChangeText={ () => leerNombre()}
                style={styles.input}
            />
            <TextInput 
                label='Empresa'
                placeholder='Nombre Empresa'
                onChangeText={ () => leerNombre()}
                style={styles.input}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})

export default NuevoCliente