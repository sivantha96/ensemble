import React, { Component } from 'react'
import { 
    Text, 
    StatusBar,
    View, 
    Button,
    Image,
} from 'react-native'
import styles from './Styles'

export default class NowPlayingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 0,
            sec: 0,
            count: 0,
            slideTime: 13333.333,
            notes: [
                'C',
                '-',
                '-',
                '-',
                'F',
                '-',
                '-',
                '-',
                'G',
                '-',
                '-',
                '-',
                'C',
                '-',
                '-',
                '-',
                
                '1ST Line',
                'C',
                '-',
                '-',
                '-',
                'F',
                '-',
                '-',
                '-',
                'C',
                '-',
                '-',
                '-',
                'C',
                '-',
                '-',
                '-',
                '2ND Line',
                'C',
                '-',
                'Am',
                '-',
                'Dm',
                '-',
                '-',
                '-',
                'F',
                '-',
                '-',
                '-',
                'G',
                '-',
                '-',
                '-',
                '3RD Line',
                'C',
                '-',
                '-',
                '-',
                'F',
                '-',
                '-',
                '-',
                'G',
                '-',
                '-',
                '-',
                'C',
                '-',
                '-',
                '-',
                
                '1ST Line',
                'C',
                '-',
                '-',
                '-',
                'F',
                '-',
                '-',
                '-',
                'C',
                '-',
                '-',
                '-',
                'C',
                '-',
                '-',
                '-',
                '2ND Line',
                'C',
                '-',
                'Am',
                '-',
                'Dm',
                '-',
                '-',
                '-',
                'F',
                '-',
                '-',
                '-',
                'G',
                '-',
                '-',
                '-',
            ],
            topLine: [],
            middleLine: [],
            bottomLine: [],
        }
    }

    slideLine = () => {
        let newNotes = []
        const curCount = this.state.count + (this.state.count*16)
        for (let i = curCount; i < 16 + curCount; i++) {
            let newNote = this.state.notes[i]
            if (newNote==undefined) {
                newNotes.push("-")
            }
            else{
                newNotes.push(newNote)
            }
            
        }
        this.setState( prevState => ({
            count: prevState.count +1,
            topLine: [... prevState.middleLine],
            middleLine: [... prevState.bottomLine],
            bottomLine: [... newNotes],
            
        })

        )
    }

    clock = () => {
        if(this.state.sec != 59){
            this.setState(prevState => ({
                sec: prevState.sec + 1
            }))
        }
        else {
            this.setState(prevState => ({
                sec: 0,
                min: prevState.min+1
            }))
        }
    }

    componentDidMount() {
        this.slideLine()
        this.slideLine()
        setInterval(this.slideLine, this.state.slideTime)
        setInterval(this.clock, 1000)
    }


    static navigationOptions = {
        header: null,
        };


    //Discard all changes and go back
    //Should clear any changes made in the database
    homeButton(){
        this.props.navigation.goBack()
    }

    //Save all changes and go to Song View Screen
    doneButton(){
        this.newSongData()
        this.props.navigation.navigate('SongView')
    }

    //Render a note 
    renderNote(note){
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{color:'white',textAlign:'center', fontSize:30}}>{note}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appHeaderContainer}>
                    <View style={styles.appHeaderLeftContainer}>
                        <Button onPress={() => this.homeButton()} title="〈 Home" color="#FF9500"/>
                    </View>
                    <View  style={styles.appHeaderMiddleContainer}>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>{this.state.min + ':' + this.state.sec}</Text>
                            <Text style={{color: 'white'}}>Duration</Text>
                        </View>
                        <View style={styles.controlContainer}>
                            <View style={styles.songNameContainer}>
                                <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Unmadini - BnS</Text>
                            </View>
                            {/* <View style={styles.controls}>
                                
                            </View> */}
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>72</Text>
                            <Text style={{color: 'white'}}>Tempo</Text>
                        </View>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                       <View style={styles.metronomeContainer2}>
                            <View style={styles.metronomeContainer}></View>
                            {/* <Text style={styles.metronomeText}></Text> */}
                       </View>
                    </View>
                </View>
                <View style={styles.appContainer}>
                    <StatusBar hidden={true}/>
                    <View style={styles.topLineContainer}>
                        {this.state.topLine.map(note => this.renderNote(note))}
                    </View>
                    <View style={styles.middleLineContainer}>
                        {this.state.middleLine.map(note => this.renderNote(note))}
                    </View>
                    <View style={styles.bottomLineContainer}>
                        {this.state.bottomLine.map(note => this.renderNote(note))}
                    </View>
                </View>
            </View>
        )
    }
}
