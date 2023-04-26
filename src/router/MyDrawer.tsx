import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeExercises from "../screens/Home/HomeExercises";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={HomeExercises} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
