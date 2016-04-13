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
	Animated 
} = React;

class Main extends React.Component{

	bSignFacebook() {
		//alert('clicked signup facebook!');
		console.log('clicked signup facebook');
		//ToastAndroid.show('clicked signup facebook', ToastAndroid.SHORT);

		var navigator = this.props.navigator;
		navigator.replace({
        id: 'SignUpFB',
    	});
	}

	bHaveAC()
	{
		//alert('clicked have account!');
		console.log('clicked have account');
		//ToastAndroid.show('clicked have account', ToastAndroid.SHORT);

		var navigator = this.props.navigator;
		navigator.replace({
        id: 'HaveAC',
    	});
	}

	bSignEmail()
	{
		//alert('clicked have email!');
		console.log('clicked have email');
		//ToastAndroid.show('clicked have email', ToastAndroid.SHORT);

		var navigator = this.props.navigator;
		navigator.replace({
        id: 'SignEmail',
    	});
	}

	bTermsCond()
	{
		//alert('clicked terms and conditions!');
		console.log('clicked terms and conditions');
		//ToastAndroid.show('clicked terms and conditions', ToastAndroid.SHORT);

		var navigator = this.props.navigator;
		navigator.replace({
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
		} ).start();  // Start the animation
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
buttonText: {
	//font: italic bold 12px/30px Georgia, serif;
	textAlign: 'center',
	color: '#FFFFFF',
	marginTop: 15,
},
button: {
	width: 250,
	height: 50,
	backgroundColor: 'transparent',
	marginBottom: 20,
},
logo: {
	width: 75,
	height: 75,
	backgroundColor: 'transparent',
	marginBottom: 30,
},
title: {
	width: 200,
	height: 30,
	backgroundColor: 'transparent',
	marginBottom: 125,
},
line: {
	width: 300,
	height: 1,
	backgroundColor: 'transparent',
	marginTop: 50,
	marginBottom: 20,
}
});

AppRegistry.registerComponent('Main', () => Main);

module.exports = Main;