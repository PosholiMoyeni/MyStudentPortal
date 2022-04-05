import { StatusBar, } from 'expo-status-bar';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  Image,
  TouchableOpacity
 } from 'react-native';
export default function App() {
  return (
    <View style={styles.Container}>
    <View style={styles.upperbox}/>
       <Image 
          style={styles.Profile}
          resizeMode="contain"
          source={require("./Posholi.png")}
        /> 
        <Text style={styles.Info} numberOfLines={1} ellipsMode="end">
          LIMKOKWING UNIVERSITY of CREATIVE TECHNOLOY
          </Text>
          <Text style={styles.a}>POSHOLI ED MOYENI</Text>
          <Text style={styles.b}> 901013564</Text>
          <Text style={styles.c}numberOfLines={1}>
            BSc Software Engineering with Multimedia
    </Text>
    <View style={styles.icons}><TouchableOpacity>
        <AntDesign name="menuunfold" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity><SimpleLineIcons name="settings" size={24} color="white" /></TouchableOpacity></View>
    <ScrollView contentContainerStyle={styles.contentContainer}>
    
        <View style={styles.Semester1}/>
        <Text style={styles.Sem1}>
          SEMESTER 1</Text>
        <Text style={styles.Results1}>
              ~Algebra A-{"\n"}{"\n"}
              ~Business_Communication C+{"\n"}{"\n"}
              ~Creative and Innovation Studies B+{"\n"}{"\n"}
              ~Fundamentals of Design A{"\n"}{"\n"}
              ~Introductoion to Computer Skills B-{"\n"}{"\n"}
              ~Priciples of Programming C+</Text>
          <Text style={styles.GPA1}>GPA 3.23</Text>
        <View style={styles.Semester2}/>
        <Text style={styles.Sem2}>
          SEMESTER 2</Text>
        <Text style={styles.Results2}>
              ~Introduction to Digital Graphics B{"\n"}{"\n"}
              ~Introduction to Digital Imaging C+{"\n"}{"\n"}
              ~Calculus B+{"\n"}{"\n"}
              ~Introduction to Data Communication B+{"\n"}{"\n"}
              ~Introductoion to Multimedia B-{"\n"}{"\n"}
              ~Introductoion to Database B-{"\n"}{"\n"}
              ~Priciples of Software Engineering B+</Text>
              <Text style={styles.GPA2}>GPA 3.28</Text>
        <View style={styles.Semester3}/> 
        <Text style={styles.Sem3}>
          SEMESTER 3</Text>
        <Text style={styles.Results3}>
              ~Calculus II B-{"\n"}{"\n"}
              ~C++ Programming I B-{"\n"}{"\n"}
              ~Data Communication and Networking B{"\n"}{"\n"}
              ~Fundamentals of Internet Technology B-{"\n"}{"\n"}
              ~Multimedia Technology B-{"\n"}{"\n"}
              ~Priciples of Web Design B</Text>
       <Text style={styles.GPA3}>GPA 3.11</Text>
       <View style={styles.Semester4}/> 
        <Text style={styles.Sem4}>
          SEMESTER 4</Text>
        <Text style={styles.Results4}>
              ~Probability and Statistics ___{"\n"}{"\n"}
              ~C++ Programming II ___{"\n"}{"\n"}
              ~Java Programming I ___{"\n"}{"\n"}
              ~Mobile Device Programming ___{"\n"}{"\n"}
              ~Database Systems ___{"\n"}{"\n"}
              ~Software Modelling and Analysis ___</Text>
       <Text style={styles.GPA4}>GPA ___</Text>
       <Text style={styles.CGPA}>CGPA 3.18</Text>         
      <StatusBar style="auto" />
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
Container: {
    flex:1,
    alignContent: "center",
    backgroundColor: "#ffff",
  },
icons:{
  flexDirection: "row",
  justifyContent:"space-between",
  bottom: 260,
  marginHorizontal: 10,
},  
upperbox: {
    top:32,
    alignSelf: "flex-start",
    width: "100%",
    height: "36%",
    backgroundColor: "#242654",    
},
Profile:{
  position: "absolute",
  top:74,
  //left: 2,
  height: 200,
  width: 200,
  alignSelf: "center"
},
Info:{
  color: "white",
  position: "absolute",
  top: 75,
  alignSelf: "center", 
  fontWeight: "bold",
  fontSize: 15,
},
a:{
  color: "white",
  position: "absolute",
  top: 245,
  fontSize: 19,
  alignSelf: "center",
  fontWeight: "bold",
},
b:{
  color: "white",
  position: "absolute",
  top: 270,
  fontSize: 19,
  alignSelf: "center",
  fontFamily: "monospace",
},
c:{
  color: "white",
  position: "absolute",
  top: 295,
  fontSize: 17,
  alignSelf: "center",
  fontWeight: "bold",
},
contentContainer:{
  position: "absolute",
  left: "0%",
  alignItems: "flex-start",
  //top: "4%",
  width: "100%",
  paddingVertical: 750,
  backgroundColor: "#194177",
  flex: 1,
  //alignItems: "flex-end",
},
Semester1: {
  position: "absolute",
  width: 370,
  height: 315,
  backgroundColor: "#527491",
  flex: 1,
  alignSelf: "center",
  top: 25,
},
Sem1:{
  position: "absolute",
  color: "white",
  top: 25,
  fontSize: 20,
  fontWeight: "bold",
  alignSelf: "center",
},
Results1:{
  position: "absolute",
  color: "white",
  top: 55,
  fontSize: 17,
  left: 30,
},
GPA1:{
  position: "absolute",
  color: "white",
  top: 307,
  fontSize: 17,
  alignSelf: "center",
  fontWeight: "bold"
},
Semester2: {
  position: "absolute",
  width: 370,
  height: 365,
  backgroundColor: "#527491",
  flex: 1,
  left:20,
  top: 365,
},
Sem2:{
  position: "absolute",
  color: "white",
  top: 365,
  fontSize: 20,
  fontWeight: "bold",
  alignSelf: "center",
},
Results2:{
  position: "absolute",
  color: "white",
  top: 395,
  fontSize: 17,
  left: 30,
},
GPA2:{
  position: "absolute",
  color: "white",
  top: 695,
  fontSize: 17,
  alignSelf: "center",
  fontWeight: "bold"
},
Semester3: {
  position: "absolute",
  width: 370,
  height: 325,
  backgroundColor: "#527491",
  flex: 1,
  left:20,
  top: 755,
},
Sem3:{
  position: "absolute",
  color: "white",
  top: 755,
  fontSize: 20,
  fontWeight: "bold",
  alignSelf: "center",
},
Results3:{
  position: "absolute",
  color: "white",
  top: 785,
  fontSize: 17,
  left: 30,
},
GPA3:{
  position: "absolute",
  color: "white",
  top: 1040,
  fontSize: 17,
  alignSelf: "center",
  fontWeight: "bold"
},
Semester4: {
  position: "absolute",
  width: 370,
  height: 325,
  backgroundColor: "#527491",
  flex: 1,
  left:20,
  top: 1105,
},
Sem4:{
  position: "absolute",
  color: "white",
  top: 1105,
  fontSize: 20,
  fontWeight: "bold",
  alignSelf: "center",
},
Results4:{
  position: "absolute",
  color: "white",
  top: 1135,
  fontSize: 17,
  left: 30,
},
GPA4:{
  position: "absolute",
  color: "white",
  top: 1390,
  fontSize: 17,
  alignSelf: "center",
  fontWeight: "bold"
},
CGPA:{
  position: "absolute",
  color: "#030533",
  top: 1440,
  fontSize: 30,
  alignSelf: "center",
  fontWeight: "bold"
}
});

