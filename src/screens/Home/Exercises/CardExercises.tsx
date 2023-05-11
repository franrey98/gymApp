import React, { useRef } from "react";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Exercises } from "../../../types/exercises";
import { Video, ResizeMode } from "expo-av";
import { useState } from "react";
import { colors } from "../../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFav } from "../../../hooks/useFav";
interface PropsExercises {
  exercises: Exercises;
}

const CardExercises = ({ exercises }: PropsExercises) => {
  const { addFavExercise, dataStorage, removeFavExercise } = useFav();

  const video = useRef<Video>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [status, setStatus] = useState<any>({});

  const isFavorite = dataStorage.some((item) => item.id === exercises.id);

  const handleFavClick = () => {
    if (isFavorite) {
      removeFavExercise(exercises.id);
    } else {
      addFavExercise(exercises.id);
    }
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <Text style={styles.title}>{exercises?.exercise_name}</Text>
            <TouchableOpacity onPress={handleFavClick}>
              {isFavorite ? (
                <Icon name="star" color={colors.primary} size={20} />
              ) : (
                <Icon name="star-o" color={colors.primary} size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.details}>
            Detalles:{" "}
            {showAllDetails ? (
              exercises?.details
            ) : exercises?.details === undefined ||
              exercises?.details === "" ? (
              <Text>No hay detalles disponibles</Text>
            ) : (
              `${exercises?.details?.slice(0, 400)}...`
            )}
            {exercises?.details?.length > 400 && !showAllDetails && (
              <TouchableOpacity onPress={() => setShowAllDetails(true)}>
                <Text style={styles.detailsLink}>Ver más</Text>
              </TouchableOpacity>
            )}
          </Text>

          <Text style={styles.category}>Categoría: {exercises?.Category}</Text>
          <Text style={styles.muscle}>
            Músculos: {exercises?.target.Primary.join(", ")}
          </Text>
          <Text style={{ color: "white" }}>
            Pasos a seguir:{" "}
            {exercises?.steps?.join(",") === "" ? (
              <Text>No hay informacion disponible</Text>
            ) : (
              <Text style={styles.steps}>{exercises?.steps}</Text>
            )}
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL(exercises?.youtubeURL)}
            style={{ marginBottom: 20 }}
          >
            {exercises?.youtubeURL && (
              <Text style={styles.youtubeLink}>{exercises?.youtubeURL}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: -30 }}>
        {Array.isArray(exercises?.videoURL) &&
          exercises?.videoURL.slice(0, 1).map((url) => (
            <View key={url}>
              <Video
                ref={video}
                source={{ uri: url }}
                resizeMode={ResizeMode.CONTAIN}
                style={{ width: "100%", height: 220 }}
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
            marginTop: -10,
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
    padding: 15,
    marginTop: 10,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  titleContent: {
    flexDirection: "row",
    alignItems: "baseline",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    flex: 1,
  },
  details: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  category: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  muscle: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  steps: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  youtubeLink: {
    color: "#0044ff",
  },
  detailsLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});

export default CardExercises;
