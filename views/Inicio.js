import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Button, FAB, Headline, List } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import globalStyles from '../styles/global'


const Inicio = ({navigation}) => {

    const [ clientes, setClientes ] = useState([])
    const [ consultarAPI, setConsultarAPI ] = useState(true)
    
    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                if(Platform.OS === 'ios'){
                    const resultado = await axios.get('http://localhost:3000/clientes')
                    setClientes(resultado)
                    setConsultarAPI(false)
                }else if(Platform.OS === 'android'){
                    const resultado = await axios.get('http://10.0.2.2:3000/clientes')
                    setClientes(resultado)
                    setConsultarAPI(false)
                }else{
                    const resultado = await axios.get('http://192.168.0.13:3000/clientes')
                    setClientes(resultado)
                    setConsultarAPI(false)
                }
                //const resultado = await axios.get('http://192.168.0.13:3000/clientes');
                console.log(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        if(consultarAPI){
            obtenerClientesApi()
        }
        
    },[consultarAPI])
    
    return (
        <View>
            <Button
                onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI} )}
                icon='plus-circle'
            >
                Nuevo Cliente
            </Button>
            <Headline 
                style={globalStyles.titulo}
            >
                {clientes.length > 0 ? "Clientes" : "Aun no hay clientes"}
            </Headline>
            <FlatList 
                key={ cliente => (cliente.id).toSting()}
                data={clientes}
                renderItem={({item}) => (
                    <List.Item 
                        title={item.nombre}
                        description={item.empresa}
                        onPress={() => navigation.navigate("DetallesCliente",{item, setConsultarAPI})}
                    />
                )}
            />
            <FAB 
                icon='plus'
                style={globalStyles.fab}
                onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI} )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Inicio