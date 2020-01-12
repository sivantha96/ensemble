import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    Button, 

} from 'react-native'

import styles from './Styles'

export default class NowPlayingScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super()
        this.state = {
            title: "",
            timeSignature: "",
            tempo: 0,
            sections: [],
            songDuration: 0,
            tempoDisplay: 0,

        }
    }

    //options for header of the screen
   /* static navigationOptions = ({navigation}) => {

        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam('songTitle', 'Untitled Song'),
            headerTitleContainerStyle: styles.appHeaderTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.appHeaderTitle,   
            headerLeftContainerStyle: styles.appHeaderLeftContainer,
            headerRightContainerStyle: styles.appHeaderRightContainer,
            headerLeft: () => (
                <Button onPress={() => this.backButton({navigation})} title="Back" color="#FF9500"/>
            ),
            
        })
    } */

    //Go back
   /* static backButton({navigation}){
        navigation.goBack()
    }*/


    render() {
        return (
            <View style={styles.appContainer}> 
                <View style={styles.topContainer}>
                    <View style={styles.timeContainer}>
                        

                    </View>

                    
                    <View style={styles.previousButtonContainer}>

                    </View>


                    <View style={styles.playButtonContainer}>

                    </View>

                    
                    <View style={styles.stopButtonContainer}>

                    </View>


                    <View style={styles.nextButtonContainer}>

                    </View>


                    <View style={styles.tempoContainer}>
                        <Text style={styles.tempoText}>
                            Tempo 
                        </Text>
                        <Text style={styles.tempoText}>
                            {this.state.tempo}
                        </Text>

                    </View>


                    <View style={styles.realTimeTempoContainer}>

                    </View>



                </View>
                    
                <View style={styles.bottomContainer}>
                    <View style={styles.inactiveBottomViewer}>

                    </View>


                    <View style={styles.activeViewer}>

                    </View>


                    <View style={styles.inactiveBottomViewer}>

                    </View>
                </View>    
            </View>
        )
    }
}


