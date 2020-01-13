import { 
    StyleSheet,
    Dimensions,  
} from 'react-native'
import { Header } from 'react-navigation-stack';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    //White text for headings
    whiteSubject: {
        fontSize: 30,
        color: '#fff',
    },
    //WHite text for body
    whiteBody:{
        color: '#fff',
        fontSize: 20,
    },
    //Black text for headings
    blackSubject: {
        fontSize: 30,
        color: 'black',
    },
    //Black text for body
    blackBody:{
        color: 'black',
        fontSize: 20,
    },
    //Container of the album art of the song
    albumArtContainer: {
        padding: 10,
        aspectRatio: 1,
        height: '100%',
    },
    //Album art image
    albumArt: {
        aspectRatio: 1,
        borderRadius: 10,
    },
    appHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#212121'
    },
    //Container of the title in the header bar of the app
    appHeaderTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //Title in the header bar of the app
    appHeaderTitle: {
        color: '#FF9500',
        fontSize: 20,
        fontWeight: 'bold'
    },
    //Left container of the title in the header bar of the app
    appHeaderLeftContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    //Right container of the title in the header bar of the app
    appHeaderRightContainer: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Separator line 
    separator: {
        flex:1, 
        height:0.5, 
        width: '100%', 
        backgroundColor: '#707070', 
        opacity: 50
    },
    //Text of an item on the section list
    listItemText: {
        fontSize: 17,
        padding: 15,  
        color: '#fff'
    },
    //Container of a section in the section list
    listSectionContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: 'stretch',
    },
    //Container of an item on the section list
    listItemContainer: {
        flex: 1, 
        height: '100%', 
        width: '100%', 
        backgroundColor: 'black'
    },
    //Section header text on the section list
    listSectionHeaderText: {
        fontSize: 30,
        padding: 10, 
        color: '#fff',
        fontWeight: 'bold',
    },
    //Container of the section header on the section list
    listSectionHeaderContainer: {
        flex:1, 
        backgroundColor: 'black'
    },
    //Container of titleContainer and buttonContainer
    infoContainer: {
        flex:1,
        flexDirection: 'column',
    },
    //Container of a title of a song/section
    titleContainer: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
    },
    //Input of a title of a song/section
    titleInput: {
        fontSize: 25,
        color: '#fff',
    },
    //Container of ALL the buttons in the information container
    manyButtonContainer: {
        flex:1,
        flexDirection: 'row-reverse',
        padding: 10,
    },
    //Container of a SINGLE button in the button container
    singleButtonContainer: {
        marginLeft: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    //Input of a button type input
    buttonInput: {
        width: '100%',
        aspectRatio: 2,
        padding:5,
        textAlign: 'center',
        borderColor: '#FF9500', 
        borderWidth: 1, 
        color: '#FF9500',
        borderRadius: 5
    },

    //------------------------------------------------------------------------
    
    appContainer: {
        flex:3,
        flexDirection: 'column',
    },
    topContainer: {
        flex:4,
        flexDirection: 'row',
        borderBottomColor: '#707070',
        borderBottomWidth: 0.5,
    },
    bottomContainer: {
        flex:5,
        flexDirection: 'column',
    },
    addNewButtonContainer: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        width:50,
        aspectRatio: 1,
        flexDirection: 'row',
    },
    addNewButton: {
        color: 'white',
        padding: 5,
        fontSize: 25
    },
    appHeaderMiddleContainer:  {
        flex: 4,
        flexDirection: 'row',
    },
    metronomeContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FF9500'
    },
    metronomeText: {
        textAlign: "center",
        fontSize: 40,
        color: '#FF9500'
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    controlContainer: {
        flex: 2,
        flexDirection: 'column',
    },
    songNameContainer: {
        flex: 1,
        
        alignContent: 'center',
        justifyContent: 'center'
    },
    controls: {
        flex: 2,
        flexDirection: 'row'
    },
    topLineContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    middleLineContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    bottomLineContainer:{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    timeText: {
        color: 'white',
        textAlign: "center",
        fontSize: 40,
    },
    tempoText: {
        fontSize: 25,
        color: 'white'
    }
})