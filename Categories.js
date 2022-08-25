import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image, TextInput, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Categories = () => {
    const navigation=useNavigation();
    const image = { uri: "https://i.pinimg.com/originals/f9/b5/06/f9b50630ff3a81b91fbd962cae737f82.jpg" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='repeat' style={styles.image}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.coloumn}>
            <View style={styles.searchBox}>
              <TextInput
                      style={styles.TextInput}
                      placeholder="Search"                    
                  />
              <TouchableOpacity style={styles.searchbtn} onPress={()=> Alert.alert('We are still working on the search option')}>
                <Image source={{
                  width:20,
                  height:20,
                  uri:"https://cdn-icons-png.flaticon.com/512/751/751381.png"
                }}
                />  
              </TouchableOpacity>    

             </View>     

            <TouchableOpacity style={styles.titlenav} onPress={()=>navigation.navigate('Liteary')}>
            <Text style={styles.cattitle}>Literary Fiction</Text>
            </TouchableOpacity>
            <View style={styles.row}>              
              <TouchableOpacity style={styles.t1} onPress={()=>navigation.navigate('Zorrie')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeN69uayZsYuqSrCIT3QV12eVhe5PGLs3J0-Czqo5KG4Bs_U1s"
                }}                
                />
                <Text style={styles.bookname}>Zorrie</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Beloved')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTK1H3KTFiCBn8RoGMOikUcT71l7SSa7jblH-Ei4ObhGORmhwaA"
                }}                
                />
                <Text style={styles.bookname}>Beloved </Text>
              </TouchableOpacity>

              
            </View>
            <TouchableOpacity style={styles.titlenav} onPress={()=>navigation.navigate('Mystery')}>
            <Text style={styles.cattitle}>Mystery</Text>
            </TouchableOpacity>
            <View style={styles.row}>              
              <TouchableOpacity style={styles.t1} onPress={()=>navigation.navigate('GoneGirl')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQANCB2b2W72j1s-YQPXgCDc0wXRI7HVKNRDK0CCIwxCwsNchEk"
                }}                
                />
                <Text style={styles.bookname}>Gone Girl</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Seconds22')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsbNzswl6RXym3PZcFbW3rtEbfWXuCMNBV9ADCCAfWjwz1_UpQ"
                }}                
                />
                <Text style={styles.bookname}>22 Seconds</Text>
              </TouchableOpacity>

              
            </View>
            <TouchableOpacity style={styles.titlenav} onPress={()=>navigation.navigate('Thriller')}>
            <Text style={styles.cattitle}>Thriller</Text>
            </TouchableOpacity>
            <View style={styles.row}>              
              <TouchableOpacity style={styles.t1} onPress={()=>navigation.navigate('Verity')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzC4b1sh8CUf3KqAYYP0_xURZzhyuya65wZ1U2tCg8IONsXmjJ"
                }}                
                />
                <Text style={styles.bookname}>Verity</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Misery')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8Mlyr31Vo7QRqeAlgmUce_Z_OexErPOy7aoBA7zs5g3BZznP"
                }}                
                />
                <Text style={styles.bookname}>Misery</Text>
              </TouchableOpacity>

              
            </View>
            <TouchableOpacity style={styles.titlenav} onPress={()=>navigation.navigate('Horror')}>
            <Text style={styles.cattitle}>Horror</Text>
            </TouchableOpacity>
            <View style={styles.row}>              
              <TouchableOpacity style={styles.t1} onPress={()=>navigation.navigate('It')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbVZgRR65QJ_Cad7wANF4kseUyFhciIHEI717kL6C9E4xqZ1bo"
                }}                
                />
                <Text style={styles.bookname}>It</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Ring')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oJTrX9n6wJDJrammo5uzoSE_CM8iFWIqN4xDy_25MkkUZWFx"
                }}                
                />
                <Text style={styles.bookname}>Ring</Text>
              </TouchableOpacity>

              
            </View>
            <TouchableOpacity style={styles.titlenav} onPress={()=>navigation.navigate('Romance')}>
            <Text style={styles.cattitle}>Romance</Text>
            </TouchableOpacity>
            <View style={styles.row}>              
              <TouchableOpacity style={styles.t1} onPress={()=>navigation.navigate('FiftyShadesDarker')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-BOJ_6EqGPFrfA4pnaHRJ2fZaItmQGfbN95-Dx4W3DEALbHxu"
                }}                
                />
                <Text style={styles.bookname}>Fifty Shades Darker</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('TheNotebook')}>
                <Image source={{
                  width:150,
                  height:200,                
                  uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff6vmxs3NXHuFKnfZES19MSmgnMf2TjOXpONI6GW1tKeGWfTC"
                }}                
                />
                <Text style={styles.bookname}>The Notebook</Text>
              </TouchableOpacity>

              
            </View>
          </View>
        </ScrollView>    
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
    opacity:1
},
row:{
  flexDirection:'row',
  justifyContent:'center'
},

coloumn:{
  flexDirection:'column'
},
t1:{
  paddingRight:30
},
cattitle:{
  backgroundColor:'white',
  borderWidth:2,
  fontSize:20,
  textAlign:'center',
  fontWeight:'bold',
  padding:5,
  borderRadius:20
},
bookname:{
  backgroundColor:'white',
  textAlign:'center',
  fontWeight:'bold',
  borderWidth:1,
  borderColor:'red'
},
titlenav:{
  padding:10,
},
TextInput:{
  fontSize:20,
  fontStyle:'italic' 

},
searchBox:{
  flexDirection:'row',
  borderWidth:2,
  backgroundColor:'#fff',
  justifyContent:'center',
  padding:15,
  marginTop:30,
  marginBottom:15,
  borderRadius:25,
  marginLeft:5,
  marginRight:5

},
searchbtn:{
  backgroundColor:'white',
  justifyContent:'center',
  paddingLeft:10,
  
}


});  

export default Categories

