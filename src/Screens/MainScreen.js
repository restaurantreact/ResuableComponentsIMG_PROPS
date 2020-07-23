import React from 'react'
import {View, Text, Platform, ToastAndroid} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreenFunction = (props)=>{
    return(
      <View>
        <View style={{marginTop:'10%', width:'100%'}}>
        <TouchableOpacity style={{backgroundColor:'black', borderRadius:10, alignItems:'center', alignSelf:"center",
      height:80, justifyContent:'center', textAlign:'center', width:'98%', borderWidth:1,}} onPress={()=>{
        function showtoast() {
          if (Platform.OS === 'android') {
            ToastAndroid.show('BOTH SCREENS WILL BE SAME', ToastAndroid.SHORT)
          }
    
        }
        showtoast()
      }}>
        <Text style={{color:'white',fontSize:22 }}>THERE WILL BE NOT DIFFRENCE IN BOTH SCREENS</Text>
      </TouchableOpacity>
        </View>



      <View style={{marginTop:'10%', width:'100%'}}>

      <TouchableOpacity style={{backgroundColor:'black', borderRadius:10, alignItems:'center', alignSelf:"center",
      height:52, justifyContent:'center', textAlign:'center', width:'98%', borderWidth:1,}} onPress={()=>props.navigation.navigate('HomeClass')}>
        <Text style={{color:'white',fontSize:22 }}>IMPLEMENTATION_USING_CLASS</Text>
      </TouchableOpacity>

      </View>  
          <View style={{marginTop:'10%', width:'100%'}}>

          <TouchableOpacity style={{backgroundColor:'black', borderRadius:10, alignItems:'center', alignSelf:"center",
          height:52, justifyContent:'center', textAlign:'center', width:'98%', borderWidth:1,}} onPress={()=>props.navigation.navigate('HomeFunction')}>
            <Text style={{color:'white',fontSize:22 }}>IMPLEMENTATION_USING_FUNCTION</Text>
          </TouchableOpacity>
    
          </View>  
          </View>
    )
}

export default HomeScreenFunction