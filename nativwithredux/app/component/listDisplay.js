import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ProdRender = ({proddata}) => {
    if(proddata){
        return proddata.map((item,key)=> {
                return(
                    <View key={key}>
                    <Image 
                    source={{uri:item.image}} 
                    style={styles.placeImage}/>
                    <Text style={styles.textval} >{item.name}</Text>
                    <Text >{'\n'}</Text>
                    </View>
                )    
            })
    }
    
}

const ListDisplay =(props) =>{

        return(
                <ScrollView style={styles.listContainer}>
                    <View style={styles.listItem}>
                        {ProdRender(props)}
                    </View>  
                </ScrollView>   
        )
}


const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
      },
    listItem:{
        width:"100%",
        padding:10,
        marginTop:2,
        color:'#191970',
        backgroundColor: '#eee',
        alignSelf:'stretch',
    },
    placeImage:{
        marginRight:8,
        height:200
    },
    textval:{
        textAlign:'center',
        fontSize:30
    }
})



export default ListDisplay;