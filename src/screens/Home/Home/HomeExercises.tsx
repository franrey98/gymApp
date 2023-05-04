import { StatusBar } from "react-native";
import HomeCard from "../../../components/HomeCard";
import { useMuscles } from "../../../hooks/useMuscles";

const HomeExercises = ({ navigation }: any) => {
  const { muscles } = useMuscles();

  return (
    <>
      <StatusBar backgroundColor={"#000002"} />
      <HomeCard data={muscles} navigation={navigation} />
    </>
  );
};

export default HomeExercises;
