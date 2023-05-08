import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Exercises } from "../../../types/exercises";
import { Video, ResizeMode } from "expo-av";
import { Button } from "react-native";
import { useState } from "react";
import { colors } from "../../../constants/colors";
interface PropsExercises {
  exercises: Exercises;
}

const CardExercises = ({ exercises }: PropsExercises) => {
  const video = useRef<Video>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState<any>({});
  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{exercises?.exercise_name}</Text>
          <Text style={styles.details}>Detalles: {exercises?.details}</Text>
          <Text style={styles.category}>Categoría: {exercises?.Category}</Text>
          <Text style={styles.muscle}>
            Músculos: {exercises?.target.Primary.join(", ")}
          </Text>
          <Text style={styles.steps}>Pasos a seguir: {exercises?.steps}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(exercises?.youtubeURL)}
            style={{ marginBottom: 20 }}
          >
            <Text style={styles.youtubeLink}>{exercises?.youtubeURL}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: -30 }}>
        {Array.isArray(exercises?.videoURL) &&
          exercises?.videoURL.slice(0, 1).map((url) => (
            <View key={url}>
              <Video
                ref={video}
                source={{ uri: url }}
                resizeMode={ResizeMode.COVER}
                style={{ width: "100%", height: 200 }}
                useNativeControls={true}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(status)}
                onLoad={() => setIsLoaded(true)}
              />
            </View>
          ))}
      </View>
      {isLoaded && (
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() =>
            status.isPlaying
              ? video.current?.pauseAsync()
              : video.current?.playAsync()
          }
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "500" }}
          >
            {status.isPlaying
              ? "Pausa".toUpperCase()
              : "Reproducir".toUpperCase()}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  details: {
    marginBottom: 5,
  },
  category: {
    marginBottom: 5,
  },
  muscle: {
    marginBottom: 5,
  },
  steps: {
    marginBottom: 5,
  },
  youtubeLink: {
    color: "blue",
  },
});

export default CardExercises;
