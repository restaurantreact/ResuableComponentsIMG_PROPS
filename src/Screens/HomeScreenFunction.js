import React from 'react'
import {View} from 'react-native'

import ImageContainerPropsFunction from '../Components/ImageContainerPropsFunction'

const HomeScreenFunction = ()=>{
    return(
     <View style={{flex:1}}>
            <ImageContainerPropsFunction title="bird_using_Function" imgsrc={require('../Assests/bird.jpg')}/>
            <ImageContainerPropsFunction title="droplet_using_Function" imgsrc={require('../Assests/droplet.jpg')}/>
            <ImageContainerPropsFunction title="eye_using_Function" imgsrc={require('../Assests/eye.jpg')}/>
        </View> 
   
     
    )
}

export default HomeScreenFunction