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
        height: Header.HEIGHT,
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
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    //Right container of the title in the header bar of the app
    appHeaderRightContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-start',
    },
    //Separator line 
    separator: {
        flex:1, 
        height:0.5, 
        width: '100%', 
        backgroundColor: '#707070', 
        opacity: 50
    },
    //Container of a section in the section list
    listSectionContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: 'stretch',
    },
    //Text of an item on the section list
    listItemText: {
        fontSize: 17,
        padding: 15,  
        color: '#fff'
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
        marginLeft:5,
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
        marginHorizontal:3, 
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

    //----------------------------------------------------------------------------------  

    appContainer: {
        flex:1,
        flexDirection: 'column',
    },
    topContainer: {
        flex:4,
        flexDirection: 'row',
        borderBottomColor: '#707070',
        borderBottomWidth: 0.5,
    },
    bottomContainer: {
        margin: 3,
        flex:5,
        flexDirection: 'column',
        
    },
    wrappingContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    noteContainer: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noteText: {
        fontSize: 20,
        color: 'white'
    },
    barContainer: {
        
        width: ((DEVICE_WIDTH - 10) /4),
        height: 50,
        flexDirection: 'row',
        marginVertical: 8,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#707070',
        padding: 2,
    },
})