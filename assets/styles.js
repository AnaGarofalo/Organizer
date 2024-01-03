import { StyleSheet } from "react-native";
import colors from "./theme";
import Constants from "expo-constants";

const baseContainer = {
  padding: 10,
  paddingTop: 30,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
};

const baseButton = {
  borderRadius: 5,
  padding: 10,
  marginTop: 20,
};
const baseButtonText = {
  alignSelf: "center",

  fontSize: 20,
  fontWeight: "600",
};

const baseOptionTitle = {
  fontSize: 40,
  fontWeight: "400",
};

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
  primaryContainer: {
    ...baseContainer,
    backgroundColor: colors.primarySoft,
  },
  primaryButton: {
    ...baseButton,
    backgroundColor: colors.primaryStrong,
  },
  primaryButtonText: {
    ...baseButtonText,
    color: colors.primarySoft,
  },
  secondaryContainer: {
    ...baseContainer,
    backgroundColor: colors.secondarySoft,
  },
  secondaryButton: {
    ...baseButton,
    backgroundColor: colors.secondaryStrong,
  },
  secondaryButtonText: {
    ...baseButtonText,
    color: colors.secondarySoft,
  },
  terciaryContainer: {
    ...baseContainer,
    backgroundColor: colors.terciarySoft,
  },
  terciaryButton: {
    ...baseButton,
    backgroundColor: colors.terciaryStrong,
  },
  terciaryButtonText: {
    ...baseButtonText,
    color: colors.terciarySoft,
  },
  navBarContainer: {
    backgroundColor: colors.enfasisStrong,
    flexDirection: "row",
    width: "100%",
    marginBottom: 50,
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
  counter: {
    backgroundColor: colors.timerBackground,
    borderRadius: 5,
    height: 120,
    width: 300,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderWidth: 2,
    borderColor: colors.enfasisStrong,
  },
  counterText: {
    fontSize: 70,
    color: colors.enfasisStrong,
    fontWeight: "800",
  },
  primaryOptionTitle: {
    ...baseOptionTitle,
    color: colors.primaryStrong,
  },
  secondaryOptionTitle: {
    ...baseOptionTitle,
    color: colors.secondaryStrong,
  },
  terciaryOptionTitle: {
    ...baseOptionTitle,
    color: colors.terciaryStrong,
  },
});
