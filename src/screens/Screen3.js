import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen3 = ({ route }) => {

    const { nombre, apellido } = route.params

    return (
        <View style={styles.container}>
            <Text>Estamos en pantalla 3</Text>
            <Text>Esta es la pantalla 3 y los datos que llegaron fueron {nombre} {apellido}</Text>
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})