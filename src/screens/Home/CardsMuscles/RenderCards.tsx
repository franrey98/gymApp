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

interface PropsRenderCard {
  data: string;
  navigation?: any;
}

const RenderCards = ({ data, navigation }: PropsRenderCard) => {
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
      style={{
        borderWidth: 1,
        borderColor: colors.primaryLight,
        padding: 10,
        marginVertical: 15,
        flex: 1,
        borderRadius: 0,
        backgroundColor: colors.primary,
      }}
    >
      {data && (
        <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
          {data.toUpperCase()}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default RenderCards;
