import React from "react";
import { FlatList } from "react-native";
import RenderCards from "./RenderCards";
const CardsMuscles = ({ muscles, navigation }: any) => {
  return (
    <FlatList
      data={muscles}
      renderItem={({ item }) => (
        <RenderCards muscle={item} navigation={navigation} />
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

export default CardsMuscles;
