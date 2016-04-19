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

var testData =
[{"title":"Shirts"},
{"title":"Jeans"},
{"title":"Suits"},
{"title":"Tux"},
{"title":"Homeclothes"},
{"title":"Image1"},
{"title":"Image1"},
{"title":"Image1"},
{"title":"Image1"},
{"title":"Image1"},
{"title":"Image1"}];

const Firebase = require('firebase');
const styles = require('../../../styles');

var _scrollView: ScrollView;

class Buy_View extends React.Component{

	/*backToMenu()
	{
		//var navigator = this.props.navigator;
		this.props.navigator.pop({
        id: 'Main',
    	});
	}*/

	constructor(props) {
	super(props);
	this.itemsRef = new Firebase("https://luminous-inferno-2855.firebaseio.com/items");

	this.state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		})
	};
}

listenForItems(itemsRef) {
  itemsRef.on('value', (snap) => {

    // get children as an array
    var items = [];
    snap.forEach((child) => {
      items.push({
        title: child.val().title,
        subTitle: child.val().subTitle,
        _key: child.key()
      });
    });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
  });
}

_addItem() {
  Alert.alert(
    'Add New Item',
    null,
    [
      {
        text: 'Add',
        onPress: (text) => {
          this.itemsRef.push({ title: text })
        }
      },
    ],
    'plain-text'
  );
}

	componentDidMount() {
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(testData)
  })
  //this.listenForItems(this.itemsRef);
}

  _renderItem(item) {
      const onPress = () => {
        Alert.alert(
          'Complete',
          null,
          [
            {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
            {text: 'Cancel', onPress: (text) => console.log('Cancel')}
          ],
          'default'
        );
      };
      return (
        <ListItem item={item} onPress={onPress} />
    );
  }

  bSignFacebook() {
    console.log('clicked signup facebook');
    this.props.navigator.push({
        id: 'SignUpFB',
      });
  }

	render() {
    return (
      <View style={styles.listContainer}>
        <StatusBar title="SPROOSE" />
        <ScrollView

        ref={(scrollView) => { _scrollView = scrollView; }}

        horizontal={true}
        style={[styles.scrollView,
        styles.horizontalScrollView]}>

        <TouchableOpacity onPress={this.bSignFacebook.bind(this)}>

        <Image source={
          require('./Images/button1.png')}
          style={styles.button}
          resizeMode={'stretch'}>

            <Text style={styles.buttonText}>
                  BUSSINESS CLOTHES
            </Text>
          </Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.bSignFacebook.bind(this)}>
        <Image source={
          require('./Images/button1.png')}
          style={styles.button}
          resizeMode={'stretch'}>

          <Text style={styles.buttonText}>
                HOMEWARE
          </Text>
        </Image>
    </TouchableOpacity>

    <TouchableOpacity onPress={this.bSignFacebook.bind(this)}>
      <Image source={
        require('./Images/button1.png')}
        style={styles.button}
        resizeMode={'stretch'}>

        <Text style={styles.buttonText}>
              OTHER STUFF
        </Text>
      </Image>
  </TouchableOpacity>

        </ScrollView>
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>
        {//<ActionButton title="Add" onPress={this._addItem.bind(this)} />
      }
      </View>
    );
  }
}

		 /*	<Image source={
				require('./Images/Man_In_Machine.jpg')}
				style={styles.container}
				resizeMode={'stretch'}>

				<Image source={
					require('./Images/button1.png')}
					style={styles.button}
					resizeMode={'stretch'}>

					<Text style={styles.buttonText}>
						This is the buy menu
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
}*/

AppRegistry.registerComponent('Buy_View', () => Buy_View);

module.exports = Buy_View;
