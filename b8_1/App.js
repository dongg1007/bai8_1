import React, { createContext, useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const AuthContext = createContext();

function SignInScreen() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => signIn(email, password)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

    </View>
  );
}

function ExplorerScreen() {

  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>

      

      <Text style={{fontSize:20, marginBottom:20}}>
        Welcome {user.name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Go to Account / Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

export default function App() {

  const [user, setUser] = useState(null);

  const signIn = (email, password) => {

    if (email === "admin@gmail.com" && password === "123456") {
      setUser({ name: " Dong Nguyen" });
    } else {
      alert("Email hoặc password sai");
    }

  };

  const signOut = () => {
    setUser(null);
  };

  return (

    <AuthContext.Provider value={{ user, signIn, signOut }}>

      {user ? <ExplorerScreen /> : <SignInScreen />}

    </AuthContext.Provider>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

});