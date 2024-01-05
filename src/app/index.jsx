import { View } from "react-native";
import Login from "./login";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Index() {
  async function getUserData() {
    try {
      const data = await AsyncStorage.getItem("userData");
      if (JSON.parse(data).email) router.replace("/home");
    } catch (error) {
      console.log("error al traer la userData", error.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Login></Login>
    </View>
  );
}
