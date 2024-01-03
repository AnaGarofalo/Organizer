import { View, Text } from "react-native";
import styles from "../../assets/styles";
import Timer from "../components/Timer";

export default function Work({ timeOption }) {
  return (
    <View style={styles[timeOption.color + "Container"]}>
      <Text style={styles[timeOption.color + "OptionTitle"]}>
        {timeOption.fantasyName}
      </Text>
      <Timer baseTime={timeOption.time} color={timeOption.color} />
    </View>
  );
}
