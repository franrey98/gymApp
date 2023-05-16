import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { colors } from "../../../constants/colors";
import { useMuscles } from "../../../hooks/useMuscles";
import { styles } from "./CardsMuscles.styled";

interface PropsRenderCard {
  data: string;
  navigation?: any;
}

const CardsMuscles = ({ data, navigation }: PropsRenderCard) => {
  const route = useRoute();
  const { setCategoryToSearch, setMuscleToSearch, getExercises } = useMuscles();

  const handleSubmit = () => {
    if (route.name !== "CategorieScreen") {
      if (data) {
        setMuscleToSearch(data);
      }
      navigation.navigate("CategorieScreen", { data });
    } else {
      setCategoryToSearch(data);
      getExercises("");
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleSubmit}
      style={styles.button}
    >
      {data && <Text style={styles.textButton}>{data.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
};

export default CardsMuscles;
