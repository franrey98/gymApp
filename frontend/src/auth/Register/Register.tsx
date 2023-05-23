import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { StyleSheet } from "react-native";

const Register = ({ navigation }: any) => {
  const { register } = useAuth();

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: any) => {
    // Lógica para enviar los datos del formulario
    register(values);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Join our fitness community and get started with GymApp!
      </Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Name"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                placeholder="Last Name"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit as any}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonToRegister}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textButtonToRegister}>Go to login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonToRegister: { marginTop: 10 },
  textButtonToRegister: { textDecorationLine: "underline" },
});

export default Register;
