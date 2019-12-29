import React, {useState,useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet,Image } from 'react-native'
import json from '../db.json';
const url = 'http://localhost:8900/shopping'

function ListItem(){

  const [data,setData] = useState(json);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        setData(res)
    })
  }, [data])
  
  return(
    <ScrollView style={styles.listContainer}>
        <Text>List Item</Text>
        <View>
            {data.map((item,key)=>{
                return(
                <View key={key}>
                    <Image
                      style={styles.placeImage}
                      source={{uri: item.image}}
                    />
                    <Text style={styles.textval}>{item.name}</Text>
                </View>
                )
                
            })}

        </View>
    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
    },
    placeImage:{
        height:200
    },
    textval:{
        fontSize:30
    }
})


export default ListItem;