import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View, Button
} from 'react-native'
import styles from './Styles'

export default class NowPlayingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static navigationOptions = {
        header: null,
        };


    //Discard all changes and go back
    //Should clear any changes made in the database
    homeButton(){
        this.props.navigation.goBack()
    }

    //Save all changes and go to Song View Screen
    doneButton(){
        this.newSongData()
        this.props.navigation.navigate('SongView')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appHeaderContainer}>
                    <View style={styles.appHeaderLeftContainer}>
                        <Button onPress={() => this.homeButton()} title="〈 Home" color="#FF9500"/>
                    </View>
                    <View  style={styles.appHeaderMiddleContainer}>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>02:52</Text>
                            <Text style={{color: 'white'}}>Duration</Text>
                        </View>
                        <View style={styles.controlContainer}>
                            <View style={styles.songNameContainer}>
                                <Text style={{color: 'white', textAlign: 'center',}}>Song Name Goes Here</Text>
                            </View>
                            <View style={styles.controls}></View>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>252</Text>
                            <Text style={{color: 'white'}}>Tempo</Text>
                        </View>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                       <View style={styles.metronomeContainer}>
                            <Text style={styles.metronomeText}>3</Text>
                       </View>
                    </View>
                </View>
                <View style={styles.appContainer}>
                    <View style={styles.topLineContainer}></View>
                    <View style={styles.middleLineContainer}></View>
                    <View style={styles.bottomLineContainer}></View>
                </View>
            </View>
        )
    }
}
