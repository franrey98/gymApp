import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFav } from "../../../hooks/useFav";

interface PropsCard {
  data: {
    date: string;
    key: string;
    value: string;
    categoryBMI: string;
  };
}

const CardIMC = ({ data }: PropsCard) => {
  const { removeFavBMI } = useFav();
  console.log(data);
  const deleteFavBMI = () => {
    removeFavBMI(data.key);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={deleteFavBMI} style={styles.buttonEliminate}>
        <Icon color={"white"} name="close" size={24} />
      </TouchableOpacity>
      <Text style={styles.imc}>
        <Icon name="date-range" size={24} /> Fecha: {data?.date}
      </Text>
      <Text style={styles.imc}>
        <Ionicons name="body" size={24} /> Valor: {data?.value} -{" "}
        {data?.categoryBMI}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: "#148f8f",
    padding: 20,
    marginBottom: 16,
    width: "100%",
    borderRadius: 5,
  },
  imc: {
    marginTop: 5,
    color: "#e4d0d0",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonEliminate: {
    position: "absolute",
    right: 0,
    padding: 2,
  },
});

export default CardIMC;
