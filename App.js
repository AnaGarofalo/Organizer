import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Work from "./src/pages/Work";
import { useState } from "react";
import { time0ptions } from "./assets/vars";
import NavBar from "./src/components/NavBar";

export default function App() {
  const [timeOption, setTimeOption] = useState(0);
  return (
    <View style={styles.container}>
      <Work timeOption={time0ptions[timeOption]} />
      <NavBar timeOption={timeOption} setTimeOption={setTimeOption} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
