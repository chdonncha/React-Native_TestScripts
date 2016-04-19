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

const styles = require('../../../styles.js')

class SignEmail extends React.Component{

backToMenu()
	{
		//var navigator = this.props.navigator;
		this.props.navigator.pop({
        id: 'Main',
    	});
			/*onBack={() => {
				this.props.navigator.pop({
					id: 'Main',
				});*/
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
						SIGN UP WITH EMAIL
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

AppRegistry.registerComponent('SignEmail', () => SignEmail);

module.exports = SignEmail;
