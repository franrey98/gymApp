import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const LinearGradientApp = ({ children }: any) => {
  return (
    <LinearGradient locations={[0.7, 0.8]} colors={["#00b4d8", "white"]}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientApp;
