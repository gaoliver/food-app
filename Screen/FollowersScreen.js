import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FollowersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Followers</Text>
        </View>
    )
}

export default FollowersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
