import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native'

export default class NewSongScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.albumArtContainer}>

                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <View style={{flex:1, backgroundColor: 'red'}}/>
                        </View>
                        <View style={styles.buttonContainer}>
                        <View style={{flex:1, backgroundColor: 'red'}}/>
                        </View>
                    </View>

                </View>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
    },
    topContainer: {
        flex:1,
        flexGrow:1,
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    bottomContainer: {
        flex:1,
        flexGrow:1,
        flexDirection: 'column',
        backgroundColor: 'orange'
    },
    albumArtContainer: {
        aspectRatio: 1,
        height: '100%',
        backgroundColor: 'red'
    },
    //contains titleContainer and buttonsContainer
    infoContainer: {
        flex:1,
        backgroundColor: 'green',
        flexDirection: 'column',
    },
    titleContainer: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'purple'
    },
    //contains time-signature, key, tempo
    buttonContainer: {
        flex:1,
        flexDirection: 'row-reverse',
        padding: 10,
        backgroundColor: 'pink'
    }
})
