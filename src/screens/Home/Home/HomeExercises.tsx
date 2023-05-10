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
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "white",
            height: "50%",
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              marginHorizontal: 5,
            }}
          >
            En esta sección vas a encontrar todo tipo de ejercicios
          </Text>
        </View>
      </LinearGradientApp>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          {isLoading ? (
            <View
              style={{
                marginTop: 50,
              }}
            >
              <ActivityIndicator size={30} />
            </View>
          ) : (
            <HomeCard data={muscles} navigation={navigation} />
          )}
        </View>
      </View>
    </>
  );
};

export default HomeExercises;
