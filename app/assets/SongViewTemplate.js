import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TextInput,
} from 'react-native'
import styles from './Styles'

export default class NewSongScreen extends Component {
    render() {
        return (
            <View style={styles.appContainer} /*This is the container of the full View*/>>
                <View style={styles.topContainer} /*Container of the upper section of the View*/>>
                    <View style={styles.albumArtContainer} /*Container of the Album Art*/>>
                        <Image style={styles.albumArt} source={require('../../assets/albumArt.jpg')} height={'100%'}/>
                    </View>
                    <View style={styles.infoContainer} /*Container of the information section inside the upper section of the View*/>>
                        <View style={styles.titleContainer} /*Container of the title text input*/>>
                        <TextInput style={styles.titleInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            //Enter the placeholder here
                            placeholder= 'enter here'
                            placeholderTextColor= '#fff'
                            //Set the new state here
                            onChangeText = {(text) => this.setState()}
                            />
                        </View>
                        <View style={styles.manyButtonContainer} /*Keep all these singleButtonContainers in this manyButtonContainer to maintain the layout*/>>
                            <View style={styles.singleButtonContainer} /*Container of a single button*/>>
                                <TextInput style={styles.buttonInput} /*Text input of the button type*/
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                //Enter the button placeholder here
                                placeholder= 'enter here'
                                placeholderTextColor= '#FF9500'
                                //Set the new state here
                                onChangeText = {(text) => this.setState()}
                                />
                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>>
                                
                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>>
                                
                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>>

                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}/*Container of the bottom section of the View*/> >

                </View>
            </View>
        )
    }
}
