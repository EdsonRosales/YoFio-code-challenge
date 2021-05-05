import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ErrorMessage({ error, visible }) {
    if (!error || !visible) {
        return null;
    }

    return (
        <View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red",
    }
})
