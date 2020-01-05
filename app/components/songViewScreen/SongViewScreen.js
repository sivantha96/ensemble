import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'

SafeAreaView.setStatusBarHeight(0)


export default class SongViewScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        
    }
})
