import { Easing, TextInput, Animated, View, StyleSheet } from "react-native";
import Svg, { G, Circl, Circle } from "react-native-svg";
import { useEffect, useRef } from "react";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Donut = ({
  percentage = 100,
  radius = 80,
  strokeWidth = 10,
  duration = 500,
  color = "gray",
  delay = 0,
  textColor,
  max = 100,
  classification,
}) => {
  const animated = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = () => {
    Animated.timing(animated, {
      toValue: percentage,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animated.setValue(percentage);
    });
  };

  useEffect(() => {
    animation();
    animated.addListener((v) => {
      const maxPerc = (100 * v.value) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: classification,
        });
      }
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [max, percentage]);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={classification}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 5, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
  );
};

export default Donut;

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
