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
            headerTitleContainerStyle: styles.headerTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitle,
            headerLeftContainerStyle: styles.headerLeftContainer,
            headerRightContainerStyle: styles.headerRightContainer,
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
            <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate('SongView')}>
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
            <View style={styles.Container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
    separator: {
        flex:1, 
        height:0.5, 
        width: '100%', 
        backgroundColor: '#707070', 
        opacity: 50
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
    }
})

