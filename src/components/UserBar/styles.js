import { StyleSheet } from "react-native";
import colors from "../../assets/theme";
export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
  },
  smallContainer: {
    flexDirection: "row",
    padding: 5,
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    objectFit: "cover",
  },
  userName: {
    color: colors.enfasisStrong,
    fontSize: 40,
    fontWeight: "500",
    paddingLeft: 5,
  },
  logoutButton: {
    justifyContent: "center",
  },
});
