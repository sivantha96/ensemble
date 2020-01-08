import React, { Component } from 'react'
import { 
    Text, 
    View,
    Button,
    TextInput,
    Image,
} from 'react-native'
import styles from './Styles'

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
            <View style={styles.appContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                        <TextInput style={styles.titleInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            placeholder= 'Untitled Section'
                            placeholderTextColor= '#fff'
                            onChangeText = {(text) => this.setState({title: text})}
                            />
                        </View>
                        <View style={styles.manyButtonContainer}>
                            <View style={styles.singleButtonContainer}>
                                <Button title='add chorus' onPress={() => this.props.navigation.navigate('NewSong', { newSection: this.state.section})}/>
                            </View>
                            <View style={styles.singleButtonContainer}>
                                
                            </View>
                            <View style={styles.singleButtonContainer}>
                                
                            </View>
                            <View style={styles.singleButtonContainer}>

                            </View>
                            <View style={styles.singleButtonContainer}>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer }>

                </View>
            </View>
        )
    }
}
