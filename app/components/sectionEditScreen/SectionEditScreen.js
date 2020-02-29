import React, { Component } from 'react'
import { 
    Text, 
    View,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import Picker from 'react-native-picker-select'
import styles from './Styles'
import {
    NavigationEvents
} from 'react-navigation'

export default class SectionEditScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super(props)
        this.state = {
            headerTitle: props.navigation.getParam('sectionTitle', 'New Section'),
            section_id: null,
            title: "",
            timeSignature: props.navigation.getParam('timeSignature', ''),
            tempo: props.navigation.getParam('tempo', 0),
            noOfBars: 0,
            notationType: "",
            instrument: "",
            barsPerLine: "",
            bars: [
            ],
        }
    }

    static navigationOptions = {
        header: null,
        };


    //get bAR DATA
    getBarData = () => {
        const newBar = [{ note_1: this.props.navigation.getParam('note_1'),  note_2: this.props.navigation.getParam('note_2'),  note_3: this.props.navigation.getParam('note_3'),  note_4: this.props.navigation.getParam('note_4'), }]
        for (let i = 0; i < this.state.noOfBars-1; i++) {
            newBar.push({
                note_1: '-',
                note_2: '-',
                note_3: '-',
                note_4: '-',})
        }
        if (newBar[0].note_1 == undefined) {
            
        }
        else {
            this.setState({
                bars: [... newBar]
            })
        }  
    }

    //Discard all changes and go back
    cancelButton(){
        this.props.navigation.goBack()
    }

    //Save all changes and go to Song View Screen
    doneButton(){
        this.props.navigation.navigate('NewSong', {sectionTitle: this.state.title, instrument: this.state.instrument})
    }

    //Return a view of a single bar
    renderBar(bar) {
        return (
            <TouchableOpacity key={bar.id} style={styles.barContainer} onPress={() => this.props.navigation.navigate('BarEdit', {bar_id:bar.id, section_id:this.state.section_id})}>
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

    //Set the number of Bars
    //Create empty bars under the id of this section
    setBars(text) {
        const newBars = []
        for (let i = 0; i < text; i++) {
            newBars.push({
                id: i,
                section_id: this.state.section_id,
                note_1: '-',
                note_2: '-',
                note_3: '-',
                note_4: '-',})
        }
        this.setState({noOfBars: text, bars: [... newBars]})
        console.log(this.state.bars)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appHeaderContainer}>
                    <View style={styles.appHeaderLeftContainer}>
                        <Button onPress={() => this.cancelButton()} title="Cancel" color="#FF9500"/>
                    </View>
                    <View  style={styles.appHeaderTitleContainer}>
                        <Text style={styles.appHeaderTitle}>{this.state.headerTitle}</Text>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                        <Button onPress={() => this.doneButton()} title="Done" color="#FF9500"/>
                    </View>
                </View>
                <View style={styles.appContainer}>
                    <NavigationEvents
                        //Refresh here
                        onDidFocus={payload => this.getBarData()}
                    />
                    <View style={styles.topContainer}>
                        <View style={styles.infoContainer}>
                            <View style={styles.titleContainer}>
                                <TextInput style={styles.titleInput}
                                    enablesReturnKeyAutomatically = {true}
                                    keyboardAppearance= 'dark'
                                    returnKeyType= 'done'
                                    textAlign = 'right'
                                    placeholder= 'Untitled Section'
                                    autoCompleteType = 'off'
                                    placeholderTextColor= '#fff'
                                    onChangeText = {(text) => this.setState({title:text})}
                                    />
                            </View>
                            <View style={styles.manyButtonContainer}>
                                <View style={styles.singleButtonContainer}>
                                    <TextInput style={styles.buttonInput}
                                        enablesReturnKeyAutomatically = {true}
                                        keyboardAppearance= 'dark'
                                        returnKeyType= 'done'
                                        placeholder= 'No. of Bars'
                                        placeholderTextColor= '#FF9500'
                                        autoCompleteType = 'off'
                                        keyboardType = 'numeric'
                                        onChangeText = {(text) => this.setBars(text)}
                                    />
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    <Picker
                                    onValueChange = { (text) => this.setState({ barsPerLine: text})}
                                    items={[
                                        { label: '2', value: 2 },
                                        { label: '4', value: 4 },
                                        { label: '6', value: 6 },
                                        { label: '8', value: 8 },
                                    ]}
                                    placeholder={{
                                                label: 'Bars Per Line',
                                                value: null,
                                                }}
                                    style={{
                                        inputAndroid: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        inputIOS: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        placeholder: {
                                            color: '#FF9500',
                                        },
                                    }}
                                />
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    <Picker
                                    onValueChange = { (text) => this.setState({ instrument: text})}
                                    items={[
                                        { label: 'Guitar', value: 'Guitar' },
                                        { label: 'Piano', value: 'Piano' },
                                        { label: 'Trumpet', value: 'Trumpet' },
                                        { label: 'Violin', value: 'Violin' },
                                    ]}
                                    placeholder={{
                                                label: 'Instrument',
                                                value: null,
                                                }}
                                    style={{
                                        inputAndroid: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        inputIOS: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        placeholder: {
                                            color: '#FF9500',
                                        },
                                    }}
                                />
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    <Picker
                                    onValueChange = { (text) => this.setState({ notationType: text})}
                                    items={[
                                        { label: 'Chords', value: 'Chords' },
                                        { label: 'Notes', value: 'Notes' },
                                    ]}
                                    placeholder={{
                                                label: 'Notation Type',
                                                value: null,
                                                }}
                                    style={{
                                        inputAndroid: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        inputIOS: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        placeholder: {
                                            color: '#FF9500',
                                        },
                                    }}
                                />
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    <Picker
                                    onValueChange = { (text) => this.setState({ timeSignature: text})}
                                    items={[
                                        { label: '1/2', value: '1/2' },
                                        { label: '2/2', value: '2/2' },
                                        { label: '2/4', value: '2/4' },
                                        { label: '3/4', value: '3/4' },
                                        { label: '4/4', value: '4/4' },
                                    ]}
                                    placeholder={{
                                                label: 'Time Signature',
                                                value: '1/1',
                                                }}
                                    style={{
                                        inputAndroid: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        inputIOS: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        placeholder: {
                                            color: '#FF9500',
                                        },
                                    }}
                                />
                                </View>
                                <View style={styles.singleButtonContainer}>
                                    <Picker
                                    onValueChange = { (text) => this.setState({ tempo: text})}
                                    items={[
                                        { label: '60', value: 60 },
                                        { label: '70', value: 70 },
                                        { label: '80', value: 80 },
                                        { label: '90', value: 90 },
                                        { label: '100', value: 100 },
                                        { label: '110', value: 110 },
                                        { label: '120', value: 120 },
                                        { label: '130', value: 130 },
                                        { label: '140', value: 140 },
                                        { label: '150', value: 150 },
                                        { label: '160', value: 160 },
                                        { label: '170', value: 170 },
                                        { label: '180', value: 180 },
                                    ]}
                                    placeholder={{
                                                label: 'Tempo',
                                                value: 0,
                                                }}
                                    style={{
                                        inputAndroid: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        inputIOS: {
                                            width: '100%',
                                            aspectRatio: 2,
                                            padding:5,
                                            textAlign: 'center',
                                            borderColor: '#FF9500', 
                                            borderWidth: 1, 
                                            color: '#FF9500',
                                            borderRadius: 5
                                        },
                                        placeholder: {
                                            color: '#FF9500',
                                        },
                                    }}
                                />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
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