import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.tertiary,
    padding: 10,
    marginVertical: 15,
    flex: 1,
    borderRadius: 5,
    backgroundColor: colors.primaryLight,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
