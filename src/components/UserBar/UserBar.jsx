import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import colors from "../../assets/theme";
import { Entypo, Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

export default function UserBar() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    picture: "",
  });
  const pathname = usePathname();

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await AsyncStorage.getItem("userData");
        if (!JSON.parse(data).email) router.replace("/");
        setUserData(JSON.parse(data));
      } catch (error) {
        console.log("error al traer la userData", error.message);
      }
    }

    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Image
          style={styles.profilePhoto}
          source={
            userData.picture
              ? { uri: userData.picture }
              : require("../../assets/no-user-photo.png")
          }
        ></Image>
        <Text style={styles.userName}>{userData.name || "Holi"}</Text>
      </View>
      <View style={styles.smallContainer}>
        {pathname == "/home" ? (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              router.push("/settings");
            }}
          >
            <Feather name="settings" size={40} color={colors.enfasisStrong} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              router.push("/home");
            }}
          >
            <Feather name="home" size={40} color={colors.enfasisStrong} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            await AsyncStorage.setItem(
              "userData",
              JSON.stringify({ name: "", email: "", picture: "" })
            );
            router.push("/");
          }}
        >
          <Entypo name="log-out" size={40} color={colors.enfasisStrong} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
