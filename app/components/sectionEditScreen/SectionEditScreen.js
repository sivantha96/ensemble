import React, { Component } from 'react'
import { 
    Text, 
    View,
    Button,
    TextInput,
    Image,
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
                    name: "test"
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
        navigation.navigate('NewSong')
    }

    //render a separator line between items in the list
    renderSeparator = () => {
        return <View style={styles.separator}/>
    };

    renderBar({item}) {
        return (
            <View style={styles.noteContainer}>
                <Text style={styles.noteText}>{item.name}</Text>
            </View>
        )
    }

    //render an item in the list
    renderItem({item, index}) {
        num = index
        return (
            <View style={styles.listSectionContainer}>
               <TouchableOpacity style={styles.sectionBarContainer} onPress={() => alert("Bar 1")}>
                    {({item}) => this.renderBar({item})}
               </TouchableOpacity>
               <TouchableOpacity style={styles.sectionBarContainer} onPress={() => alert("Bar 2")}>

               </TouchableOpacity>
               <TouchableOpacity style={styles.sectionBarContainer} onPress={() => alert("Bar 3")}>

               </TouchableOpacity>
               <TouchableOpacity style={styles.sectionBarContainer} onPress={() => alert("Bar 4")}>

               </TouchableOpacity>
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
                    <SectionList
                        sections={[
                            {
                                title: '',
                                data: this.state.section.notations
                            }
                        ]}
                        renderItem={(item,index) => this.renderItem({item,index})}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        )
    }
}
