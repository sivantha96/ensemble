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
    constructor (props) {
        super(props)
        this.state = {
            songs: [],
            playlists: [],
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
        return {
            title: 'Library',
            headerRight: () => (
                <View style={{flex: 1, flexDirection: 'row', paddingRight:5}}>
                    <Button
                        onPress={ () => {
                            navigation.navigate('NewSong', 
                            {
                                itemId: 1,
                                titleParam: 'New Song',
                            });
                        }}
                        title="New Song"
                        color="#FF9500"
                    />
                </View>
            ),
        };
    }

    renderSeparator = () => {
        return <View style={{flex:1, height:0.5, width: '100%', backgroundColor: '#707070', opacity: 50}}/>
    };

    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.container}> 
                    <SectionList  
                        sections={[  
                            {
                                title: 'Songs', 
                                data: 
                               this.state.songs
                            },
                            {
                                title: 'Playlists', 
                                data: 
                                [
                                    'ALTERED',
                                    'ABBY',
                                    'ACTION',
                                    'AMUCK',
                                    'ANGUISH',
                                    'ALTERED',
                                    'ABBY',
                                    'ACTION',
                                    'AMUCK',
                                    'ANGUISH',
                                ]
                            },
                        ]}  
                        renderItem={({item}) => 
                        <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'black'}} onPress={() => alert('This is an Item!')} >
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SongView')}>
                                    <Text style={styles.itemText}>{item.name}</Text> 
                                </TouchableOpacity>
                            </View>
                        </View>}  
                        renderSectionHeader={({section}) => 
                        <View style={{flex:1, backgroundColor: 'black'}}>
                            <Text style={styles.headerText}>{section.title}</Text>
                        </View> } 
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    /> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        margin:10,
        marginTop: 0,
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    titleContainer: {
        flex: 1,
        height: 50,
        margin: 10,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 30,
        paddingTop: 10,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 10,  
        color: '#fff',
        fontWeight: 'bold',
    },
    itemText: {
        fontSize: 17,
        padding: 15,  
        color: '#fff'
    }
})

