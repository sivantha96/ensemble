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
import styles from './Styles'

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
            sections: [],
        }
    }
    //options for header of the screen
    static navigationOptions = ({navigation}) => {

        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam('songTitle', 'New Song'),
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

    //executed when coming back to the NewSongScreen from the SectionEditScreen and invoke render()
    componentWillReceiveProps(nextProps){
        this.addSection(nextProps.navigation.state.params.newSection)
    }

    //add a new section to the section list
    addSection = (newSection) => {
        this.setState({
            sections: [...this.state.sections, newSection.title + " - " + newSection.instrument],
            isEmpty: false,
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

    //Render list header item - Add new section
    renderListHeader({item}){
        return (
            <View>
                <TouchableOpacity style={styles.listSectionContainer} onPress={() => 
                this.props.navigation.navigate('SectionEdit', 
                    {
                        tempo: this.state.tempo, 
                        key: this.state.key, 
                        timeSignature: this.state.timeSignature
                    }
                )}>
                    <View>
                        <View style={styles.addNewButtonContainer}>
                            <Text style={styles.addNewButton}>⊕</Text>
                        </View>
                    </View>
                    <View style={styles.listItemContainer}>
                      <Text style={styles.listItemText}>Add a new section</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator}/>
            </View>
            
        )
    }

    //render an item in the list
    renderItem({item, index}) {
        return (
            <TouchableOpacity style={styles.listSectionContainer} onPress={() => 
                this.props.navigation.navigate('SectionEdit', 
                    {
                        tempo: this.state.tempo, 
                        key: this.state.key, 
                        timeSignature: this.state.timeSignature
                    }
                )}>
                <View>
                    <View style={styles.addNewButtonContainer}>
                        <Text style={styles.addNewButton}></Text>
                    </View>
                    
                </View>
                <View style={styles.listItemContainer}>
                    <Text style={styles.listItemText}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //render the header of a section in the list
    renderHeader({section}) {
        return (
            <View style={styles.listSectionHeaderContainer}>
                <Text style={styles.listSectionHeaderText}>{section.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <StatusBar hidden={true}/>
                <View style={styles.topContainer}>
                    <View style={styles.albumArtContainer}>
                        <Image style={styles.albumArt} source={require('../../assets/albumArt.jpg')} height={'100%'}/>
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
                        <View style={styles.manyButtonContainer}>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                placeholder= 'Tempo'
                                placeholderTextColor= '#FF9500'
                                onChangeText = {(text) => this.setState({ tempo: text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                placeholder= 'Time Sig.'
                                placeholderTextColor= '#FF9500'
                                onChangeText = {(text) => this.setState({ timeSignature: text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>
                                <TextInput style={styles.buttonInput}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                returnKeyType= 'done'
                                placeholder= 'Key'
                                placeholderTextColor= '#FF9500'
                                onChangeText = {(text) => this.setState({ key: text})}
                                />
                            </View>
                            <View style={styles.singleButtonContainer}>

                            </View>
                            <View style={styles.singleButtonContainer}>

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
                        renderItem={({item,index}) => this.renderItem({item,index})}  
                        keyExtractor={(item, index) => index}
                        ListHeaderComponent={(item) => this.renderListHeader({item})}
                    />
                </View>
            </View>
        )
    }
}