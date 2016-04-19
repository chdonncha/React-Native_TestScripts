'use strict';
var React = require('react-native');
var SplashPage = require('./SplashPage');
var SignUpFB = require('./SignUpFB');
var HaveAC = require('./HaveAC');
var SignEmail = require('./SignEmail');

//var SCREEN_WIDTH = Dimensions.get('window').width;

var {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ToastAndroid,
	AppRegistry,
	Animated,
	Navigator
} = React;

const styles = require('../../../styles.js')
//const constants = styles.constants;

class Main extends React.Component{

	bSignFacebook() {
		console.log('clicked signup facebook');
		this.props.navigator.push({
        id: 'SignUpFB',
    	});
	}

	bHaveAC()
	{
		console.log('clicked have account');
		this.props.navigator.push({
        id: 'HaveAC',
    	});
	}

	bSignEmail()
	{
		console.log('clicked have email');
		this.props.navigator.push({
        id: 'SignEmail',
    	});
	}

	bTermsCond()
	{
		console.log('clicked terms and conditions');
		var navigator = this.props.navigator;
		this.props.navigator.push({
        id: 'SplashPage',
    	});
	}

	constructor(props: any) { super(props);
	 this.state = {
	 bounceValue: new Animated.Value(0),
	}; }

	render(): ReactElement {
		return (
			<Image source={
				require('./Images/main_login.jpg')}
				style={styles.container}
				resizeMode={'stretch'}>

				{/*<Animated.Image  // Base: Image, Text, View
					source={
					require('./Images/logo.png')}
					style={{ width: 75, height: 75, marginBottom: 20,transform: [  // `transform` is an ordered array
					{scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
					] }} />*/}

				<Image source={
						require('./Images/logo.png')}
						style={styles.logo}
						resizeMode={'stretch'}>
				</Image>

				<Image source={
						require('./Images/title.png')}
						style={styles.title}
						resizeMode={'stretch'}>
				</Image>

				<TouchableOpacity onPress={this.bSignFacebook.bind(this)}>
					<Image source={
						require('./Images/button1.png')}
						style={styles.button}
						resizeMode={'stretch'}>

						<Text style={styles.buttonText}>
		    				SIGN IN WITH FACEBOOK
		    			</Text>
					</Image>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.bHaveAC.bind(this)}>
					<Image source={
						require('./Images/button1.png')}
						style={styles.button}
						resizeMode={'stretch'}>

						<Text style={styles.buttonText}>
	        				HAVE AN ACCOUNT? LOG IN
	        			</Text>
					</Image>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.bSignEmail.bind(this)}>
					<Image source={
						require('./Images/button1.png')}
						style={styles.button}
						resizeMode={'stretch'}>

						<Text style={styles.buttonText}>
	        				SIGN IN WITH EMAIL
	        			</Text>
					</Image>
				</TouchableOpacity>

				<Image source={
					require('./Images/line.jpg')}
					style={styles.line}
					resizeMode={'stretch'}>
				</Image>

				<TouchableOpacity onPress={this.bTermsCond.bind(this)}>
					<Text style={styles.buttonText}>
	        				TERMS & CONDITIONS
	        		</Text>
        		</TouchableOpacity>
			</Image>
		);
	}

	componentDidMount() {
		this.state.bounceValue.setValue(1.5);  // Start large
		Animated.spring(  // Base: spring, decay, timing
		this.state.bounceValue,  // Animate `bounceValue`

		{ toValue: 0.8,  // Animate to smaller size
			friction: 1,  // Bouncier spring
		} ).start();
	}
}


AppRegistry.registerComponent('Main', () => Main);

module.exports = Main;
