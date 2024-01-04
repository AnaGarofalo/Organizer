import { useState } from "react";
import { View, TextInput, Text, TouchableHighlight } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../assets/theme";

export default function Password({
  loginData,
  setLoginData,
  property,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.passInputView}>
      <TextInput
        style={styles.input}
        value={loginData[property]}
        onChangeText={(text) =>
          setLoginData({ ...loginData, [property]: text })
        }
        placeholder={placeholder}
        secureTextEntry={!showPassword ? true : false}
      ></TextInput>
      <TouchableHighlight
        style={styles.eyeButton}
        onPress={() => {
          setShowPassword(!showPassword);
        }}
      >
        <Text>
          {showPassword ? (
            <Icon name="eye-with-line" size={24} color={colors.enfasisSoft} />
          ) : (
            <Icon name="eye" size={24} color={colors.enfasisSoft} />
          )}
        </Text>
      </TouchableHighlight>
    </View>
  );
}
