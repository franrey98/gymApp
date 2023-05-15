import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  titleContent: {
    flexDirection: "row",
    alignItems: "baseline",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    flex: 1,
  },
  steps: {
    color: "white",
  },
  details: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  category: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  muscle: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  stepsText: {
    marginBottom: 5,
    color: "#d2e7ee",
  },
  youtubeLink: {
    color: "#0044ff",
  },
  detailsLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  containerVideo: {
    marginTop: -30,
  },
  buttonVideo: {
    backgroundColor: colors.primary,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: -10,
  },
  textButtonVideo: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
  },
});
