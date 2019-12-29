import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, DatePickerIOS} from 'react-native';
import ListItem from './app/component/listItem';

export  default function App(){
  const [outputText, setOutputText] = useState("Test Button on Native App")
  const [chosenDate, setDate] = useState(new Date())
  return(
    <View style={styles.container}>  
      <Text style={styles.mainHeading}>Shopping Cart</Text>
      <ListItem/>
      <Text>{outputText}</Text>
      <Button title="Check State" onPress={()=>setOutputText('Text Changed')}/>
      <TouchableOpacity
         style={styles.button}
         onPress={()=>setOutputText('Text Changed from TouchableOpacity')}>
         <Text> Touch Here </Text>
       </TouchableOpacity>

       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    alignItems:'center',
    backgroundColor:'lightblue',
    justifyContent:'flex-start'
  },button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  mainHeading:{
    marginTop:20,
    fontWeight:'bold',
    color:'hotpink',
    fontSize:30
  },
  buttons:{
    borderStyle:'solid',
    borderColor:'black'
  }
})