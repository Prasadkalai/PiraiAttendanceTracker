import React,{Component} from 'react';
import {
View,
Text,
ImageBackground,
StyleSheet,
TextInput,
TouchableOpacity,
StatusBar
} from 'react-native';
import {Avatar} from 'react-native-elements'

class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#101042" />
        <View style={styles.header}>

        <ImageBackground style={styles.imagebackground}
        source={require('../image/template.png')}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:50,alignSelf:'flex-start',marginLeft:50,marginTop:100}}>Login</Text>

        </ImageBackground>
      </View>
      <View style={styles.footer}>
          <TextInput style={{alignSelf:'stretch',height:40,color:'gray',borderBottomColor:'#42558d',borderBottomWidth:1,margin:50}}  placeholder={'email'} underlineColorAndroid={'transparent'} />   
          <TextInput secureTextEntry style={{alignSelf:'stretch',height:40,color:'gray',borderBottomColor:'#42558d',borderBottomWidth:1,marginLeft:50,marginRight:50}}  placeholder={'password'} underlineColorAndroid={'transparent'} />   
          <TouchableOpacity>
           <Text style={{color:'gray',paddingLeft:200,paddingTop:10 }}>Forgot password ?</Text> 
          </TouchableOpacity>
          <View style={{marginLeft:100,marginRight:100,marginTop:30}}>
          <TouchableOpacity style={{backgroundColor:'#42558d',alignItems:'center',borderRadius:10}} onPress={()=>this.props.navigation.navigate('STackscreenThree')}>
            <Text style={{fontSize:30,color:'white'}}>
              Login
              </Text>
              </TouchableOpacity>
    </View> 
     </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
flex:1,
backgroundColor:'white',
justifyContent:'center',
alignItems:'center',
  },
  header:{
    flex:1
  },
  imagebackground:{
    flex:1,justifyContent:'center',alignItems:'center',width:400,height:200
  },
footer:{
  flex:2,alignSelf:'stretch'
},

})

export default Login;