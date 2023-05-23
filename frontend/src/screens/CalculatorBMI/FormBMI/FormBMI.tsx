import React from "react";
import { Formik } from "formik";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { useBMI } from "../../../hooks/useBMI";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./FormBMI.styled";

interface ValuesBMI {
  weight: string;
  height: string;
}

const FormBMI = () => {
  const { calculateBMI } = useBMI();
  const initialValues: ValuesBMI = { weight: "", height: "" };

  const handleSubmit = (values: ValuesBMI, { resetForm }: any) => {
    const weight = parseFloat(values.weight);
    let height = parseFloat(values.height.replace(",", "."));

    if (!isNaN(weight) && !isNaN(height)) {
      calculateBMI(weight, height);
      resetForm();
    }
  };

  const validateForm = (values: ValuesBMI) => {
    const errors: Partial<ValuesBMI> = {};
    if (!values.weight) {
      errors.weight = "Weight is required.";
    }

    if (values.weight && parseFloat(values.weight) > 300) {
      errors.weight = "Maximum weight is 300 kg.";
    }
    if (!values.height) {
      errors.height = "Height is required";
    } else if (!/^\d{1,2}((\.|,)\d{1,2})?$/.test(values.height)) {
      errors.height =
        "Invalid height, it should have a decimal point or comma after the first number";
    }

    return errors;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textForm}> Calculate your Body Mass Index</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <Icon
                name="human-male-height-variant"
                size={25}
                style={{
                  position: "absolute",
                  right: 10,
                }}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("height")}
                onBlur={handleBlur("height")}
                value={values.height}
                keyboardType="numeric"
                maxLength={4}
                placeholder="Height (m)"
              />
            </View>

            {touched.height && errors.height && (
              <Text style={styles.errorText}>{errors.height}</Text>
            )}
            <View style={styles.inputContainer}>
              <Icon
                name="weight-kilogram"
                size={25}
                style={{
                  position: "absolute",
                  right: 10,
                }}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("weight")}
                onBlur={handleBlur("weight")}
                value={values.weight}
                keyboardType="numeric"
                maxLength={3}
                placeholder="Weight (kg)"
              />
            </View>
            {touched.weight && errors.weight && (
              <Text style={styles.errorText}>{errors.weight}</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit as any}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default FormBMI;
