import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function NormalInput({
  loginData,
  setLoginData,
  property,
  placeholder,
}) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        value={loginData[property]}
        onChangeText={(text) =>
          setLoginData({ ...loginData, [property]: text })
        }
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
}
