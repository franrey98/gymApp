import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import HomeCard from "../../../components/HomeCard";
import { useMuscles } from "../../../hooks/useMuscles";
import { colors } from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import LinearGradientApp from "../../../components/LinearGradientApp";

const HomeExercises = ({ navigation }: any) => {
  const { muscles, isLoading } = useMuscles();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <LinearGradientApp>
        <Text
          style={{
            marginHorizontal: 20,
            paddingBottom: 50,
          }}
        >
          Bienvenido a nuestra página de Ejercicios para el Gimnasio. Aquí
          asdasd
        </Text>
      </LinearGradientApp>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={30} />
        ) : (
          <HomeCard data={muscles} navigation={navigation} />
        )}
      </View>
    </>
  );
};

export default HomeExercises;
