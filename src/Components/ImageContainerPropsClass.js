import React from 'react'
import { View, Image, Text} from 'react-native'

class ImageContainerPropsClass extends React.Component{

    constructor(props){
        super(props)
    }

render(){
    return(
        <View style={{flex:1, flexDirection:'row'}}>
          <Image source={this.props.imgsrc} style={{flex:1, width:100, height:200, resizeMode:'stretch'}}/>
        <Text style={{flex:1, fontSize:50,alignSelf:'center'}}> {this.props.title } </Text>
        </View>
    )
}

}
export default ImageContainerPropsClass