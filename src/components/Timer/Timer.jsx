import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import SwipeView from "../SwipeView/SwipeView";

export default function Timer({ baseTime, color, swipeOptions, title }) {
  const [isWorking, setIsWorking] = useState(false);
  const [currentTime, setCurrentTime] = useState(baseTime);

  useEffect(() => {
    setIsWorking(false);
    setCurrentTime(baseTime);
  }, [baseTime]);

  useEffect(() => {
    let interval = null;
    if (isWorking) {
      interval = setInterval(
        (currentTime, oldDate) => {
          const timeDifference = Math.floor((Date.now() - oldDate) / 1000);
          setCurrentTime(currentTime - timeDifference);
          if (currentTime - timeDifference == 0) {
            setIsWorking(false);
            clearInterval(interval);
          }
        },
        1000,
        currentTime,
        Date.now()
      );
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isWorking]);

  return (
    <View style={styles.container}>
      <SwipeView
        child={
          <View>
            {title}
            <View style={styles.counter}>
              <Text style={styles.counterText}>
                {Math.floor(currentTime / 60) +
                  ":" +
                  (String(currentTime % 60).length == 1
                    ? "0" + (currentTime % 60)
                    : currentTime % 60)}
              </Text>
            </View>
          </View>
        }
        optionName={swipeOptions.optionName}
        parameters={swipeOptions.parameters}
        style={styles.timerSwipeView}
      ></SwipeView>

      <TouchableHighlight
        style={styles[color + "Button"]}
        onPress={() => {
          if (!isWorking) {
            if (currentTime != 0) setCurrentTime(currentTime - 1);
            else setCurrentTime(baseTime);
          }
          setIsWorking(!isWorking);
        }}
      >
        <Text style={styles[color + "ButtonText"]}>
          {isWorking ? "STOP" : "START"}
        </Text>
      </TouchableHighlight>
      <SwipeView
        optionName={swipeOptions.optionName}
        parameters={swipeOptions.parameters}
        style={styles.smallSwipeView}
      ></SwipeView>
    </View>
  );
}
