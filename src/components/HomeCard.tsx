import React, { useRef } from "react";
import { Dimensions, FlatList } from "react-native";
import RenderCards from "../screens/Home/CardsMuscles/RenderCards";

type Props = {
  data: string[];
  navigation?: any;
};

const windowHeight = Dimensions.get("window").height;

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
        paddingHorizontal: 2,
        flexGrow: 1,
        paddingBottom: 80,
      }}
    />
  );
};

export default HomeCard;
