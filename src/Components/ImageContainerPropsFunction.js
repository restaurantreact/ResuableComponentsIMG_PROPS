import React from 'react'
import { View, Image, Text} from 'react-native'

const ImageContainerPropsFunction = (props)=>{

    return(
        <View style={{flex:1, flexDirection:'row'}}>
        <Image source={props.imgsrc} style={{flex:1, width:100, height:200, resizeMode:'cover'}}/>
      <Text style={{flex:1, fontSize:25,alignSelf:'center'}}> {props.title } </Text>
      </View>
    )

}
export default ImageContainerPropsFunction