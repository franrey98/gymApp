import { View, Text } from "react-native";
import WebView from "react-native-webview";

const BodyMap = () => {
  return (
    <WebView
      source={{ uri: "https://www.google.com" }}
      style={{ flex: 1, borderWidth: 5, borderColor: "red" }}
      javaScriptEnabled={true}
    />
  );
};

export default BodyMap;
