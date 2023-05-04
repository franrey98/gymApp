import { useRoute } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
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
      onPress={handleSubmit}
      style={{
        borderWidth: 1,
        padding: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1,
      }}
    >
      {data && <Text style={{ textAlign: "center" }}>{data}</Text>}
    </TouchableOpacity>
  );
};

export default RenderCards;
