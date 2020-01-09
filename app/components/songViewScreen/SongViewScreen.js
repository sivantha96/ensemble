import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TextInput,
    Image,
    Button,
    SectionList,
    TouchableOpacity
} from 'react-native'
import styles from './Styles'

export default class SongViewScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songName:"",
            timeSignature:"4/4",
            tempo: 108,
            key:"G",
            sections:["AA","BB","CC","DD"]
        }
    }

    //options for header of the screen
    static navigationOptions = ({navigation}) => {

        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam('songTitle', 'Untitled Song'),
            headerTitleContainerStyle: styles.appHeaderTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.appHeaderTitle,   
            headerLeftContainerStyle: styles.appHeaderLeftContainer,
            headerRightContainerStyle: styles.appHeaderRightContainer,
            headerLeft: () => (
                <Button onPress={() => this.cancelButton({navigation})} title="Home" color="#FF9500"/>
            ),
            headerRight: () => (
                <Button onPress={(isEmpty) => this.doneButton({navigation})} title="Edit" color="#FF9500"/>
            )
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
                
                <View style={styles.listItemContainer}>
                    <Text style={styles.listItemText}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.appContainer} /*This is the container of the full View*/>
                <View style={styles.topContainer} /*Container of the upper section of the View*/>
                    <View style={styles.albumArtContainer} /*Container of the Album Art*/>
                        <Image style={styles.albumArt} source={require('../../assets/albumArt.jpg')} height={'100%'}/>
                    </View>
                    <View style={styles.infoContainer} /*Container of the information section inside the upper section of the View*/>
                        <View style={styles.titleContainer} /*Container of the title text input*/>
                            <View >  
                                <Text style={styles.titleInput}>
                                    {/*this.state.songName*/"Test Name"}
                                </Text>
                            </View>
                            <View>
                                <Text style={{color:"white"}}>
                                        {this.state.key+"  |  "+this.state.tempo+"  |  "+this.state.timeSignature}
                                    
                                </Text>    
                            </View>
                        </View>
                        <View style={styles.manyButtonContainer} /*Keep all these singleButtonContainers in this manyButtonContainer to maintain the layout*/>
                            <View style={styles.singleButtonContainer} >
                                <TouchableOpacity  style={styles.buttonInput} onPress={() => this.props.navigation.navigate("NowPlaying")} >
                                    <Text style={{color:"#FF9500"}}>Play</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>
                                
                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>
                                
                            </View>
                            <View style={styles.singleButtonContainer} /*Add a button or a text Input here*/>

                            </View>
                            <View style={styles.singleButtonContainer} >

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
        )
    }
}
