import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './app/components/loginScreen/LoginScreen'
import LibraryScreen from './app/components/libraryScreen/LibraryScreen'
import SongViewScreen from './app/components/songViewScreen/SongViewScreen'

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
    }

  },
  { 
    initialRouteName: 'SongView', 
    mode: 'modal',
  },
)

const AppContainer = createAppContainer(RootStack)
export default class App extends React.Component {
  render() {
    return (<AppContainer theme="dark"/>)
  }
}
