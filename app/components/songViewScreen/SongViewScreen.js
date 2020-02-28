import React, { Component } from 'react'
import { 
    Text, 
    View,
    Image,
    Button,
    SectionList,
    TouchableOpacity
} from 'react-native'
import styles from './Styles'
import {
    NavigationEvents
} from 'react-navigation'
import SongService from '../../services/songService'

export default class SongViewScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songId: props.navigation.getParam('songId'),
            songName: props.navigation.getParam('songTitle'),
            timeSignature:props.navigation.getParam('time_signature'),
            tempo: props.navigation.getParam('tempo'),
            key:props.navigation.getParam('song_key'),
            sections:[
                {
                    name: 'Intro',
                    instrument: 'Guitar'
                },
                {
                    name: 'Chorus',
                    instrument: 'Guitar'
                },
                {
                    name: 'Verse 1',
                    instrument: 'Guitar'
                },
                {
                    name: 'Inter 1',
                    instrument: 'Guitar'
                },
                {
                    name: 'Verse 2',
                    instrument: 'Guitar'
                },
                {
                    name: 'Inter 2',
                    instrument: 'Guitar'
                },
                {
                    name: 'Chorus',
                    instrument: 'Guitar'
                }
            ]
        }
    }

    // //Executed after mounting
    // componentDidMount(){ 
    //     this.getSongData(this.state.songId)
    // }

    // //Get all songs
    // getSongData = async ()  => {
    //     try {
    //         const response = await SongService.getSong(16)
    //         this.setState({
    //             songName: response.data.name,
    //             timeSignature: '4/4',
    //             tempo: response.data.tempo,
    //             key: response.data.song_key,
    //         })
    //         console.log('test componentDidMount', response.data)
            
    //     } catch (error) {
    //         console.log('error ', error);
    //     }
    // }

    //options for header of the screen
    static navigationOptions = {
        header: null,
    };

    //Go back to home 
    homeButton(){
        this.props.navigation.navigate('Library')
    }

    //Go to New Song screen
    editButton(){
        this.props.navigation.navigate('NewSong')
    }

    //render a separator line between items in the list
    renderSeparator = () => {
        return <View style={styles.separator}/>
    }

    //render an item in the list
    renderItem({item}) {
        return (
            <TouchableOpacity style={styles.listSectionContainer} onPress={() => 
                this.props.navigation.navigate('SectionView', 
                    {
                        tempo: this.state.tempo, 
                        time_signature: this.state.timeSignature,
                        instrument: item.instrument,
                        section_title: item.name,
                    }
                )}>
                <View style={styles.listItemContainer}>
                    <Text style={styles.listItemText}>{item.name + ' - ' + item.instrument}</Text> 
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appHeaderContainer}>
                    <View style={styles.appHeaderLeftContainer}>
                        <Button onPress={() => this.homeButton()} title="Home" color="#FF9500"/>
                    </View>
                    <View  style={styles.appHeaderTitleContainer}>
                        <Text style={styles.appHeaderTitle}>{''}</Text>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                        <Button onPress={() => this.editButton()} title="Edit" color="#FF9500"/>
                    </View>
                </View>
                <View style={styles.appContainer}>
                    <NavigationEvents
                            //Refresh here
                            // onDidFocus={payload => this.getSectionData()}
                    />
                    <View style={styles.topContainer}>
                        <View style={styles.albumArtContainer}>
                            <Image style={styles.albumArt} source={require('../../assets/albumArt.jpg')} height={'100%'}/>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.titleContainer}>
                                <View >  
                                    <Text style={styles.titleInput}>{this.state.songName}</Text>
                                </View>
                                <View>
                                    <Text style={{color:"white"}}>
                                            {this.state.key + " | " + this.state.tempo + " | " + this.state.timeSignature}
                                    </Text>    
                                </View>
                            </View>
                            <View style={styles.manyButtonContainer}>
                                <View style={styles.singleButtonContainer} >
                                    <TouchableOpacity  style={styles.buttonInput} onPress={() => this.props.navigation.navigate("NowPlaying")} >
                                        <Text style={{color:"#FF9500"}}>{'Play'}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    
                                </View>
                                <View style={styles.singleButtonContainer}>

                                </View>
                                <View style={styles.singleButtonContainer}>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer} >
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
                            
                        />
                    </View>
                </View>
            </View>
           
        )
    }
}
