import { StyleSheet } from "react-native";
import colors from "../../../assets/theme";

const baseNavBarButton = {
  width: "33%",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 5,
  paddingBottom: 5,
};

const baseNavBarText = {
  color: colors.enfasisSoft,
  fontSize: 20,
  fontWeight: "400",
  textAlign: "center",
};

export default styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: colors.enfasisStrong,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  navBarButton: {
    ...baseNavBarButton,
  },
  navBarCurrentButton: {
    ...baseNavBarButton,
    backgroundColor: colors.enfasisSoft,
    borderWidth: 2,
    borderRadius: 0,
    borderColor: colors.enfasisStrong,
  },
  navBarText: {
    ...baseNavBarText,
  },
  navBarCurrentText: {
    ...baseNavBarText,
    color: colors.enfasisStrong,
  },
});
