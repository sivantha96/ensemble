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
import styles from './Styles'

export default class LibraryScreen extends React.Component {
    //constructor to hold the information in the state
    constructor (props) {
        super(props)
        this.state = {
            songs: [
                'Song1',
                'Song2',
                'Song3',
                'Song4',
                'Song5',
                'Song6',
                'Song7',
                'Song8',
            ],
            playlists: [
                'Playlist1',
                'Playlist2',
                'Playlist3',
                'Playlist4',
                'Playlist5',
                'Playlist6',
                'Playlist7',
                'Playlist8',
            ],
        } 
    }

    //options for header of the screen
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