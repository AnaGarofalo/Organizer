import { View, Text } from "react-native";
import { useEffect, useState, useRef } from "react";

import Timer from "../components/Timer/Timer";
import NavBar from "../components/NavBar/NavBar";

import styles from "./styles/Home";
import timeOptions from "../assets/vars";
import UserBar from "../components/UserBar/UserBar";
import SwipeView from "../components/SwipeView/SwipeView";

export default function Home() {
  const [timeOption, setTimeOption] = useState(0);
  const [optionProps, setOptionProps] = useState({});

  useEffect(() => {
    setOptionProps(timeOptions[timeOption]);
  }, [timeOption]);

  return (
    <View style={styles[optionProps.color + "Container"]}>
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
