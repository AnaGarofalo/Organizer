import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Timer from "../components/Timer/Timer";
import NavBar from "../components/NavBar/NavBar";

import styles from "./styles/Home";
import colors from "../assets/theme";
import timeOptions from "../assets/vars";
import UserBar from "../components/UserBar/UserBar";

export default function Home() {
  const [timeOption, setTimeOption] = useState(0);
  const [optionProps, setOptionProps] = useState({});

  async function getTimeOptions() {
    const data = await AsyncStorage.getItem("userData");
    const preferences = JSON.parse(data).preferences;
    if (!preferences) {
      setOptionProps(timeOptions[timeOption]);
    } else {
      setOptionProps(preferences[timeOption]);
    }
  }

  useEffect(() => {
    getTimeOptions();
  }, [timeOption]);

  return (
    <View style={styles[optionProps.color + "Container"]}>
      <StatusBar backgroundColor={colors[optionProps.color + "Soft"]} />
      <UserBar />

      <Timer
        baseTime={optionProps.time}
        color={optionProps.color}
        swipeOptions={{
          optionName: "changeTimer",
          parameters: { timeOption, setTimeOption },
        }}
        title={
          <Text style={styles[optionProps.color + "OptionTitle"]}>
            {optionProps.fantasyName}
          </Text>
        }
      />

      <NavBar timeOption={timeOption} setTimeOption={setTimeOption} />
    </View>
  );
}
