var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ToastAndroid,
	AppRegistry,
	Navigator,
	TextInput
} = React;

const styles = require('../../../styles.js')

class HaveAC extends React.Component{

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

				 {/*<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}
					} onChangeText={(text) => this.setState({text})
					} value={this.state.text} />*/}

				<Image source={
					require('./Images/button1.png')}
					style={styles.button}
					resizeMode={'stretch'}>

					<Text style={styles.buttonText}>
						SIGN UP USING FACEBOOK!
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

AppRegistry.registerComponent('HaveAC', () => HaveAC);

module.exports = HaveAC;
