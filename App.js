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
    },
    SongView: {
      screen: SongViewScreen
    },
    NewSong: {
      screen: NewSongScreen,
      navigationOptions: {
        mode: 'modal'
      }
    },
    NowPlaying: {
      screen: NowPlayingScreen
    },
    SectionEdit: {
      screen: SectionEditScreen
    },
    SectionView: {
      screen: SectionViewScreen
    },
    SongView: {
      screen: SongViewScreen
    },
    BarEdit: {
      screen: BarEditScreen
    }

  },
  { 
    initialRouteName: 'Library', 
    mode: 'card',
  },
)

const AppContainer = createAppContainer(RootStack)
export default class App extends React.Component {
  render() {
    return (<AppContainer theme="dark"/>)
  }
}
