import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'Jommmmmmhn'},
            {key: '1Jillian'},
            {key: '2Jimmy'},
            {key: '3Julie'},
            {key: '5Joel'},
            {key: '6John'},
            {key: '7Jillian'},
            {key: '9Jimmy'},
            {key: '8Julie'},
            {key: 'J23oel'},
            {key: 'Joh3n'},
            {key: 'Jil5lian'},
            {key: 'Jim5my'},
            {key: 'Ju3lie'},
            {key: 'Joael'},
            {key: 'Jobbbhn'},
            {key: 'Ji1llian'},
            {key: 'Jimmy'},
            {key: 'Julbie'},
            {key: 'Joecl'},
            {key: 'Jozhn'},
            {key: 'Jidllian'},
            {key: 'Jimcmy'},
            {key: 'Julzie'},
            {key: 'Jocel'},
            {key: 'h23n'},
            {key: 'Jil53235lian'},
            {key: 'Jimddmy'},
            {key: 'Jccculie'},
            {key: 'Joccel'},
            {key: 'Jcccon'},
            {key: 'Jicccllian'},
            {key: 'Jimbo Fisher'},
            {key: 'Jubbbblie'},
            {key: 'Jo333el'},
            {key: 'Jofghhhhn'},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    backgroundColor: 'blue',
    color: 'red',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
