import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const LinearGradientApp = ({ children }: any) => {
  return (
    <LinearGradient
      style={{ height: 100 }}
      locations={[0.1, 1]}
      colors={["#00b4d8", "white"]}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientApp;
