import React, { useRef } from "react";
import { Dimensions, FlatList } from "react-native";
import RenderCards from "../screens/Home/CardsMuscles/CardsMuscles";

type Props = {
  data: string[];
  navigation?: any;
};

const HomeCard: React.FC<Props> = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <RenderCards data={item} navigation={navigation} />;
      }}
      keyExtractor={(item, index) => index.toString()}
      numColumns={1}
      contentContainerStyle={{
        paddingHorizontal: 10,
        flexGrow: 1,
        paddingBottom: data.length > 13 ? 0 : 200,
        backgroundColor: "white",
      }}
    />
  );
};

export default HomeCard;
