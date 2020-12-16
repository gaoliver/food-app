import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={{marginBottom: 20}}>The Meal Detail Screen</Text>
            <Button title="Back to Categories" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
