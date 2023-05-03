import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Exercises } from "../../../types/exercises";
import { Video, ResizeMode } from "expo-av";
interface PropsExercises {
  exercises: Exercises;
}

const CardExercises = ({ exercises }: PropsExercises) => {
  return (
    <View>
      <Text>{exercises?.exercise_name}</Text>
      <Text>{exercises?.details}</Text>
      <Text>{exercises?.Category}</Text>
      <Text>{exercises?.steps}</Text>
      <Text>{exercises?.Grips}</Text>
      <View>
        {Array.isArray(exercises?.videoURL) &&
          exercises?.videoURL.slice(0, 1).map((url) => (
            <View key={url}>
              <Video
                source={{ uri: url }}
                resizeMode={ResizeMode.CONTAIN}
                style={{ width: 300, height: 300 }}
                useNativeControls={true}
              />
            </View>
          ))}
      </View>
      <Text>{exercises?.youtubeURL}</Text>
    </View>
  );
};

export default CardExercises;
