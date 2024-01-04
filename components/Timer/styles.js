import { StyleSheet } from "react-native";
import colors from "../../assets/theme";

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

export default styles = StyleSheet.create({
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
  primaryButton: {
    ...baseButton,
    backgroundColor: colors.primaryStrong,
  },
  primaryButtonText: {
    ...baseButtonText,
    color: colors.primarySoft,
  },
  secondaryButton: {
    ...baseButton,
    backgroundColor: colors.secondaryStrong,
  },
  secondaryButtonText: {
    ...baseButtonText,
    color: colors.secondarySoft,
  },
  terciaryButton: {
    ...baseButton,
    backgroundColor: colors.terciaryStrong,
  },
  terciaryButtonText: {
    ...baseButtonText,
    color: colors.terciarySoft,
  },
});
