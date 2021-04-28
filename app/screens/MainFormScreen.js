import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements';
import Screen from '../components/basicComponents/Screen';
import colors from '../config/colors'

export default function MainFormScreen() {
    return (
        <Screen>
            <View style={{ flex: 1, backgroundColor:"blue" }} >
                <Header
                    centerComponent={{ text: 'FORMULARIO', style: { color: '#fff', fontWeight: 'bold' } }}
                    backgroundColor={"blue"}
                />

                <View style={{flexDirection:"column"}}>

                    <View style={styles.container} >
                        <TextInput placeholder="Nombre" style={[styles.shadowBox, styles.containerInput]} />
                        <TextInput placeholder="Email" style={[styles.shadowBox, styles.containerInput]} />
                    </View>

                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        backgroundColor:"white",
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    shadowBox: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "red",
    },
    containerInput: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 40,
        borderRadius: 5,
        width: "100%",
        backgroundColor: colors.white,
        marginBottom: 15,
        marginTop:20
    },
})
