import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import {
    Themed,
    SafeAreaView,
} from 'react-navigation';

SafeAreaView.setStatusBarHeight(0);

export default class LibraryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Library',
            headerRight: () => (
                <View style={{flex: 1, flexDirection: 'row', paddingRight:5}}>
                    <StatusBar hidden={true}/>
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

    renderSeparator = ({}) => {
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
                                    'ANGUISH'
                                ]
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
                                <TouchableOpacity onPress={() => alert('This is a button!')}>
                                    <Text style={styles.itemText}>{item}</Text> 
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

