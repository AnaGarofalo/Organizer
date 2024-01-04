import { StyleSheet } from "react-native";
import colors from "./theme";

const baseContainer = {
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
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
