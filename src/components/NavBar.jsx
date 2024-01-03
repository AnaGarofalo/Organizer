import { View, Text, TouchableHighlight } from "react-native";
import { time0ptions } from "../../assets/vars";
import styles from "../../assets/styles";

export default function NavBar({ timeOption, setTimeOption }) {
  return (
    <View style={styles.navBarContainer}>
      {time0ptions.map(({ fantasyName }, i) => {
        return (
          <TouchableHighlight
            key={i}
            style={
              timeOption == i ? styles.navBarCurrentButton : styles.navBarButton
            }
            onPress={() => {
              setTimeOption(i);
            }}
          >
            <Text
              style={
                timeOption == i ? styles.navBarCurrentText : styles.navBarText
              }
            >
              {fantasyName}
            </Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
