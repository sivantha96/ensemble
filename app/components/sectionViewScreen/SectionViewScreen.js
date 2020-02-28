import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
    ScrollView
    
} from 'react-native'

import styles from './Styles'

export default class SectionViewScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super()
        this.state = {
                title: props.navigation.getParam('section_title'),
                timeSignature: props.navigation.getParam('time_signature'),
                tempo: props.navigation.getParam('tempo'),
                noOfBars: 12,
                notationType: "Chords",
                instrument: props.navigation.getParam('instrument'),
                barsPerLine: 4,
                bars: [
                    {
                        note_1:'C',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'F',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'G',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'C',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'C',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'F',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'G',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'C',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'C',
                        note_2:'-',
                        note_3:'Am',
                        note_4:'-',
                    },
                    {
                        note_1:'Dm',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'F',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                    {
                        note_1:'G',
                        note_2:'-',
                        note_3:'-',
                        note_4:'-',
                    },
                ],
                sectionDuration: 0,
        }
    }

    //options for header of the screen
    static navigationOptions = {
        header: null,
    };

    //Go back to Song View
    backButton(){
        this.props.navigation.goBack()
    }

    //Go back to section Edit
    editButton(){
        this.props.navigation.navigate('SectionEdit')
    }

    //Return a view of a single bar
    renderBar(bar) {
        return (
            <TouchableOpacity key={bar.id} style={styles.barContainer}>
                <View style={styles.noteContainer}>
                    <Text  style={styles.noteText}>{bar.note_1}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note_2}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note_3}</Text>
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>{bar.note_4}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appHeaderContainer}>
                    <View style={styles.appHeaderLeftContainer}>
                        <Button onPress={() => this.backButton()} title="Song" color="#FF9500"/>
                    </View>
                    <View  style={styles.appHeaderTitleContainer}>
                        <Text style={styles.appHeaderTitle}>{''}</Text>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                        <Button onPress={() => this.editButton()} title="Edit" color="#FF9500"/>
                    </View>
                </View>
                <View style={styles.appContainer}>
                    <View style={styles.topContainer}>
                        <View style={styles.infoContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.sectionViewTitle}>
                                    {this.state.title}
                                </Text>
                                <Text style={styles.sectionViewDetails}>
                                    {this.state.timeSignature +"   |   "+ this.state.tempo +"   |   "+ this.state.noOfBars +"   |   "+ this.state.notationType +"   |   "+ this.state.instrument +"   |   "+ this.state.sectionDuration }

                                </Text>
                            
                            </View>

                            <View style={styles.manyButtonContainer}>
                                <View style={styles.singleButtonContainer}>
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
                    <View style={styles.bottomContainer }>
                        <ScrollView>
                            <View style={styles.wrappingContainer}>
                                {this.state.bars.map(bar => this.renderBar(bar))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
            
        )
    }
}
