import React from 'react';
import {Text, View} from 'react-native';

const Header= (props) =>{
    const {textStyle, viewStyle}=style;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}


const style={
    textStyle:{
        fontSize:20,
        
    },
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:1,
        shadowRadius: 5,
        elevation:2,
        position:'relative'
    }
}


export {Header};