import { Alert, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/Settings";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserBar from "../components/UserBar/UserBar";
import timeOptions from "../assets/vars";
import { router } from "expo-router";
import colors from "../assets/theme";
import ChangeColorButton from "../components/ChangeColorButton/ChangeColorButton";

export default Settings = () => {
  const [preferences, setPreferences] = useState([]);
  const [userData, setUserData] = useState({});
  const getPreferences = async () => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem("userData"));
      if (!data.preferences) {
        setPreferences(timeOptions);
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({ ...data, preferences: timeOptions })
        );
      } else setPreferences(data.preferences);
      setUserData(data);
    } catch (error) {
      Alert.alert("Hubo un error al cargar las preferencias");
      router.replace("/home");
      console.log("Error al cargar settings", error.message);
    }
  };
  useEffect(() => {
    getPreferences();
  }, []);
  return (
    <View style={styles.baseContainer}>
      <UserBar></UserBar>
      {preferences.map(({ name, fantasyName, time, color }, index) => {
        return (
          <View style={styles[color + "Container"]}>
            <View style={styles["titleContainer"]}>
              <Text style={styles[color + "Title"]}>{fantasyName}</Text>

              <View style={styles.timeContainer}>
                <Text style={styles.time}>
                  {" "}
                  {Math.floor(time / 60) +
                    ":" +
                    (String(time % 60).length == 1
                      ? "0" + (time % 60)
                      : time % 60)}
                </Text>
              </View>
            </View>
            <View style={styles.colorsContainer}>
              <ChangeColorButton
                colors={colors}
                preferences={preferences}
                setPreferences={setPreferences}
                userData={userData}
                setUserData={setUserData}
                index={index}
                colorName="primary"
              />
              <ChangeColorButton
                colors={colors}
                preferences={preferences}
                setPreferences={setPreferences}
                userData={userData}
                setUserData={setUserData}
                index={index}
                colorName="secondary"
              />
              <ChangeColorButton
                colors={colors}
                preferences={preferences}
                setPreferences={setPreferences}
                userData={userData}
                setUserData={setUserData}
                index={index}
                colorName="terciary"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};
