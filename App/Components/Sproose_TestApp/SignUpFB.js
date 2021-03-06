var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ToastAndroid,
	AppRegistry,
	Navigator
} = React;

class SignUpFB extends React.Component{

backToMenu()
	{
		//var navigator = this.props.navigator;
		this.props.navigator.pop({
        	id: 'Main',
    	});
	}

	render(){
		return (
			<Image source={
				require('./Images/Man_In_Machine.jpg')} 
				style={styles.container}
				resizeMode={'stretch'}>
				
				<Image source={
					require('./Images/button1.png')}
					style={styles.button}
					resizeMode={'stretch'}>
				
					<Text style={styles.buttonText}>
						SIGN UP WITH FACEBOOK!
					</Text>
				</Image>

				<TouchableOpacity onPress={this.backToMenu.bind(this)}>
					<Image source={
						require('./Images/button1.png')}
						style={styles.button}
						resizeMode={'stretch'}>

						<Text style={styles.buttonText}>
		    				BACK TO MENU
		    			</Text>
					</Image>
				</TouchableOpacity>
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
	}
});

AppRegistry.registerComponent('SignUpFB', () => SignUpFB);

module.exports = SignUpFB;