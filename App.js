import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './app/components/loginScreen/LoginScreen'
import LibraryScreen from './app/components/libraryScreen/LibraryScreen'

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
    }
  },
  { 
    initialRouteName: 'Login', 
    mode: 'modal',
  },
)

const AppContainer = createAppContainer(RootStack)
export default class App extends React.Component {
  render() {
    return (<AppContainer theme="dark"/>)
  }
}
