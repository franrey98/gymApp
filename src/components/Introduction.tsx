import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

interface PropsIntroduction {
  onClose: () => void;
}

const Introduction = ({ onClose }: PropsIntroduction) => {
  return (
    <View style={{ marginTop: 50 }}>
      <TouchableOpacity onPress={onClose}>
        <Text>X</Text>
      </TouchableOpacity>
      <Text>¡Bienvenido a la app de Ejercicios para el gimnasio!</Text>
      <Text>
        Encuentra aquí los mejores ejercicios para mantenerte en forma y
        alcanzar tus objetivos.
      </Text>
    </View>
  );
};

export default Introduction;
