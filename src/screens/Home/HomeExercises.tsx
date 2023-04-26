import { View, Text, StatusBar } from "react-native";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

const HomeExercises = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#18191d"} />
      <Text style={{ fontFamily: fonts.regular, color: colors.primary }}>
        Probando fuente del home exercises
      </Text>
    </View>
  );
};

export default HomeExercises;
