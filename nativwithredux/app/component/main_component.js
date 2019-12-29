import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListItem from './listItem';

export default function MainComponent() {
  const [outputText, setOutputText] = useState("Test Button on native app")
  return (
    <View style={styles.container}>
     <Text style={styles.mainHeading}>Shopping Cart</Text>
      
      <ListItem/>
      <Text>{outputText}</Text>
      <Button title="Change text" onPress={() => setOutputText('The Text Changed')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent:'flex-start'
  },
  mainHeading:{
    marginTop:20,
    fontWeight: "bold",
    color: "#6495ED",
    fontSize:30
  },
  textColor:{
    color:"#191970"
  }
});
