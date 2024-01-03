import { View, Text } from "react-native";
import styles from "./styles/Home";
import Timer from "../components/Timer/Timer";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import timeOptions from "../../assets/vars";

export default function Home() {
  const [timeOption, setTimeOption] = useState(0);
  const [optionProps, setOptionProps] = useState({});

  useEffect(() => {
    setOptionProps(timeOptions[timeOption]);
  }, [timeOption]);

  return (
    <View style={styles[optionProps.color + "Container"]}>
      <View>
        <Text>Otravar</Text>
      </View>
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
