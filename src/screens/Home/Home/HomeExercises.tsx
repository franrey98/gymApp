import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import HomeCard from "../../../components/HomeCard";
import { useMuscles } from "../../../hooks/useMuscles";
import { colors } from "../../../constants/colors";
import LinearGradientApp from "../../../components/LinearGradientApp";
import { useEffect } from "react";
import { color } from "react-native-reanimated";
import { styles } from "./HomeExercises.styled";

const HomeExercises = ({ navigation }: any) => {
  const {
    muscles,
    isLoading,
    setExercises,
    setCategoryToSearch,
    setMuscleToSearch,
    setLimit,
  } = useMuscles();

  useEffect(() => {
    const clearMyArray = () => {
      setExercises([]);
      setCategoryToSearch("");
      setMuscleToSearch("");
      setLimit(6);
    };

    return () => {
      clearMyArray();
    };
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <LinearGradientApp>
        <View style={styles.containerIntro}>
          <Text style={styles.textIntro}>
            En esta sección vas a encontrar ejercicios para todo los grupos
            musculares!
          </Text>
        </View>
      </LinearGradientApp>
      <View style={styles.containerList}>
        <View style={styles.marginList}>
          {isLoading ? (
            <ActivityIndicator style={styles.marginLoading} size={30} />
          ) : (
            <HomeCard data={muscles} navigation={navigation} />
          )}
        </View>
      </View>
    </>
  );
};

export default HomeExercises;
