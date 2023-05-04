import React from "react";
import { FlatList, View } from "react-native";
import RenderCards from "../screens/Home/CardsMuscles/RenderCards";

type Props = {
  data: string[];
  navigation?: any;
};

const HomeCard: React.FC<Props> = ({ data, navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <RenderCards data={item} navigation={navigation} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default HomeCard;
