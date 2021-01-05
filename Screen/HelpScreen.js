import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelpScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Help</Text>
        </View>
    )
}

export default HelpScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
