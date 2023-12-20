import React,{useContext} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; // Or any other icon library you prefer
import { Ionicons } from '@expo/vector-icons';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
export default function ProfileScreen() { 
  const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>nam@gmail.com</Text>
        <Icon name="ellipsis-vertical" size={25} />
      </View>

      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={require('../assets/sontung.png')}
        />
        <View style={styles.profileNumbers}>
          <Text style={styles.postCount}>0 </Text>
          <Text style={styles.followers}>Posts</Text>
        </View>
        <View style={styles.profileNumbers}>
          <Text style={styles.postCount}>4,142 </Text>
          <Text style={styles.followers}>Followers</Text>
        </View>
        <View style={styles.profileNumbers}>
          <Text style={styles.postCount}>1,131 </Text>
          <Text style={styles.following}>Following</Text>
        </View>
      </View>

      <ScrollView>
      <View>
      <TouchableOpacity style={styles.contactButton}>
        <Icon name="person-circle-outline" size={15}>Contact</Icon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Icon name="wallet-outline" size={15}>Wallet</Icon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Icon name="heart-outline" size={15}>Saved</Icon>
      </TouchableOpacity >
      <TouchableOpacity style={styles.contactButton}>
        <Icon name="thumbs-up-outline" size={15}>Vote</Icon>
      </TouchableOpacity>
      </View>

      {/* help */}


      <View>
        <Text  style={styles.text}>Help</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="help-circle-outline" size={15}>Contact customer service</Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="earth-outline"  size={15}>Security information center</Icon>
        </TouchableOpacity>
      </View>

      {/* discover */}

      <View>
        <Text  style={styles.text}>Discover</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="gift-outline" size={15}>Gift</Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="airplane-outline" size={15}>Plane and Taxi</Icon>
        </TouchableOpacity>
      </View>

      {/* Setting */}
      <View>
        <Text  style={styles.text}>Setting and Juridical</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="settings-outline" size={15}>Setting</Icon>
        </TouchableOpacity>
      </View>

      {/* partner */}

      <View>
        <Text  style={styles.text}>Partner</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="person-add-outline" size={15}>Post a Hotel</Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorRed}  onPress={() => navigation.navigate("Login")}>
          <Icon style={styles.icon} name="log-out-outline" size={15} color={'#FF0000'}>Logout</Icon>         
        </TouchableOpacity>
      </View>
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  username: {
    
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileNumbers: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 26,
    marginVertical: 15,
  },
  postCount: {
    flex: 1,
    alignItems: "center",
  },
  followers: {
    flex: 1,
    alignItems: "center",
    fontWeight: "bold",
  },
  following: {
    flex: 1,
    alignItems: "center",
    fontWeight: "bold",
  },
  
  contactButton: {
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    alignItems: "flex-start",
    margin: 15,
    
  },
  
  
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  footerProfileImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  text:{
    fontSize:20,
    fontWeight:700,
    marginLeft:15,
  },

  colorRed:{
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    alignItems: "flex-start",
    marginLeft: 15,
    
  },
  icon:{
    
  }
  
});