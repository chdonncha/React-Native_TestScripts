'use strict' // what does it do?

var React = require('react-native');

const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image
 } = React;

const Firebase = require('firebase');
const styles = require('../../../styles');

var _scrollView: ScrollView;

class Buy_View extends React.Component{
	constructor(props) {
	super(props);
	this.itemsRef = new Firebase("https://luminous-inferno-2855.firebaseio.com/items");

	this.state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		})
	};
}

  bSignFacebook() {
    console.log('clicked signup facebook');
    this.props.navigator.push({
        id: 'Main',
      });
  }

renderTitle() {
    return (
    <View
      style={styles.container}>
      <TouchableOpacity
        onPress={this.bSignFacebook.bind(this)}>
          <Image source={
              require('./Images/Sproose_Black.png')}
              style={{
                height: 25,
                width: 125,
                marginTop: 30,
                marginBottom: 30,
              }}
              resizeMode={'stretch'}>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }

renderNavBar() {
  return(
    <ScrollView contentContainerStyle={styles.contentContainer}

      ref={(ScrollView) => {_scrollView = ScrollView; }}
      automaticallyAdjustContentInsets={false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollView, styles.horizontalScrollView]}>

        <TouchableOpacity
          style={styles.scrollButton}
          onPress={this.bSignFacebook.bind(this)}>

          <Text style={styles.scrollHorizontalText}>
            SERVICE WASH
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scrollButton}
          onPress={this.bSignFacebook.bind(this)}>

          <Text style={styles.scrollHorizontalText}>
            DRY CLEANING
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scrollButton}
          onPress={this.bSignFacebook.bind(this)}>

          <Text style={styles.scrollHorizontalText}>
            HOUSEHOLD
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scrollButton}
          onPress={this.bSignFacebook.bind(this)}>

          <Text style={styles.scrollHorizontalText}>
            OTHER
          </Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

  render() {
    return (
      <View>
        {this.renderTitle()}
        {this.renderNavBar()}

        <Image source={
          require('./Images/line.jpg')}
          style={
          {
          width: 300,
          height: 1
          }}
          resizeMode={'stretch'}>
        </Image>

        <ScrollView

          ref={(ScrollView) => {_scrollView = ScrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>

          <Image source={
              require('./Images/2_Piece.jpg')}
              style={styles.verticalScrollView}
              resizeMode={'stretch'}>
          </Image>

          <Image source={
            require('./Images/3_Piece.jpg')}
            style={styles.verticalScrollView}
            resizeMode={'stretch'}>
          </Image>

          <Image source={
            require('./Images/5_Shirts.jpg')}
            style={styles.verticalScrollView}
            resizeMode={'stretch'}>
          </Image>

          <Image source={
            require('./Images/Coat.jpg')}
            style={styles.verticalScrollView}
            resizeMode={'stretch'}>
          </Image>

          <Image source={
            require('./Images/Single_Shirt.jpg')}
            style={styles.verticalScrollView}
            resizeMode={'stretch'}>
          </Image>

        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Buy_View', () => Buy_View);

module.exports = Buy_View;
