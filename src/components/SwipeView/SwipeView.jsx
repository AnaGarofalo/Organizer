import { PanResponder } from "react-native";
import { panOptions } from "./swipeFunctions";
import { View } from "react-native";

export default function SwipeView({ optionName, parameters, child, style }) {
  const panResponder = PanResponder.create(
    panOptions({ optionName, parameters })
  );
  return (
    <View {...panResponder.panHandlers} style={style}>
      {child}
    </View>
  );
}
