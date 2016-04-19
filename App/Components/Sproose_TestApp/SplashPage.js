'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SceneConfigs,
  Navigator,
  FloatFromBottom,
  FadeAndroid
} = React;

const styles = require('../../../styles.js')

class SplashPage extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigator.push({
        id: 'Main',
        sceneConfig: Navigator.SceneConfigs.FloatFromBottom   // pick animation
      });
    }, 3350);
  }
  render() {
    return (
      <Image source={
        require('./Images/splash2.jpg')}
        style={styles.container}
        resizeMode={'stretch'}>

        <Image source={
          require('./Images/test4.gif')}
          style={styles.splashGifImage}
          resizeMode={'stretch'}>
        </Image>
      </Image>
    );
  }
}

module.exports = SplashPage;
