/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var AnimationPage = require('./App/Components/Animation_Testing/Playground');
var Main = require('./App/Components/Sproose_TestApp/Main');
var SplashPage = require('./App/Components/Sproose_TestApp/SplashPage');
var SignUpFB = require('./App/Components/Sproose_TestApp/SignUpFB');
var HaveAC = require('./App/Components/Sproose_TestApp/HaveAC');
var SignEmail = require('./App/Components/Sproose_TestApp/SignEmail');
var Buy_View = require('./App/Components/Sproose_TestApp/Buy_View');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

//const styles = require('./styles.js')

class MyFirstRNProject extends Component {

  render() {
    return (
     <Navigator
        initialRoute={{id: 'Buy_View', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

    renderScene(route, navigator) {
    var routeId = route.id;
     if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
        if (routeId === 'Buy_View') {
      return (
        <Buy_View
          navigator={navigator} />
      );
    }
    if (routeId === 'Main') {
      return (
        <Main
          navigator={navigator} />
      );
    }
     if (routeId === 'SignUpFB') {
      return (
        <SignUpFB
          navigator={navigator} />
      );
    }
    if (routeId === 'SignEmail') {
      return (
        <SignEmail
          navigator={navigator} />
      );
    }
    if (routeId === 'HaveAC') {
      return (
        <HaveAC
          navigator={navigator} />
      );
    }
       if (routeId === 'AnimationPage') {
      return (
        <AnimationPage
          navigator={navigator} />
      );
    }
      if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);
  }
   noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>no scene to render index.android.js</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
