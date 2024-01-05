import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: "cover",
    marginRight: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  smallContainerFor2: { justifyContent: "space-around" },
  smallContainerFor1: { justifyContent: "center" },
  onlyTextButton: {
    alignSelf: "center",
    color: colors.enfasisStrong,
    alignSelf: "center",
  },
});
