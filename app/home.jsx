import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import Timer from "../components/Timer/Timer";
import NavBar from "../components/NavBar/NavBar";

import styles from "./styles/Home";
import timeOptions from "../assets/vars";
import UserBar from "../components/UserBar/UserBar";

export default function Home() {
  const [timeOption, setTimeOption] = useState(0);
  const [optionProps, setOptionProps] = useState({});

  useEffect(() => {
    setOptionProps(timeOptions[timeOption]);
  }, [timeOption]);

  return (
    <View style={styles[optionProps.color + "Container"]}>
      <UserBar />
      <View>
        <Text style={styles[optionProps.color + "OptionTitle"]}>
          {optionProps.fantasyName}
        </Text>
        <Timer baseTime={optionProps.time} color={optionProps.color} />
      </View>
      <NavBar timeOption={timeOption} setTimeOption={setTimeOption} />
    </View>
  );
}
