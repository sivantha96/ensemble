import React from 'react'
import {
    Text,
    View,
    Button,
    StatusBar,
    SectionList,
    TouchableOpacity,
} from 'react-native'
import styles from './Styles'
import { 
    SafeAreaView,
    NavigationEvents,
 } from 'react-navigation'
import SongService from '../../services/songService'

SafeAreaView.setStatusBarHeight(0);

export default class LibraryScreen extends React.Component {
    //constructor to hold the information in the state
    constructor (props) {
        super(props)
        this.state = {
            title: 'Library',
            songs: [
            ],
        } 
    }

    //Executed after mounting
    componentDidMount(){ 
        this.getSongData()
    }

    //Get all songs
    getSongData = async ()  => {
        try {
            const response = await SongService.getAllSongs()
            this.setState({
                songs: [... response.data]
            })
            console.log('test componentDidMount', response.data)
            
        } catch (error) {
            console.log('error', error);
        }
    }

    //render a separator line between items in the list
    renderSeparator = () => {
        return <View style={styles.separator}/>
    };

    //render an item in the list
    renderItem({item}) {
        return (
            <TouchableOpacity style={styles.listItemContainer} onPress={() => this.props.navigation.navigate('SongView', {refresh: () => this.getSongData()})}>
                <Text style={styles.listItemText}>{item.name}</Text> 
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
                        </View>
                        <View  style={styles.appHeaderTitleContainer}>
                            <Text style={styles.appHeaderTitle}>{this.state.title}</Text>
                        </View>
                        <View  style={styles.appHeaderRightContainer}>
                            <Button onPress={() => this.props.navigation.navigate('NewSong')} title="New Song" color="#FF9500"/>
                        </View>
                    </View>
                    <View style={styles.appContainer}>
                    
                    <NavigationEvents
                        onDidFocus={payload => this.getSongData()}
                    />
                    
                    <StatusBar hidden={true}/>
                    <SectionList
                        sections={[  
                            {
                                title: 'Songs', 
                                data: this.state.songs,
                            },
                        ]}  
                        renderItem={({item}) => this.renderItem({item})}  
                        renderSectionHeader={({section}) => this.renderHeader({section})} 
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    /> 
                </View>
            </View>
        )
    }
}