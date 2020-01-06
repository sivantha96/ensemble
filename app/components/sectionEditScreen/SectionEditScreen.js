import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View, 
    Button
} from 'react-native'

export default class SectionEditScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super()
        this.state = {
            section: {
                title: "Chorus",
                timeSignature: "",
                tempo: 0,
                bars: 0,
                notationType: "",
                instrument: "",
                barsPerLine: "",
                notations: [],
            }
        }
    }

    render() {
        return (
            <View>
                <Button title='add chorus' onPress={() => this.props.navigation.navigate('NewSong', { newSection: this.state.section})}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
