import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";

export default ChangeColorButton = ({
  colors,
  preferences,
  setPreferences,
  userData,
  setUserData,
  index,
  colorName,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors[colorName + "Strong"],
        height: "33%",
      }}
      onPress={async () => {
        const newPreferences = preferences.map((pref, i) => {
          if (i != index) return pref;
          else return { ...pref, color: colorName };
        });
        setPreferences(newPreferences);
        AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            ...userData,
            preferences: newPreferences,
          })
        );
        setUserData({
          ...userData,
          preferences: newPreferences,
        });
      }}
    ></TouchableOpacity>
  );
};
