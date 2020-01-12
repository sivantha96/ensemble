import React, { Component } from 'react'
import { 
    Text, 
    View,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import styles from './Styles'

export default class SectionEditScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super(props)
        this.state = {
            section_id: null,
            title: "",
            timeSignature: props.navigation.getParam('timeSignature', ''),
            tempo: props.navigation.getParam('tempo', 0),
            noOfBars: 0,
            notationType: "",
            instrument: "",
            barsPerLine: "",
            bars: [
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

    // //Get all bars related to this section
    // getBarData = async () => {
    //     try {
    //         const response = await BarService.getAllBars(sectionId)
    //         this.setState({
    //             bars: [... response.data]
    //         })
            
    //     } catch (error) {
    //         console.log('error' , error)
            
    //     }
    // }

    //Executed after mounting
    componentDidMount() {
        this.props.navigation.setParams({doneButton: this.doneButton, cancelButton: this.cancelButton})
        //this.getBarData()
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
            <TouchableOpacity key={bar.id} style={styles.barContainer} onPress={() => this.props.navigation.navigate('BarEdit', {bar_id:bar.id, section_id:this.state.section_id})}>
                <View style={styles.noteContainer}>
                    <Text  style={styles.noteText}>{bar.note_1}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note_2}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note_3}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note_4}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //Set the number of Bars
    //Create empty bars under the id of this section
    setBars(text) {
        const newBars = []
        for (let i = 0; i < text; i++) {
            newBars.push({
                id: i,
                section_id: this.state.section_id,
                note_1: '-',
                note_2: '-',
                note_3: '-',
                note_4: '-',})
        }
        this.setState({noOfBars: text, bars: [... newBars]})
        console.log(this.state.bars)
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
                                onChangeText = {(text) => this.setState({title:text})}
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
                                    onChangeText = {(text) => this.setState({barsPerLine:text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Instrument'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({instrument:text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Notation Type'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({notationType:text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'No. of Bars'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setBars(text)}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Tempo'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({tempo:text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    placeholder= 'Time Signature'
                                    placeholderTextColor= '#FF9500'
                                    onChangeText = {(text) => this.setState({timeSignature:text})}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <ScrollView>
                        <View style={styles.wrappingContainer}>
                            {this.state.bars.map(bar => this.renderBar(bar))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}