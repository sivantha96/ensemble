import React, { Component } from 'react'
import { 
    Text, 
    StatusBar,
    View, Button
} from 'react-native'
import styles from './Styles'

export default class NowPlayingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    componentDidMount() {
        setInterval(this.slideLine, 2000)
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
            <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:30}}>{note}</Text>
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
                            <Text style={styles.timeText}>02:52</Text>
                            <Text style={{color: 'white'}}>Duration</Text>
                        </View>
                        <View style={styles.controlContainer}>
                            <View style={styles.songNameContainer}>
                                <Text style={{color: 'white', textAlign: 'center',}}>Song Name Goes Here</Text>
                            </View>
                            <View style={styles.controls}></View>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>252</Text>
                            <Text style={{color: 'white'}}>Tempo</Text>
                        </View>
                    </View>
                    <View  style={styles.appHeaderRightContainer}>
                       <View style={styles.metronomeContainer}>
                            <Text style={styles.metronomeText}>3</Text>
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
