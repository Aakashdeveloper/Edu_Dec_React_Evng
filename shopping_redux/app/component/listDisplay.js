import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ListDisplay =(props) =>{

    const ProdRender = ({proddata}) => {
        if(proddata){
            return proddata.map((data,key)=> {
                    return(
                        <View key={key}>
                        <Image 
                        source={{uri:data.image}} 
                        style={styles.placeImage}/>
                        <Text style={styles.textval} >{data.name}</Text>
                        <Text >{'\n'}</Text>
                        </View>
                    )    
                })
        }
        
    }
        

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