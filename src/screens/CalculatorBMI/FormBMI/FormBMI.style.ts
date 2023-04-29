import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
  },
  input: {
    width: "100%",
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  inputContainer: {
    justifyContent: "center",
    marginVertical: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 0,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: fonts.bold,
  },
});
