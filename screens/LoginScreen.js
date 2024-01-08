import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {};

  useEffect(() => {
    // Custom animations when the component mounts
    fadeInView();
  }, []);

  const fadeInView = () => {
    if (containerRef.current) {
      containerRef.current.fadeIn(1500); // Customize the duration as needed
    }
  };

  const containerRef = useRef();

  return (
    <View style={styles.container}>
      <Animatable.View
        ref={containerRef}
        style={styles.formContainer}
        animation="fadeIn"
        duration={1500}
        delay={500}
      >
        <Text style={styles.headerText}>E-warranty</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text
          style={styles.registerBtn}
          onPress={() => navigation.navigate("Register")}
        >
          Not an user? Register
        </Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerBtn: {
    color: "blue",
    marginLeft: 160,
    marginTop: 20,
  },
});

export default LoginScreen;
