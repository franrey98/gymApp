import { View, Text, StatusBar } from "react-native";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { useMuscles } from "../../hooks/useMuscles";
import CardsMuscles from "./CardsMuscles/CardsMuscles";

const HomeExercises = ({ navigation }: any) => {
  const { muscles } = useMuscles();

  return (
    <>
      <StatusBar backgroundColor={"#000002"} />
      <CardsMuscles muscles={muscles} navigation={navigation} />
    </>
  );
};

export default HomeExercises;
