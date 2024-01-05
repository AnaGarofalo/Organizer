import { StyleSheet } from "react-native";
import colors from "../../assets/theme";

const baseContainer = {
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "space-evenly",
};

const baseOptionTitle = {
  fontSize: 40,
  fontWeight: "400",
  alignSelf: "center",
};

export default styles = StyleSheet.create({
  primaryContainer: {
    ...baseContainer,
    backgroundColor: colors.primarySoft,
  },
  secondaryContainer: {
    ...baseContainer,
    backgroundColor: colors.secondarySoft,
  },
  terciaryContainer: {
    ...baseContainer,
    backgroundColor: colors.terciarySoft,
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
