import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonOne from "@/components/ui/ButtonOne";
import CustomInputText from "@/components/ui/customInputText";
import { AppColors } from "@/constants/colors";
import { useWindowDimensions } from "@/hooks/use-windows-dimentions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Reset() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }}>
      <ThemedView style={styles.container}>
        <ThemedView>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={AppColors.text}
              style={{ marginLeft: 20, marginTop: 20 }}
            />
          </TouchableOpacity>
          <ThemedText style={styles.title}>Reset Password</ThemedText>
        </ThemedView>
        <ThemedView style={styles.signInContainer}>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.title2}>
              Enter your Email address
            </ThemedText>
            <ThemedText style={styles.text3}>
              You will receive an email with instructions to reset your
              password.
            </ThemedText>
          </ThemedView>
          <CustomInputText placeholder="e.g abc@mail.co.za" label="Email" />
          <ThemedView style={styles.textContainer2}>
            <ThemedText>Remember your password? </ThemedText>
            <TouchableOpacity onPress={() => router.push("/signin")}>
              <ThemedText
                style={{ color: AppColors.primary, fontWeight: "600" }}
              >
                Sign In
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
          <ButtonOne
            title={"Reset Password"}
            style={{}}
            onPress={() => {
              router.push("/(tabs)");
            }}
          />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

export default Reset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background, // soft lavender
  },
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
