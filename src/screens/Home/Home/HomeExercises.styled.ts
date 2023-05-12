import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  containerIntro: {
    marginHorizontal: 20,
    backgroundColor: "white",
    height: "50%",
    borderRadius: 10,
    justifyContent: "center",
  },
  textIntro: {
    textAlign: "center",
    fontWeight: "500",
    marginHorizontal: 5,
    color: colors.primaryLight,
  },
  containerList: {
    backgroundColor: "white",
    flex: 1,
  },
  marginList: {
    marginHorizontal: 30,
  },
  marginLoading: {
    marginTop: 50,
  },
});
