import React, { Component } from 'react'
import { 
    TextInput, 
    View,
    Button, 
} from 'react-native'
import styles from './Styles'

export default class BarEditScreen extends Component {
    //constructor to hold the information in the state
    state = {
            id:this.props.navigation.getParam('bar_id'),
            // section_id: props.navigation.getParam('section_id', ''),
            note_1: '',
            note_2: '',
            note_3: '',
            note_4: '',
    }

    //options for header of the screen
    static navigationOptions = ({navigation}) => {

        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: 'Bar Editor',
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
    navigation.navigate('SectionEdit')
}

    render() {
        return (
            <View style={styles.appContainer}>
                <View style={styles.freeSpace}/>
                <View style={styles.barEditContainer}>
                    <View style={styles.noteContainer}>
                        <TextInput 
                            style={styles.noteInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            onChangeText= { (text) => this.setState({note_1:text})}
                        />
                    </View>
                    <View style={styles.noteContainer}>
                        <TextInput 
                            style={styles.noteInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            onChangeText= { (text) => this.setState({note_2:text})}
                        />
                    </View>
                    <View style={styles.noteContainer}>
                        <TextInput 
                            style={styles.noteInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            onChangeText= { (text) => this.setState({note_3:text})}
                        />
                    </View>
                    <View style={styles.noteContainer}>
                        <TextInput 
                            style={styles.noteInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            onChangeText= { (text) => this.setState({note_4:text})}
                        />
                    </View>
                </View>
                <View style={styles.freeSpace}/>
            </View>
        )
    }
}