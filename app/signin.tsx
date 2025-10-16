import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonOne from "@/components/ui/ButtonOne";
import CustomInputText from "@/components/ui/customInputText";
import { AppColors } from "@/constants/colors";
import { useWindowDimensions } from "@/hooks/use-windows-dimentions";
import { loginWithEmail } from "@/services/authService";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const { width, height } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={AppColors.text}
            style={{ marginLeft: 20, marginTop: 20 }}
          />
        </TouchableOpacity>
        <ThemedText style={styles.title}>Sign In</ThemedText>
      </ThemedView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: 120 }}
        keyboardShouldPersistTaps="handled"
      >
        <ThemedView style={styles.signInContainer}>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.title2}>Welcome Back</ThemedText>
            <ThemedText style={styles.text3}>
              Hello there. Sign In to continue.
            </ThemedText>
          </ThemedView>
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
          <ThemedView style={styles.textContainer2}>
            <ThemedText>Forgot password? </ThemedText>
            <TouchableOpacity onPress={() => router.push("/reset")}>
              <ThemedText
                style={{ color: AppColors.primary, fontWeight: "600" }}
              >
                Reset
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
          <ButtonOne
            title={"Sign In"}
            style={{}}
            onPress={async () => {
              setError(null);
              if (!email || !password) {
                setError("Email and password are required.");
                setSnackbarVisible(true);
                return;
              }
              try {
                await loginWithEmail(email, password);
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
  header: {},
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: AppColors.white,
    marginTop: 80,
    marginLeft: 20,
    paddingVertical: 10,
  },
  signInContainer: {
    flex: 1,
    marginTop: 40,
    // marginHorizontal: 20,
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
