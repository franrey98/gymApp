import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5,
    elevation: 5,
  },
  textWelcome: { textAlign: "center", marginVertical: 15, fontSize: 20 },
  textDescription: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: "500",
  },
  iconLottie: { height: 200, marginVertical: 10 },
  button: {
    backgroundColor: colors.primaryLight,
    marginTop: 10,
    padding: 5,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    width: "100%",
  },
  textButton: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
