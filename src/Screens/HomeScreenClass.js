import React from 'react'
import {View} from 'react-native'
import  ImageContainerPropsClass from '../Components/ImageContainerPropsClass'
//import bird from '../Assests/bird.jpg'
//import droplet from '../Assests/droplet.jpg'
//import eye from '../Assests/eye.jpg'


class HomeScreenClass extends React.Component{

  constructor(props){
        super(props)
    }

render(){
    return(
        <View style={{flex:1}}>
            <ImageContainerPropsClass title="bird_using_Class" imgsrc={require('../Assests/bird.jpg')}/>
            <ImageContainerPropsClass title="droplet_using_Class" imgsrc={require('../Assests/droplet.jpg')}/>
            <ImageContainerPropsClass title="eye_using_Class" imgsrc={require('../Assests/eye.jpg')}/>
        </View> 
    )
}

}

export default HomeScreenClass