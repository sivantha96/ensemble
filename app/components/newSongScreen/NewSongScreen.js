import React, { Component } from 'react'
import { 
    Text, 
    TextInput,
    View, 
    Image,
    StatusBar,
    Button,
    SectionList,
    TouchableOpacity,
} from 'react-native'
import {
    NavigationEvents
} from 'react-navigation'
import styles from './Styles'
import SongService from '../../services/songService'

export default class NewSongScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super(props)
        this.state = {
            headerTitle: props.navigation.getParam('titleSong', 'New Song'),
            title: "",
            timeSignature: "",
            tempo: 0,
            key: "",
            sections: [],
        }
    }

    getSectionData = () => {
        const newSection = [{ name: this.props.navigation.getParam('sectionTitle'), instrument: this.props.navigation.getParam('instrument')}]
        if (newSection[0].name == undefined) {
            
        }
        else {
            this.setState({
                sections: [... newSection]
            })
        }
        
        
    }

    // Save the new song on the database
    newSongData = async ()  => {
        try {
            const response = await SongService.addSong({
                name: this.state.title,
                duration: 45,
                tempo: this.state.tempo,
                song_key: this.state.key,
                time_signature: this.state.timeSignature
            })
            this.props.navigation.state.params.refresh()
            console.log('test componentDidMount', response.data)
            
        } catch (error) {
            console.log('error', error);
        }
    }

    //Save all changes and go to Song View Screen
    doneButton(){
        this.newSongData()
        this.props.navigation.navigate('SongView')
    }

    //render a separator line between items in the list
    renderSeparator = () => {
        return <View style={styles.separator}/>
    };

    //Discard all changes and go back
    //Should clear any changes made in the database
    cancelButton(){
        this.props.navigation.goBack()
    }



    //Render list header item - Add new section
    renderListHeader({item}){
        return (
            <View>
                <TouchableOpacity 
                    style={styles.listSectionContainer} 
                    onPress={() => this.props.navigation.navigate(
                        'SectionEdit', 
                        {
                            tempo: this.state.tempo, 
                            key: this.state.key, 
                            timeSignature: this.state.timeSignature
                        }
                    )
                }>
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
                        timeSignature: this.state.timeSignature
                    }
                )}>
                <View>
                    <View style={styles.addNewButtonContainer}>
                        <Text style={styles.addNewButton}></Text>
                    </View>
                    
                </View>
                <View style={styles.listItemContainer}>
                    <Text style={styles.listItemText}>{item.name + ' - ' + item.instrument}</Text> 
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
                            onDidFocus={payload => this.getSectionData()}
                        />
                    <StatusBar hidden={true}/>
                    <View style={styles.topContainer}>
                        <View style={styles.albumArtContainer}>
                            <Image style={styles.albumArt} source={require('../../assets/albumArt.jpg')} height={'100%'} onPress= {() => this.newSongData()} />
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
                                <View style={styles.singleButtonContainer}></View>
                                <View style={styles.singleButtonContainer}></View>
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
                            ListHeaderComponent={(item) => this.renderListHeader({item})}
                        />
                    </View>
                </View>
            </View>
        )
    }
}