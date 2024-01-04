import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import NormalInput from "../components/Inputs/NormalInput";
import Password from "../components/Inputs/Password";
import styles from "./styles/Login";

import users from "../assets/users";

export default function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [createAccountData, setCreateAccountData] = useState({
    email: "",
    password: "",
    seccondPassword: "",
    name: "",
    picture: "",
  });

  async function submitLogin() {
    const matches = users.filter(({ email }) => email == loginData.email);
    if (!matches.length)
      return Alert.alert("No se ha encontrado un usuario con ese mail");
    if (matches[0].password !== loginData.password)
      return Alert.alert("Contraseña incorrecta");
    try {
      await AsyncStorage.setItem("userData", JSON.stringify({ ...matches[0] }));
    } catch (error) {
      console.log("Error al guardar userData", error.message);
    }
    router.push("/home");
  }

  function createAccount() {
    const { email, password, seccondPassword } = createAccountData;
    if (!email || !password) return Alert.alert("Faltan datos");
    if (password !== seccondPassword)
      return Alert.alert("Las contraseñas deben ser iguales");
    users.push(createAccountData);
    setHasAccount(true);
  }

  return (
    <View style={styles.container}>
      {hasAccount && (
        <View>
          <NormalInput
            loginData={loginData}
            setLoginData={setLoginData}
            property="email"
            placeholder="Ingrese su email"
          />
          <Password
            loginData={loginData}
            setLoginData={setLoginData}
            property="password"
            placeholder="Ingrese su contraseña"
          />
          <TouchableOpacity onPress={() => setHasAccount(false)}>
            <Text style={styles.onlyTextButton}>No tengo cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={submitLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
      {!hasAccount && (
        <View>
          <NormalInput
            loginData={createAccountData}
            setLoginData={setCreateAccountData}
            property="name"
            placeholder="Ingrese su nombre"
          />
          <NormalInput
            loginData={createAccountData}
            setLoginData={setCreateAccountData}
            property="email"
            placeholder="Ingrese su email"
          />
          <Password
            loginData={createAccountData}
            setLoginData={setCreateAccountData}
            property="password"
            placeholder="Ingrese su contraseña"
          />
          <Password
            loginData={createAccountData}
            setLoginData={setCreateAccountData}
            property="seccondPassword"
            placeholder="Repita la contraseña"
          />
          <TouchableOpacity onPress={() => setHasAccount(true)}>
            <Text style={styles.onlyTextButton}>Tengo cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={createAccount}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
