import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { LoginProps } from "../../types/auth";

const Login = ({ navigation }: any) => {
  const { login } = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values: LoginProps) => {
    login(values);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textIntroduction}>Login</Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
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
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonToRegister}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.buttonToRegisterText}>Go to Register</Text>
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
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 40,
  },
  textIntroduction: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonToRegister: {
    marginTop: 10,
  },
  buttonToRegisterText: {
    textDecorationLine: "underline",
  },
});

export default Login;
