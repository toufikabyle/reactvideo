import React, { useState, useEffect } from "react";
import {ImageBackground,StyleSheet,Text,View,SafeAreaView,Button,ScrollView,contentContainerStyle,
    Linking,
    Modal, 
    Pressable,
    Dimensions
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";
  import { WebView } from "react-native-webview";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";

 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");

 
 
 const App = () => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");
   const [modalVisible, setModalVisible] = useState(false);
   const [playing, setPlaying] = useState(false);
   const [Height_Layout, setHeight_Layout] = useState();
   const [Width_Layout, setWidth_Layout] = useState();

   const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg",
  };

  const header = {
    uri:
      "https://image.shutterstock.com/image-illustration/elegant-sapphire-blue-background-white-260nw-1377812273.jpg",
  };


   const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode, playing)
    setPlaying(false)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });
  
 return (
    
    <SafeAreaView style={mode === "portrait" ? styles.container : styles.containers}onLayout={(event) => {
      setHeight_Layout(event.nativeEvent.layout.height),
      setWidth_Layout(event.nativeEvent.layout.width)}}>
        
   
      <View style={mode === "portrait" ? styles.imagecontainer2 : styles.imagecontainer3}>
      <ImageBackground source={header} style={styles.image2}>
      <View style={styles.linkcenter}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          ><View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Home</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.linksv : styles.links2v} onPress={() => setModalVisible(true)}>PlayVideo</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Profolio</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Services</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Contact</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View> 
      
    <Modal
    animationType="fade"
    transparent={false}
    visible={modalVisible}
    supportedOrientations={['landscape']} 
    onRequestClose={() => {
      Alert.alert("Turned off.");
      setModalVisible(!modalVisible);
    }}
  >
    
    <View style={styles.centeredView}>
        <View style={styles.video2}>
    <WebView
    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/S4qWU1bQVq0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
 />
    </View>

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Turn Off video</Text>
        </Pressable>
    
    </View>
  </Modal>
  
  
  <View style={mode === "portrait" ? styles.imagecontainer : styles.imagecontainerb}>
      
    <ImageBackground source={image} style={styles.image}>
    <View>
          <Text style={styles.toptext}>
          HD Monochrome 
          </Text>
          <Text style={styles.toptextb}>
          An XHTML 1.0 Strict Template by Bryant Smith 
          </Text>
        </View>
    <Icon name="youtube"  color="red" size={80} onPress={() => setModalVisible(true)} />
    </ImageBackground>
  
    </View> 
   
    
    <ScrollView style={styles.text}>
      <View style={styles.innertext}>
       
        <Text style={styles.heading2}>The Title of an Article</Text>
        <Text style={styles.text2}>
        You may use this template on any site, anywhere, for free just please leave the link back to me in the footer.
        This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :){"\n"}{"\n"}
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. 
        Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. 
        Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. 
        Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. 
        Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. 
        Sed vehicula pellentesque quam.{"\n"}{"\n"}
        Vestibulum augue quam, interdum id, congue semper, convallis non, velit.
       Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. 
       Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. 
       Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
       Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
        </Text>
        <Text style={styles.heading2}>So Many Titles, So Little Time.</Text>
        <Text style={styles.text2}>
        You may use this template on any site, anywhere, for free just please leave the link back to me in the footer.
        This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :){"\n"}{"\n"}
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. 
        Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. 
        Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. 
        Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. 
        Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. 
        Sed vehicula pellentesque quam.{"\n"}{"\n"}
        Vestibulum augue quam, interdum id, congue semper, convallis non, velit.
       Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. 
       Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. 
       Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
       Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
        </Text>
        <Text style={styles.heading2}>Yet Another One!</Text>
        <Text style={styles.text2}>
        You may use this template on any site, anywhere, for free just please leave the link back to me in the footer.
        This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :){"\n"}{"\n"}
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. 
        Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. 
        Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. 
        Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. 
        Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. 
        Sed vehicula pellentesque quam.{"\n"}{"\n"}
        Vestibulum augue quam, interdum id, congue semper, convallis non, velit.
       Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. 
       Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. 
       Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
       Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
        </Text>
       
      </View>
    </ScrollView>
    
    
  </SafeAreaView>
   );
 }
 const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#103d87",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        marginTop:"10%",
        marginLeft:'3%',
        marginRight:'3%',
       
        
      },

      containers: {
        flex: 1,
        backgroundColor: "#103d87",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        marginTop:"4%",
        marginLeft:'3%',
        marginRight:'3%',
        
      }, 
      toptext: {
        color: "white",
        fontWeight: "bold",
        marginRight: "50%",
        fontSize: "14@s",
        marginTop:"-8%",
        
      },
      toptextb: {
        color: "#ebecfc",
        fontWeight: "bold",
        marginLeft: "2%",
        marginTop: "0%",
        fontSize: "8@s",
      },

      imagecontainer: {
        justifyContent: "flex-start",
        flex: 0.4,
        width: "85%",
        backgroundColor: "green",
        marginTop:"25%",
        borderWidth:5,
        borderColor:"white",
        position:"absolute",
        height: "20%",
        
      },
      imagecontainerb: {
        //justifyContent: "flex-start",
        //flex: 0.4,
        width: "100%",
        //backgroundColor: "green",
        //marginTop:"8%",
        borderWidth:10,
        borderColor:"white",
        //position:"absolute",
        height: "100%",
        
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: "center"
                 
      },


      image2: {
        width: "100%",
        marginLeft: "5@s",
        marginRight: "5@s",
        height: "100%",
      },
      imagecontainer2: {
        alignItems: "center",
        flex: 0.4,
        width: "100%",
        marginTop:'0%',
        //height: "20%",
        
        
       // borderWidth:5,
        //borderColor:"white",
       
      },
      imagecontainer3: {
        alignItems: "center",
        flex: 0.2,
        width: "90%",
      },
      text: {
        flex: 0.8,
        width: "85%",
        backgroundColor: "#d2e0f7",
        marginTop:"25%",
        borderWidth:5,
        borderColor:"white",
      },
      innertext: {
        margin: "8@s",
      },
      links: {
        color: "white",
        fontWeight: "bold",
        marginRight: "10@s",
        marginLeft: "10@s",
        fontSize: "12@s",
      },
      linksv: {
        color: "red",
        fontWeight: "bold",
        marginRight: "10@s",
        marginLeft: "10@s",
        fontSize: "12@s",
      },
      links2: {
        color: "white",
        fontWeight: "bold",
        marginRight: "25@s",
        marginLeft: "15@s",
        fontSize: "14@s",
      },
      links2v: {
        color: "red",
        fontWeight: "bold",
        marginRight: "25@s",
        marginLeft: "15@s",
        fontSize: "14@s",
      },
    
      heading2: {
        color: "black",
        fontWeight: "bold",
        fontSize: "14@s",
        marginTop: "5@s",
      },
    
      heading: {
        color: "black",
        fontWeight: "bold",
        marginBottom: "5@s",
        fontSize: "18@s",
      },
      text2: {
        color: "black",
        fontSize: "12@s",
      },
    
      linkcenter2: {
        height: "100%",
        justifyContent: "center",
      },
      buttonClose: {
        backgroundColor: "red",
        marginTop:"3%",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginBottom:20,
      },

      centeredView: {
        flexDirection: "column",
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        marginTop: 0,
        alignItems: "center",
        height: "100%",
      },
    
      video2: {
        flex:1,
        width: "100%",
        backgroundColor: "black",

      },

 });
 export default App;