import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet,
    View,
    Button, 
} from 'react-native'

import styles from './Styles'
import { TextInput } from 'react-native-gesture-handler'


export default class BarEditScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super()
        this.state = {
            barNumber: 0,

        }
    }

    //options for header of the screen
    static navigationOptions = ({navigation}) => {

        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam("Bar"+'barNumber','Bar 0'),
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
                <View style={styles.topContainer}>

                </View>
                
                <View style={styles.barEditContainer}>
                    <View>
                        <TextInput style={styles.barEditText}>
                            "1"
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.barEditText}>
                            "2"
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.barEditText}>
                            "3"
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.barEditText}>
                            "4"
                        </TextInput>
                    </View>

                </View>
                
                <View style={styles.topContainer}>

                </View>

            </View>
            
        )
    }
}


