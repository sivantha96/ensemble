import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet,
    View,
    Button,

    
} from 'react-native'

import styles from './Styles'

export default class SectionViewScreen extends Component {
    //constructor to hold the information in the state
    constructor(props) {
        super()
        this.state = {
            section: {
                title: "Chorus",
                timeSignature: "",
                tempo: 0,
                bars: 0,
                notationType: "",
                instrument: "",
                barsPerLine: "",
                notations: [],
                sectionDuration: 0,
            }
        }
    }

    //options for header of the screen
    static navigationOptions = ({navigation}) => {

        return ({
            headerForceInset: { top: 'never', bottom: 'never' },
            title: navigation.getParam('title'),
            headerTitleContainerStyle: styles.appHeaderTitleContainer,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.appHeaderTitle,   
            headerLeftContainerStyle: styles.appHeaderLeftContainer,
            headerRightContainerStyle: styles.appHeaderRightContainer,
            headerLeft: () => (
                <Button onPress={() => this.backButton({navigation})} title="Song View" color="#FF9500"/>
            ),
           
        })
    }

    //Go back to Song View
    static backButton({navigation}){
        navigation.goBack()
    }




    render() {
        return (
            <View style={styles.appContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.sectionViewTitle}>
                                {/*this.state.title*/"Chorus"}
                            </Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text style={styles.sectionViewDetails}>
                                {this.state.timeSignature +" | "+ this.state.tempo +" | "+ this.state.bars +" | "+ this.state.notationType +" | "+ this.state.instrument +" | "+ this.state.sectionDuration }

                            </Text>
                        
                        </View>

                        <View style={styles.manyButtonContainer}>
                            <View style={styles.singleButtonContainer}>
                                <Button title='Play' onPress={() => this.props.navigation.navigate('NowPlaying', { newSection: this.state.section})}/>
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

                </View>
            </View>
        )
    }
}
