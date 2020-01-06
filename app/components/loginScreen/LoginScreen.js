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
import SongService from '../../services/songService'

export default class LoginScreen extends React.Component {
    //because we want to save information in the state of the class
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
        }
    }

    componentDidMount() {
        try {
            const response = SongService.getSongs()
            console.log('test componentDidMount', response.then(
                (value) => {console.log(value);
                }
            ))
            
        } catch (error) {
            console.log('error', error);
            
        }
      
    }

    logIn() {
        if(this.state.username === 'admin' && this.state.password === 'admin')
            //navigate to the Library Screen using the 'navigation' prop that was passed to this instance(LoginScreen)
            return this.props.navigation.navigate('Library')
        else{
            Alert.alert('Incorrect!', 'Username of password is incorrect. Please try again.')
        }
    }

    render() {
        return (
            //Fix the issue that keyboard covers the text input field
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.whiteHeading}>Log in to your Account</Text>
                <View height={20}><Text>test</Text></View>
               
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Email'
                    placeholderTextColor='black' 
                    //should save the input data in the state of the class instance
                    onChangeText={text => this.setState({username: text})} 
                    keyboardType='email-address' 
                    returnKeyType='done'
                    enablesReturnKeyAutomatically = {true}
                    clearButtonMode= 'while-editing'
                    selectTextOnFocus= {true}
                    selectionColor='#FF9500'
                    keyboardAppearance= 'dark'
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Password' 
                    placeholderTextColor='black' 
                    //should save the input data in the state of the class instance
                    onChangeText={text => this.setState({password: text})} 
                    secureTextEntry={true} returnKeyType='done'
                    blurOnSubmit={true}
                    clearButtonMode= 'while-editing'
                    selectTextOnFocus= {true}
                    selectionColor='#FF9500'
                    enablesReturnKeyAutomatically = {true}
                    keyboardAppearance= 'dark'
                />
               {/* should validate the user */}
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

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    whiteHeading: {
        fontSize: 30,
        color: '#fff',
    },
    whiteBody:{
        color: '#fff',
        fontSize: 20,
    },
    blackBody:{
        color: 'black',
        fontSize: 20,
    },
    textInput: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems:'center',
        width: DEVICE_WIDTH - (DEVICE_WIDTH/3),
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#dedad9',
        margin: 5
    },
    button: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems:'center',
        fontSize: 15,
        width: DEVICE_WIDTH - (3*DEVICE_WIDTH/5),
        height: 40,
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#dedad9',
        margin: 5
    },
    container: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
