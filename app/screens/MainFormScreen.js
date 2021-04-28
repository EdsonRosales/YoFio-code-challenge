import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Screen from '../components/basicComponents/Screen';
import colors from '../config/colors'

export default function MainFormScreen() {
    return (
        <Screen>
            <View style={{ flex: 1, backgroundColor: "red" }} >
                <View style={styles.container} >
                    <TextInput placeholder="Nombre" style={[styles.shadowBox, styles.containerInput]} />
                    <TextInput placeholder="Email" style={[styles.shadowBox, styles.containerInput]} />
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 30,
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
    },
})
