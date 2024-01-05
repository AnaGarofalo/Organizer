import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";

export default ChangeColorButton = ({
  colors,
  changePreference,
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
        await changePreference({
          prefName: "color",
          prefValue: colorName,
          index,
        });
      }}
    ></TouchableOpacity>
  );
};
