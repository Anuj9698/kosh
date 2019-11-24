/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={dataSource:[]}
  }


  componentDidMount(){
    return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=2500&type=restaurant&key=AIzaSyAIux_9gVtovYz4EOfxouSI5GXpkcT5KKs')
      .then((response) => response.json())
      .then((responseJson) => {
  // console.warn(responseJson.results);
  
        this.setState({
          dataSource: responseJson.results,
        }, function(){
  
        });
  
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    return (
      <View>
          <ScrollView>
        <FlatList
        data={this.state.dataSource}
            renderItem={({item}) => <View style={{flex: 1, flexDirection: 'row'}} >
               <Image 
          style={{width: 66, height: 58}}
          source={{uri: item.icon}}/>
              <Text>{item.name}</Text>
              {item.types.map((x)=>{
            <Text>{x}</Text>
              })}
              <Text>{item.rating}</Text>
              </View>}
          keyExtractor={({id}, index) => id}
        />
          </ScrollView>
          </View>
    );

  }
 
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
