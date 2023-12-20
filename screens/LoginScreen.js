import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

//   console.log(userCredentials.user.stsTokenManager.accessToken);
//   AsyncStorage.setItem(
//     "tokenUser",
//     userCredentials.user.stsTokenManager.accessToken
//   );

//   useEffect(() => {
//     const getMyObject = async () => {
//       try {
//         const jsonValue = await AsyncStorage.getItem("tokenUser");
//         console.log("jsonValue");
//         if (jsonValue) {
//           navigation.replace("Main");
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getMyObject();
//   }, [token]);

 const login = () => {
     signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential.user;
        console.log("user details", user);
     })
 }

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.replace("Main");
        }
      });

      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ImageBackground 
    source={{ uri: 'https://superspec.com/wp-content/uploads/2021/06/Vin-13-31x43-1.jpg' }}
    style={styles.backgroundImage}
    >

    <SafeAreaView
      style={{
        // flex: 1,
        // backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Sign In
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor={"black"}
              
              style={{
                opacity:0.3,
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
                opacity:0.3,
              }}
            />
          </View>
        </View>

        <Pressable
        onPress={login}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
        <View style={styles.social}>
        <View style={styles.social}>
          <TouchableOpacity >
          <Text style={styles.textSocial}>Login with<Ionicons style={styles.iconGoogle} name="logo-google"></Ionicons></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.social}>
          <TouchableOpacity>
          <Text style={styles.textSocial}>Login with<Ionicons style={styles.iconFacebook} name="logo-facebook"></Ionicons></Text>
          </TouchableOpacity>
          
        </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </ImageBackground>
    
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  social:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginTop:80,
    fontSize:30,
    
  },
  textSocial:{
    fontSize:20,
    fontWeight:250,
    
  },
  iconGoogle:{
    fontSize:20,
    color:'#386171fa'
  },
  iconFacebook:{
    fontSize:20,
    color:'#2a5594'
  }
});


