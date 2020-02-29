import React from 'react'
import { 
    Text, 
    TextInput, 
    StyleSheet, 
    View, 
    Alert,
    Dimensions, 
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native'
import styles from './Styles'

export default class LoginScreen extends React.Component {
    //constructor to hold the information in the state
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
        }
    }

    //function to validate the user
    logIn() {
        if(this.state.username === 'admin' && this.state.password === 'admin')
            //navigate to the Library Screen using the 'navigation' prop that was passed to this instance(LoginScreen)
            return this.props.navigation.navigate('Library')
        else{
            //display an alert for incorrect password or email
            Alert.alert('Incorrect!', 'Username of password is incorrect. Please try again.')
        }
    }

    render() {
        return (
            //KeyboardAvoidingView - Fix the issue that keyboard covers the text input field
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.whiteSubject}>Log in to your Account</Text>
                <View height={20}></View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Email'
                    placeholderTextColor='black' 
                    /*should save the input data in the state of the class instance*/
                    onChangeText={text => this.setState({username: text})} 
                    keyboardType='email-address' 
                    returnKeyType='done'
                    enablesReturnKeyAutomatically = {true}
                    clearButtonMode= 'while-editing'
                    autoCompleteType = 'off'
                    selectTextOnFocus= {true}
                    selectionColor='#FF9500'
                    keyboardAppearance= 'dark'
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Password' 
                    placeholderTextColor='black' 
                    autoCompleteType = 'off'
                    /*should save the input data in the state of the class instance*/
                    onChangeText={text => this.setState({password: text})} 
                    secureTextEntry={true} returnKeyType='done'
                    blurOnSubmit={true}
                    clearButtonMode= 'while-editing'
                    selectTextOnFocus= {true}
                    selectionColor='#FF9500'
                    enablesReturnKeyAutomatically = {true}
                    keyboardAppearance= 'dark'
                />
                <TouchableOpacity style={styles.button} onPress={() => this.logIn()}>
                    <Text style={styles.blackBody}>Log in</Text>
                </TouchableOpacity>
                <View height={20}></View>
                <Text style={styles.whiteBody} accessibilityRole='button' onPress={() => console.log('forgot password')}>Forgot Password?</Text>
                <Text style={styles.whiteBody} accessibilityRole='button' onPress={() => console.log('create new account')}>Create New Account</Text>
            </KeyboardAvoidingView>
        )
    }
}