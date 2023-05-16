import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  textNoMoreExercises: {
    textAlign: "center",
    marginVertical: 20,
    paddingBottom: 5,
    fontSize: 18,
  },
});
