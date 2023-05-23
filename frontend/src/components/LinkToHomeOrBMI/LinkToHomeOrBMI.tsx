import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const LinkToHomeOrBMI = ({ navigation, link, text = "" }: any) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <TouchableOpacity style={{}} onPress={() => navigation.navigate(link)}>
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            marginVertical: 15,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkToHomeOrBMI;
