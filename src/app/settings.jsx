import { Alert, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/Settings";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserBar from "../components/UserBar/UserBar";
import { router } from "expo-router";

import colors from "../assets/theme";
import ChangeColorButton from "../components/ChangeColorButton/ChangeColorButton";
import ChangeTimeButton from "../components/ChangeTimeButton/ChangeTimeButton";

export default Settings = () => {
  const [preferences, setPreferences] = useState([]);
  const [userData, setUserData] = useState({});

  const getPreferences = async () => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem("userData"));
      setPreferences(data.preferences);
      setUserData(data);
    } catch (error) {
      console.log("Error al cargar settings", error.message);
      Alert.alert("Hubo un error al cargar las preferencias");
      router.push("/home");
    }
  };

  const changePreference = async ({ prefName, prefValue, index }) => {
    const newPreferences = preferences.map((pref, i) => {
      if (i != index) return pref;
      else return { ...pref, [prefName]: prefValue };
    });
    setPreferences(newPreferences);
    setUserData({
      ...userData,
      preferences: newPreferences,
    });
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        ...userData,
        preferences: newPreferences,
      })
    );
  };

  useEffect(() => {
    if (!Object.keys(userData).length) getPreferences();
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
                  {Math.floor(time / 60) +
                    ":" +
                    (String(time % 60).length == 1
                      ? "0" + (time % 60)
                      : time % 60)}
                </Text>
                <View style={styles.changeTimeButtonsContainer}>
                  <ChangeTimeButton
                    time={time}
                    index={index}
                    changePreference={changePreference}
                    sum={true}
                  />
                  <ChangeTimeButton
                    time={time}
                    index={index}
                    changePreference={changePreference}
                    sum={false}
                  />
                </View>
              </View>
            </View>
            <View style={styles.colorsContainer}>
              <ChangeColorButton
                changePreference={changePreference}
                colors={colors}
                index={index}
                colorName="primary"
              />
              <ChangeColorButton
                colors={colors}
                changePreference={changePreference}
                index={index}
                colorName="secondary"
              />
              <ChangeColorButton
                colors={colors}
                changePreference={changePreference}
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
