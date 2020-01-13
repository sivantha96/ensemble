import React, { Component } from 'react'
import { 
    TextInput, 
    View,
    Button, 
    Text,
} from 'react-native'
import styles from './Styles'
import {
    NavigationEvents
} from 'react-navigation'

export default class BarEditScreen extends Component {
    //constructor to hold the information in the state
    state = {
            headerTitle: 'Edit Bar',
            id:this.props.navigation.getParam('bar_id'),
            note_1: '',
            note_2: '',
            note_3: '',
            note_4: '',
    }

    static navigationOptions = {
        header: null,
    };

   //Discard all changes and go back
   cancelButton(){
        navigation.goBack()
    }

    //Save all changes and go to Song View Screen
    doneButton(){
        navigation.navigate('SectionEdit')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appHeaderContainer}>
                    <View style={styles.appHeaderLeftContainer}>
                        <Button onPress={() => this.cancelButton()} title="Cancel" color="#FF9500"/>
                    </View>
                    <View  style={styles.appHeaderTitleContainer}>
                        <Text style={styles.appHeaderTitle}>{this.state.headerTitle}</Text>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                        <Button onPress={() => this.doneButton()} title="Done" color="#FF9500"/>
                    </View>
                </View>
                <View style={styles.appContainer}>
                    <NavigationEvents
                        //Refresh here
                        // onDidFocus={payload => this.getSectionData()}
                    />
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
        </View>
            
        )
    }
}
