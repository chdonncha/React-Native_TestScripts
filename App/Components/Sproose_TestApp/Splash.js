var React = require('react-native');
var Main = require('./Main');

var {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Navigator
} = React;

var bool = "true";

class Splash extends React.Component{

	  clickMe() {
    
  }

	render(){
		return (
			<Image source={
		   		require('./Man_In_Machine.jpg')} 
		   		style={styles.container}
		    	 // can change resizeMode to 'stretch' but does not look well
		  		resizeMode={'stretch'}>
		    <Text style={styles.welcome}>
		    	Welcome to Sproose!
		    </Text>
		    <Text style={styles.instructions}>
		    	To get started, press the button below!
		    </Text>
		    <TouchableOpacity onPress={() => navigator.push(renderScene())}>
		    <Image style={styles.image} 
		    	source={require('./Big_Deal.jpg')} /> 
		    </TouchableOpacity>
		 	</Image>
		);
}

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Main') {
      return (
        <Main
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
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
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
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginRight: 10,
  }
});
 
module.exports = Splash;