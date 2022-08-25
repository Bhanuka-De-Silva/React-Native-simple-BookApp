import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {useState} from 'react'

const Register = () => {
    const navigation=useNavigation();
    const image = { uri: "https://ychef.files.bbci.co.uk/976x549/p03gg1lc.jpg" };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.title}>Register with us</Text>
            <View style={styles.inputcontainer}>
                
                <TextInput
                    style={styles.TextInput}
                    placeholder="First Name"
                    placeholderTextColor="blue"
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last Name"
                    placeholderTextColor="blue"
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Email"
                    placeholderTextColor="blue"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Password"
                    placeholderTextColor="blue"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Comfirm Password"
                    placeholderTextColor="blue"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                
            </View>
        <TouchableOpacity style={styles.regbtn} onPress={()=>navigation.navigate('Categories') } >
            <Text style={styles.logintext}>Register</Text>
        </TouchableOpacity>
    </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'

  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity:0.8
  },
  TextInput:{
    backgroundColor:'white',
    width:"100%",
    borderWidth:1,
    borderWidth: 1,
    borderRadius: 5,
    padding:15,
    marginBottom:30,
    textAlign:'center'
  },
  title:{
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center',
    paddingBottom:20,
    marginTop:10,
    fontStyle:'italic',
    color:'purple',
    textDecorationLine:'underline'
  },
  regbtn:{
    backgroundColor:'yellow',
    padding:15,
    marginLeft:"20%",
    marginRight:"20%",
    borderRadius:100,
    borderWidth:2,
    marginBottom:50,
    borderColor:'red'
  },
  logintext:{
    textAlign:"center",
    fontSize:25,
    fontWeight:'bold'

  },    

});

export default Register