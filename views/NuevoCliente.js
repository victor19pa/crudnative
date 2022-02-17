import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button, Dialog, Headline, Paragraph, Portal, TextInput } from 'react-native-paper'
import globalStyles from '../styles/global'

const NuevoCliente = () => {
    //campos formulario
    const [ nombre, setNombre ] = useState('')
    const [ telefono, setTelefono ] = useState('')
    const [ correo, setCorreo ] = useState('')
    const [ empresa, setEmpresa ] = useState('')
    const [ alerta, setAlerta] = useState(false)

    const guardarCliente = async () => {
        //validacion
        if(nombre==='' || telefono==='' || correo==='' || empresa===''){
            setAlerta(true)
            return
        }

        //generar cliente
        const cliente = { nombre, telefono, correo, empresa}
        console.log('cliente: ', cliente)
        //guardar cliente en API
        try {
            // if(Platform.OS==='iOS'){
            //     await axios.post('http://localhost:3000/cliente', cliente)
            // }else if(Platform.OS==='android'){
            //     await axios.post('http://10.0.2.2:3000/clientes', cliente)
            // }else{
            //     console.log('conectado de usb')
            // }
            await axios.post('http://192.168.0.13:3000/clientes', cliente)
            //console.log(respuesta)
        } catch (error) {
            console.log('No entro, ', error)
        }
        //redireccionar

        //limpiar form
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
                onChangeText={ (texto) => setNombre(texto)}
                value={nombre}
                style={styles.input}
            />
            <TextInput 
                label='Telefono'
                placeholder='John Doe'
                onChangeText={ (texto) => setTelefono(texto)}
                value={telefono}
                style={styles.input}
            
            />
            <TextInput 
                label='Correo'
                placeholder='johndoe@email.com'
                onChangeText={ (texto) => setCorreo(texto)}
                value={correo}
                style={styles.input}
            />
            <TextInput 
                label='Empresa'
                placeholder='Nombre Empresa'
                onChangeText={ (texto) => setEmpresa(texto)}
                value={empresa}
                style={styles.input}
            />

            <Button
                icon='pencil-circle'
                mode='contained'
                onPress={() => guardarCliente()}
            >
                Guardar Cliente
            </Button>

            <Portal>
                <Dialog
                    visible={alerta}
                    onDismiss={ () => setAlerta(false)}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() => setAlerta(false)}
                        >
                            OK
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

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