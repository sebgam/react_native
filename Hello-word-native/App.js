import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image,Button,FlatList, alert } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Desarrollo G</Text>
        <Text>Sebastian Gamboa Osorio</Text>
        <View  style={styles.container}>
         <Image
          style={{width:100, height:100}}
          source={require('./public/images/11186918_1580835828869007_544154404_n.jpg')}
        /> 
        <Image
          style={{width:100, height:100}}
          source={require('./public/images/13248720_781615395272365_1938974168_n.jpg')}
        />
        </View>
        <Text>Images Fit.</Text>
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
