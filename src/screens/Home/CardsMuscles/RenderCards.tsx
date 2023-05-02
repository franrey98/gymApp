import { useRoute } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";

const RenderCards = ({ muscle, category, navigation }: any) => {
  const route = useRoute();
  const { setCategoryToSearch, setMuscleToSearch, getExercises } = useMuscles();

  const handleSubmit = () => {
    if (route.name !== "CategorieScreen") {
      setMuscleToSearch(muscle);
      navigation.navigate("CategorieScreen", { muscle });
    } else {
      setCategoryToSearch(category);
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
      {muscle && <Text style={{ textAlign: "center" }}>{muscle}</Text>}
      {category && <Text style={{ textAlign: "center" }}>{category}</Text>}
    </TouchableOpacity>
  );
};

export default RenderCards;
