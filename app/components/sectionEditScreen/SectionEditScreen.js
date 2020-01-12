import React, { Component } from 'react'
import { 
    Text, 
    View,
    Button,
    TextInput,
    SectionList,
    TouchableOpacity,
} from 'react-native'
import styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler'

export default class SectionEditScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            timeSignature: props.navigation.getParam('timeSignature', ''),
            tempo: props.navigation.getParam('tempo', 0),
            bars: 0,
            notationType: "",
            instrument: "",
            barsPerLine: "",
            notations: [ 
                {
                    note1: 'C',
                    note2: 'D',
                    note3: 'E',
                    note4: 'F'
                },
                {
                    note1: 'G',
                    note2: 'H',
                    note3: 'I',
                    note4: 'J'
                },
                {
                    note1: 'G',
                    note2: 'H',
                    note3: 'I',
                    note4: 'J'
                }
            ],
        }
    }


    //options for header of the screen
    static navigationOptions = ({navigation}) => {
        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam('sectionTitle', 'New Section'),
            headerTitleContainerStyle: styles.appHeaderTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.appHeaderTitle,   
            headerLeftContainerStyle: styles.appHeaderLeftContainer,
            headerRightContainerStyle: styles.appHeaderRightContainer,
            headerLeft: () => (
                <Button onPress={() => this.cancelButton({navigation})} title="Cancel" color="#FF9500"/>
            ),
            headerRight: () => (
                <Button onPress={(isEmpty) => this.doneButton({navigation})} title="Done" color="#FF9500"/>
            )
        })
    }

    //Discard all changes and go back
    static cancelButton({navigation}){
        navigation.goBack()
    }

    //Save all changes and go to Song View Screen
    static doneButton({navigation}){
        navigation.navigate('NewSong', this.state)
    }

    //Return a view of a single bar
    renderBar(bar) {
        return (
            <View style={styles.barContainer}>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note1}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note2}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note3}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note4}</Text>
                </View>
                
            </View>
        )
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
                            onChangeText = {(text) => this.setState({section: {title:text}})}
                            />
                        </View>
                        <View style={styles.manyButtonContainer}>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Bars per line'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({section: {barsPerLine:text}})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Instrument'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState(section.instrument=text)}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Notation Type'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({section: {notationType:text}})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'No. of Bars'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({section: {bars: text}})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Tempo'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({section: {tempo:text}})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Time Signature'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({section: {timeSignature:text}})}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <ScrollView>
                        <View style={styles.wrappingContainer}>
                            {
                                this.state.notations.map(bar => this.renderBar(bar))
                            
                            }
                        </View>
                    </ScrollView>
                        
                </View>
            </View>
        )
    }
}
