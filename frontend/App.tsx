import "react-native-gesture-handler";
import Router from "./src/router/Router";
import { MusclesProvider } from "./src/context/MusclesContext";
import { BMIProvider } from "./src/context/BMIContext";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View, ActivityIndicator } from "react-native";
import Introduction from "./src/components/Introduction/Introduction";
import { FavoriteProvider } from "./src/context/FavoritesContext";
import { AuthProvider } from "./src/context/AuthContext";

const AppAuthContext = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
const AppStateMuscles = ({ children }: any) => {
  return <MusclesProvider>{children}</MusclesProvider>;
};
const AppStateBMI = ({ children }: any) => {
  return <BMIProvider>{children}</BMIProvider>;
};
const AppStateFavorite = ({ children }: any) => {
  return <FavoriteProvider>{children}</FavoriteProvider>;
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded && isLoading) {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [fontsLoaded, isLoading]);

  if (!fontsLoaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} color={"blue"} />
      </View>
    );
  }

  return (
    <AppAuthContext>
      <AppStateMuscles>
        <AppStateBMI>
          <AppStateFavorite>
            <Introduction />
          </AppStateFavorite>
        </AppStateBMI>
      </AppStateMuscles>
    </AppAuthContext>
  );
};

export default App;
