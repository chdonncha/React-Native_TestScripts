const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    // remove width and height to override fixed static size
	  width: null,
	  height: null,
	},
	listContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
	listview: {
	flex: 1,
	},
	li: {
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
		borderColor: 'transparent',
		borderWidth: 1,
		paddingLeft: 16,
		paddingTop: 14,
		paddingBottom: 16,
	},
	liContainer: {
		flex: 2,
	},
	liText: {
		color: '#333',
		fontSize: 16,
	},
	navbar: {
		alignItems: 'center',
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
		borderColor: 'transparent',
		borderWidth: 1,
		justifyContent: 'center',
		height: 44,
		flexDirection: 'row'
	},
	navbarTitle: {
		color: '#444',
		fontSize: 16,
		fontWeight: "500"
	},
	statusbar: {
		backgroundColor: '#fff',
		height: 22,
	},
	center: {
		textAlign: 'center',
	},
	actionText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
	},
	action: {
		backgroundColor: constants.actionColor,
		borderColor: 'transparent',
		borderWidth: 1,
		paddingLeft: 16,
		paddingTop: 14,
		paddingBottom: 16,
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
	},
	splashGifImage: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
	center: {
		textAlign: 'center',
	},
})

module.exports = styles
module.exports.constants = constants;
