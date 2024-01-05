import { StyleSheet } from "react-native";
import colors from "../../assets/theme";

const colorContainers = {
  height: "30%",
  width: "100%",

  flexDirection: "row",
  justifyContent: "space-between",
};

const baseTitle = {
  fontSize: 35,
  fontWeight: "800",
};

const baseCircle = {
  height: 60,
  width: 60,
  borderRadius: 30,
};

export default stlyes = StyleSheet.create({
  baseContainer: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
  },
  primaryContainer: {
    ...colorContainers,
    backgroundColor: colors.primarySoft,
  },
  secondaryContainer: {
    ...colorContainers,
    backgroundColor: colors.secondarySoft,
  },
  terciaryContainer: {
    ...colorContainers,
    backgroundColor: colors.terciarySoft,
  },
  primaryTitle: {
    ...baseTitle,
    color: colors.primaryStrong,
  },
  secondaryTitle: {
    ...baseTitle,
    color: colors.secondaryStrong,
  },
  terciaryTitle: {
    ...baseTitle,
    color: colors.terciaryStrong,
  },
  primaryCircle: {
    ...baseCircle,
    backgroundColor: colors.primaryStrong,
  },
  secondaryCircle: {
    ...baseCircle,
    backgroundColor: colors.secondaryStrong,
  },
  terciaryCircle: {
    ...baseCircle,

    backgroundColor: colors.terciaryStrong,
  },
  timeContainer: {
    backgroundColor: colors.timerBackground,
    flexDirection: "row",
    borderRadius: 5,
    height: 100,
    width: 250,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    borderWidth: 2,
    borderColor: colors.enfasisStrong,
  },
  time: {
    fontSize: 50,
    color: colors.enfasisStrong,
    fontWeight: "800",
    alignSelf: "center",
    textAlign: "center",
    width: "85%",
  },
  changeTimeButtonsContainer: {
    height: "100%",
    width: "15%",
    backgroundColor: colors.enfasisStrong,
  },

  titleContainer: {
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    paddingTop: 30,
    paddingBottom: 30,
  },
  colorsContainer: {
    width: "20%",
    alignItems: "stretch",
  },
  color: {},
});
