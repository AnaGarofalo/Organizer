import { StyleSheet } from "react-native";
import colors from "../../assets/theme";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: colors.enfasisStrong,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: colors.enfasisSoft,
    fontWeight: "400",
  },
  onlyTextButton: { alignSelf: "center", color: colors.enfasisStrong },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 30,
    paddingLeft: 30,
  },
});
