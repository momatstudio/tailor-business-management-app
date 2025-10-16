import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonOne from "@/components/ui/ButtonOne";
import CustomInputText from "@/components/ui/customInputText";
import ScreenTitle from "@/components/ui/screenTitle";
import { AppColors } from "@/constants/colors";
import { useWindowDimensions } from "@/hooks/use-windows-dimentions";
import { registerWithEmail } from "@/services/authService";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const { width, height } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }}>
      <ScreenTitle title="Sign Up" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: 120, zIndex: 100 }}
        keyboardShouldPersistTaps="handled"
      >
        <ThemedView style={styles.signInContainer}>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.title2}>Welcome</ThemedText>
            <ThemedText style={styles.text3}>
              Hello there. Create an account.
            </ThemedText>
          </ThemedView>
          <CustomInputText
            placeholder="your name"
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <CustomInputText
            placeholder="your last name"
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <CustomInputText
            placeholder="your surname"
            label="Surname"
            value={surname}
            onChangeText={setSurname}
          />
          <CustomInputText
            placeholder="e.g abc@mail.co.za"
            label="Email or Username"
            value={email}
            onChangeText={setEmail}
          />
          <CustomInputText
            label={"Password"}
            placeholder="******"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
          />
          <CustomInputText
            label={"Verify Password"}
            placeholder="******"
            value={verifyPassword}
            onChangeText={setVerifyPassword}
          />
          <ThemedView style={styles.textContainer2}>
            <ThemedText>Have an account? </ThemedText>
            <TouchableOpacity onPress={() => router.push("/signin")}>
              <ThemedText
                style={{ color: AppColors.primary, fontWeight: "600" }}
              >
                Sign In
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
          {/*
          {error && (
            <ThemedText style={{ color: "red", marginBottom: 10 }}>
              {error}
            </ThemedText>
          )}
          */}
          <ButtonOne
            title={"Sign Up"}
            style={{}}
            onPress={async () => {
              setError(null);
              if (!email || !password || !verifyPassword) {
                setError("All fields are required.");
                setSnackbarVisible(true);
                return;
              }
              if (password !== verifyPassword) {
                setError("Passwords do not match.");
                setSnackbarVisible(true);
                return;
              }
              try {
                await registerWithEmail(email, password);
                // Navigate or show success
              } catch (e: any) {
                setError(e.message);
                setSnackbarVisible(true);
              }
            }}
          />
        </ThemedView>
      </ScrollView>
      <Snackbar
        visible={!!error && snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: "Close",
          onPress: () => setSnackbarVisible(false),
        }}
        style={{ backgroundColor: "#d32f2f" }}
      >
        {error}
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background, // soft lavender
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "transparent",
    height: 100,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
    marginTop: 0,
  },
  title: {
    marginTop: 10,
    fontSize: 38,
    fontWeight: "900",
    color: AppColors.white,
    // marginTop: 80,
    // marginLeft: 20,
    paddingVertical: 10,
  },
  signInContainer: {
    flex: 1,
    marginTop: 40,
    padding: 20,
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    backgroundColor: AppColors.white,
    // borderWidth: 1,
    // borderColor: AppColors.primaryLight,
    padding: 20,
  },
  title2: {
    fontSize: 24,
    color: AppColors.primary,
    fontWeight: "900",
    paddingBottom: 5,
  },
  text3: {
    fontSize: 16,
    color: AppColors.primary,
  },
  textContainer2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    height: 40,
    padding: 10,
    backgroundColor: AppColors.white,
  },
});
