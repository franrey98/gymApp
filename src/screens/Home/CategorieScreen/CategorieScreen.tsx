import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CardsCategories from "./CardsCategories";
import { useMuscles } from "../../../hooks/useMuscles";

type RootStackParamList = {
  HomeMatchs: undefined;
  CategorieScreen: { muscle: string };
};

type CategorieScreenRouteProp = RouteProp<
  RootStackParamList,
  "CategorieScreen"
>;

type CategorieScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CategorieScreen"
>;

type Props = {
  route: CategorieScreenRouteProp;
  navigation: CategorieScreenNavigationProp;
};

const CategorieScreen: React.FC<Props> = ({ route, navigation }) => {
  const { categories } = useMuscles();
  const { muscle } = route.params;
  return (
    <View>
      <Text>
        Seleccionaste {muscle}, ahora selecciona la categoria para personalizar
        tu entrenamiento!
      </Text>
      <CardsCategories categories={categories} />
    </View>
  );
};

export default CategorieScreen;
