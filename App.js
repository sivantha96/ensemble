import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './app/components/loginScreen/LoginScreen'
import LibraryScreen from './app/components/libraryScreen/LibraryScreen'
import SongViewScreen from './app/components/songViewScreen/SongViewScreen'
import NewSongScreen from './app/components/newSongScreen/NewSongScreen'
import NowPlayingScreen from './app/components/nowPlayingScreen/NowPlayingScreen'
import SectionEditScreen from './app/components/sectionEditScreen/SectionEditScreen'
import SectionViewScreen from './app/components/sectionViewScreen/SectionViewScreen'
import BarEditScreen from './app/components/barEditScreen/BarEditScreen'

if(__DEV__) {
  import("./app/ReactotronConfig")
}

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Library: {
      screen: LibraryScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SongView: {
      screen: SongViewScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    NewSong: {
      screen: NewSongScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    NowPlaying: {
      screen: NowPlayingScreen,
      headerShown: false,
    },
    SectionEdit: {
      screen: SectionEditScreen,
      headerShown: false,
    },
    SectionView: {
      screen: SectionViewScreen,
      headerShown: false,
    },
    SongView: {
      screen: SongViewScreen,
      headerShown: false,
    },
    BarEdit: {
      screen: BarEditScreen,
      headerShown: false,
    }
  },
  { 
    initialRouteName: 'NowPlaying', 
    mode: 'card',
    headerShown: false,
  },
)

console.disableYellowBox = true
const AppContainer = createAppContainer(RootStack)
export default class App extends React.Component {
  
  render() {
    return (<AppContainer theme="dark"/>)
  }
}