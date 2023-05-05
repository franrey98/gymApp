import React, { useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { Exercises } from "../../../types/exercises";
import { Video, ResizeMode } from "expo-av";
import { Button } from "react-native";
import { useState } from "react";
interface PropsExercises {
  exercises: Exercises;
}

const CardExercises = ({ exercises }: PropsExercises) => {
  const video = useRef<Video>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState<any>({});
  return (
    <View>
      <Text>{exercises?.exercise_name}</Text>
      <Text>{exercises?.details}</Text>
      <Text>{exercises?.Category}</Text>
      <Text>
        Aca va musculo: {exercises?.target.Primary.map((name) => name)}
      </Text>
      <Text>{exercises?.steps}</Text>
      <Text>{exercises?.Grips}</Text>
      <View>
        {Array.isArray(exercises?.videoURL) &&
          exercises?.videoURL.slice(0, 1).map((url) => (
            <View key={url}>
              <Video
                ref={video}
                source={{ uri: url }}
                resizeMode={ResizeMode.CONTAIN}
                style={{ width: "100%", height: 300 }}
                useNativeControls={true}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(status)}
                onLoad={() => setIsLoaded(true)}
              />
            </View>
          ))}
      </View>
      {isLoaded && (
        <View style={{}}>
          <Button
            title={status.isPlaying ? "Pausa" : "Reproducir"}
            onPress={() =>
              status.isPlaying
                ? video.current?.pauseAsync()
                : video.current?.playAsync()
            }
          />
        </View>
      )}
      <Text>{exercises?.youtubeURL}</Text>
    </View>
  );
};
export default CardExercises;
