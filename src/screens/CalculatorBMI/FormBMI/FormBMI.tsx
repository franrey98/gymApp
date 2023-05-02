import React from "react";
import { Formik } from "formik";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { useBMI } from "../../../hooks/useBMI";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./FormBMI.style";

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
      errors.weight = "El peso es requerido.";
    }

    if (values.weight && parseFloat(values.weight) > 300) {
      errors.weight = "El peso máximo es 300 kg";
    }
    if (!values.height) {
      errors.height = "La altura es requerida.";
    } else if (!/^\d{1,2}((\.|,)\d{1,2})?$/.test(values.height)) {
      errors.height =
        "La altura no es válida, despues del primer numero tiene que haber un punto o una coma.";
    }

    return errors;
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Calcula tu Indice de Masa Corporal
      </Text>
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
          <View style={{ marginTop: 5 }}>
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
                placeholder="Altura (mts)"
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
                placeholder="Peso (kg)"
              />
            </View>
            {touched.weight && errors.weight && (
              <Text style={styles.errorText}>{errors.weight}</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit as any}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormBMI;
