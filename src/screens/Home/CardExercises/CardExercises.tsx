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
import { styles } from "./CardExercises.styled";
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
    <View style={styles.containerCard}>
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
            Músculos: {exercises?.target?.Primary?.join(", ")}
          </Text>
          <Text style={styles.steps}>
            Pasos a seguir:{" "}
            {exercises?.steps?.join(",") === "" ? (
              <Text>No hay informacion disponible</Text>
            ) : (
              <Text style={styles.stepsText}>{exercises?.steps}</Text>
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
      <View style={styles.containerVideo}>
        {Array.isArray(exercises?.videoURL) &&
          exercises?.videoURL?.slice(0, 1).map((url) => (
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
          style={styles.buttonVideo}
          onPress={() =>
            status.isPlaying
              ? video.current?.pauseAsync()
              : video.current?.playAsync()
          }
        >
          <Text style={styles.textButtonVideo}>
            {status.isPlaying
              ? "Pausa".toUpperCase()
              : "Reproducir".toUpperCase()}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardExercises;
