import React, { useRef } from "react";
import { Dimensions, FlatList } from "react-native";
import RenderCards from "../screens/Home/CardsMuscles/RenderCards";

type Props = {
  data: string[];
  navigation?: any;
};

const windowHeight = Dimensions.get("window").height;

const HomeCard: React.FC<Props> = ({ data, navigation }) => {
  console.log(data.length);
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
        paddingBottom: data.length > 12 ? 0 : 100,
      }}
    />
  );
};

export default HomeCard;
