import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
    SectionList,
    TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import SongService from '../../services/songService'

SafeAreaView.setStatusBarHeight(0);

export default class LibraryScreen extends React.Component {
    //constructor to hold the information in the state
    constructor (props) {
        super(props)
        this.state = {
            songs: [
            ],
        } 
    }

    

    componentDidMount(){ 
        this.getSongData()
    }

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

    static navigationOptions = ({ navigation }) => {
        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: 'Library',
            headerTitleContainerStyle: styles.appHeaderTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.appHeaderTitle,
            headerLeftContainerStyle: styles.appHeaderLeftContainer,
            headerRightContainerStyle: styles.appHeaderRightContainer,
            headerRight: () => (
                <Button onPress={() => navigation.navigate('NewSong')} title="New Song" color="#FF9500"/>
            ),
        })
    }

    //render a separator line between items in the list
    renderSeparator = () => {
        return <View style={styles.separator}/>
    };

    //render an item in the list
    renderItem({item}) {
        return (
            <TouchableOpacity style={styles.listItemContainer} onPress={() => this.props.navigation.navigate('SongView')}>
                <Text style={styles.listItemText}>{item}</Text> 
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
                <SectionList
                    sections={[  
                        {
                            title: 'Songs', 
                            data: this.state.songs,
                        },
                        {
                            title: 'Playlists', 
                            data: this.state.playlists,
                        },
                    ]}  
                    renderItem={({item}) => this.renderItem({item})}  
                    renderSectionHeader={({section}) => this.renderHeader({section})} 
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
                /> 
            </View>
        )
    }
}