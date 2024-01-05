import { TouchableOpacity } from "react-native";
import { Feather as Icons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../assets/theme";

export default ChangeTimeButtons = ({ time, index, changePreference, sum }) => {
  return (
    <TouchableOpacity
      style={styles.changeTimeButton}
      onPress={async () => {
        await changePreference({
          prefName: "time",
          prefValue: sum ? time + 60 : time - 60,
          index,
        });
      }}
    >
      <Icons
        name={sum ? "plus" : "minus"}
        size={20}
        color={colors.enfasisSoft}
      ></Icons>
    </TouchableOpacity>
  );
};
