import React from 'react'
import {
    StyleSheet,
    Button,
    View,
    Keyboard,
    Text,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    SectionList,
    TouchableOpacity,
} from 'react-native'

import { SafeAreaView } from 'react-navigation'

SafeAreaView.setStatusBarHeight(0);


export default class NewSongScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: ''}; 
        const navigation = this.props;
        let text = this.state;
    };

    static navigationOptions = ({ navigation}) => {
        return {
            title: navigation.getParam('titleParam', 'Default Title'),
            headerTitleStyle: { textAlign: 'center', flex: 1, color: "#FF9500",},
            headerLeftContainerStyle: {marginLeft:10,},
            headerRightContainerStyle: {marginRight:10,},
            headerLeft: () => (
                <View>
                    <View style={{width:10}}/>
                    <Button
                        onPress={() => navigation.goBack()}
                        title="Cancel"
                        color="#FF9500"
                    />
                </View>
            ),
            headerRight: () => (
                <View>
                    <Button
                        onPress={() => alert('Saved!')}
                        title="Save"
                        color="#FF9500"
                    />
                    <View style={{width:10}}/>
                </View>
            ),
        };
    };
    
    render() {
        return (
            
            
            <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flex: 1, flexGrow: 1, flexDirection: 'row'}}>
                        <View style={{aspectRatio: 1,padding:10, height: '100%'}}>
                         <View style={{aspectRatio: 1}}>
                            <Image 
                                style={{borderRadius:5, backfaceVisibility : 'hidden'}}
                                source={require('../../assets/albumArt.jpg')}
                                height= '100%'
                                width= '100%'
                                
                            />
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{flex: 1,marginTop:10, flexDirection: 'row'}}>
                            <TextInput style={{
                                fontSize: 25,
                                color: '#fff',
                                alignSelf: 'flex-start',
                            }}
                            enablesReturnKeyAutomatically = {true}
                            keyboardAppearance= 'dark'
                            returnKeyType= 'done'
                            placeholder= 'Untitled Song'
                            placeholderTextColor= '#fff'
                            onChangeText = {(text) => this.setState({ text: text})}
                            />
                        </View>
                        <View style={{flex: 2, flexDirection: 'row-reverse', alignContent: 'flex-end'}}>
                            <View style={{margin:10, width: 120, height: 30, alignItems: 'center', alignContent:'center', marginLeft:0, alignSelf: 'flex-end', borderColor: '#FF9500', borderWidth: 1, borderRadius: 5}}>
                                <TextInput style={{
                                    padding: 5,
                                    color: '#FF9500'
                                }}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                keyboardType= 'numbers-and-punctuation'
                                returnKeyType= 'done'
                                placeholder= 'Key'
                                placeholderTextColor = '#FF9500'
                                onChangeText = {(text) => this.setState({ text: text})}
                                />
                            </View>
                            <View style={{margin:10, width: 120, height: 30, alignItems: 'center', alignContent:'center', marginLeft:0, alignSelf: 'flex-end', borderColor: '#FF9500', borderWidth: 1, borderRadius: 5}}>
                                <TextInput style={{
                                    padding: 5,
                                    color: '#FF9500'
                                }}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                keyboardType= 'numbers-and-punctuation'
                                returnKeyType= 'done'
                                placeholder= 'Tempo'
                                placeholderTextColor = '#FF9500'
                                onChangeText = {(text) => this.setState({ text: text})}
                                />
                            </View>
                            <View style={{margin:10, width: 120, height: 30, alignItems: 'center', alignContent:'center', marginLeft:0, alignSelf: 'flex-end', borderColor: '#FF9500', borderWidth: 1, borderRadius: 5}}>
                                <TextInput style={{
                                    padding: 5,
                                    color: '#FF9500'
                                }}
                                enablesReturnKeyAutomatically = {true}
                                keyboardAppearance= 'dark'
                                keyboardType= 'numbers-and-punctuation'
                                returnKeyType= 'done'
                                placeholder= 'Time Signature'
                                placeholderTextColor = '#FF9500'
                                onChangeText = {(text) => this.setState({ text: text})}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listContainer}>
                <SectionList  
                        sections={[  
                            {
                                title: 'Sections', 
                                data: 
                                [
                                    'Introduction',
                                    'Chorus',
                                    'Verse 1',
                                    'Interlude',
                                    'Verse 2',
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
                        <View style={{ flex: 1, height: '100%', width: '100%'}} onPress={() => alert('This is an Item!')} >
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
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    details: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    listContainer: {
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

