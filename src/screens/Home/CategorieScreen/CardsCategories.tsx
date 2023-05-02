import React from "react";
import { View, Text, FlatList } from "react-native";
import RenderCards from "../CardsMuscles/RenderCards";

const CardsCategories = ({ categories }: any) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <RenderCards category={item} />}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

export default CardsCategories;
