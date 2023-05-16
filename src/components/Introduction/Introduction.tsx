import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AnimatedLottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Router from "../../router/Router";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./Introduction.styled";

interface PropsIntroduction {
  onClose: () => void;
}

const Introduction = () => {
  const [introShown, setIntroShown] = useState(false);

  useEffect(() => {
    const checkIntroShown = async () => {
      try {
        const value = await AsyncStorage.getItem("introShown");
        if (value !== null) {
          setIntroShown(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkIntroShown();
  }, []);

  const handleFinish = async () => {
    try {
      await AsyncStorage.setItem("introShown", "true");
      setIntroShown(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (!introShown) {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.textWelcome}>Welcome to GymApp</Text>
          <Text style={styles.textDescription}>
            Find the best exercises in this application!
          </Text>
          <AnimatedLottieView
            source={{
              uri: "https://assets10.lottiefiles.com/packages/lf20_aTalnSBaLW.json",
            }}
            resizeMode="cover"
            autoPlay
            loop
            style={styles.iconLottie}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={handleFinish}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.textButton}>Go to the app</Text>
              <Icon size={17} color={"white"} name="doubleright" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <Router />;
  }
};

export default Introduction;
