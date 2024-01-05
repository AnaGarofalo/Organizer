import { StyleSheet } from "react-native";
import colors from "../../assets/theme";

const baseInputView = {
  borderWidth: 1,
  borderColor: colors.enfasisStrong,
  borderRadius: 3,
  margin: 10,
};

export default styles = StyleSheet.create({
  inputView: {
    ...baseInputView,
  },
  input: { padding: 5 },
  passInputView: {
    ...baseInputView,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyeButton: {
    padding: 5,
    backgroundColor: colors.enfasisStrong,
    height: "100%",
    alignItems: "center",
  },
});
