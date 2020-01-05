import React, { Component } from 'react'
import { 
    Text, 
    TextInput,
    StyleSheet, 
    View, 
    Image,
    StatusBar,
    Button,
    SectionList,
    TouchableOpacity,
} from 'react-native'
import {SafeAreaView} from 'react-navigation'


export default class NewSongScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super()
        this.state = {
            title: "",
            timeSignature: "",
            tempo: 0,
            key: "",
            albumArt: "",
            sections: [ 
                'Intro - Box Guitar',
                'Intro - Rhythm Guitar',
                'Chorus - Lead Guitar',
                'Chorus - Keyboard',
                'Verse - Violin',
                'Verse - Flute',
            ],
        }
    }

    //options for header of the screen
    static navigationOptions = ({navigation}) => {
        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam('titleParam', 'New Song'),
            headerTitleContainerStyle: styles.headerTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitle,
            headerLeftContainerStyle: styles.headerLeftContainer,
            headerRightContainerStyle: styles.headerRightContainer,
            headerLeft: () => (
                <Button onPress={() => this.cancelButton({navigation})} title="Cancel" color="#FF9500"/>
            ),
            headerRight: () => (
                <Button onPress={() => this.doneButton({navigation})} title="Done" color="#FF9500"/>
            )
        })
    }

    //Discard all changes and go back
    static cancelButton({navigation}){
        navigation.goBack()
    }

    //Save all changes and go to Song View Screen
    static doneButton({navigation}){
        navigation.navigate('SongView')
    }

    //render a separator line between items in the list
    renderSeparator = () => {
        return <View style={styles.separator}/>
    };

    //render an item in the list
    renderItem({item}) {
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate('SectionEdit')}>
                <Text style={styles.itemText}>{item}</Text> 
            </TouchableOpacity>
        )
    }

    //render the header of a section in the list
    renderHeader({section}) {
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.topContainer}>
                    <View style={styles.albumArtContainer}>
                        <Image style={styles.image} source={require('../../assets/albumArt.jpg')} height={'100%'}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <TextInput style={styles.titleInput}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            placeholder= 'Untitled Song'
                            placeholderTextColor= '#fff'
                            onChangeText = {(text) => this.setState({ title: text})}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttons}>
                                <TextInput style={styles.buttonInput}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                placeholder= 'Tempo'
                                placeholderTextColor= '#FF9500'
                                onChangeText = {(text) => this.setState({ tempo: text})}
                                />
                            </View>
                            <View style={styles.buttons}>
                                <TextInput style={styles.buttonInput}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                placeholder= 'Time Sig.'
                                placeholderTextColor= '#FF9500'
                                onChangeText = {(text) => this.setState({ timeSignature: text})}
                                />
                            </View>
                            <View style={styles.buttons}>
                                <TextInput style={styles.buttonInput}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                placeholder= 'Key'
                                placeholderTextColor= '#FF9500'
                                onChangeText = {(text) => this.setState({ key: text})}
                                />
                            </View>
                            <View style={styles.buttons}>

                            </View>
                            <View style={styles.buttons}>

                            </View>
                        </View>
                    </View> 
                </View>
                <View style={styles.bottomContainer}>
                     
                    <SectionList
                        sections={[
                            {
                                title: '',
                                data: this.state.sections
                            }
                        ]}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={({item}) => this.renderItem({item})}  
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
    },
    topContainer: {
        flex:4,
        flexDirection: 'row',
        borderBottomColor: '#707070',
        borderBottomWidth: 0.5,
    },
    bottomContainer: {
        flex:5,
        flexDirection: 'column',
    },
    //container of the album art of the song
    albumArtContainer: {
        padding: 10,
        aspectRatio: 1,
        height: '100%',
    },
    //container of titleContainer and buttonsContainer
    infoContainer: {
        flex:1,
        flexDirection: 'column',
    },
    //container of the title of the song
    titleContainer: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
    },
    //container time-signature, key, tempo of the song
    buttonContainer: {
        flex:1,
        flexDirection: 'row-reverse',
        padding: 10,
    },
    //image style
    image: {
        aspectRatio: 1,
        borderRadius: 10,
    },
    headerTitleContainer: {
        alignItems: 'center'
    },
    headerTitle: {
        color: '#FF9500',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerLeftContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRightContainer: {
        marginRight: 10,
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    titleInput: {
        fontSize: 25,
        color: '#fff',
    },
    buttons: {
        marginLeft: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonInput: {
        width: '100%',
        aspectRatio: 2,
        padding:5,
        textAlign: 'center',
        borderColor: '#FF9500', 
        borderWidth: 1, 
        color: '#FF9500',
        borderRadius: 5
    },
    separator: {
        flex:1, 
        height:0.5, 
        width: '100%', 
        backgroundColor: '#707070', 
        opacity: 50
    },
    listItem: {
        flex: 1, 
        height: '100%', 
        width: '100%', 
        backgroundColor: 'black'
    },
    sectionHeader: {
        flex:1, 
        backgroundColor: 'black'
    },
    sectionHeaderText: {
        fontSize: 30,
        padding: 10, 
        color: '#fff',
        fontWeight: 'bold',
    },
    itemText: {
        fontSize: 17,
        padding: 15,  
        color: '#fff'
    },  


    

})
