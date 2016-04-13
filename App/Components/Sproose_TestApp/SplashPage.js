'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Navigator
} = React;

var SCREEN_WIDTH = require('Dimensions').get('window').width; 
var BaseConfig = Navigator.SceneConfigs.FloatFromRight; 

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {  // Make it snap back really quickly after canceling pop
  snapVelocity: 8,  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH, 
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {  // A very tightly wound spring will make this transition fast
  springTension: 100, springFriction: 1,  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture, 
  } 
});

class SplashPage extends Component {
  componentWillMount() {
    //var navigator = this.props.navigator;
    setTimeout(() => {
      this.props.navigator.push({
        id: 'Main',
      });
    }, 3500);
  }
  render() {
    return (
      <Image source={
        require('./Images/splash2.jpg')} 
        style={styles.container}
           // can change resizeMode to 'stretch' but does not look well
           resizeMode={'stretch'}>

        <Image source={
          require('./Images/test4.gif')} 
          style={styles.image}
           // can change resizeMode to 'stretch' but does not look well
           resizeMode={'stretch'}>
        </Image>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  
  }
});

module.exports = SplashPage;