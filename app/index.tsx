import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonOne from "@/components/ui/ButtonOne";
import SlidingImagesSection from "@/components/ui/SlidingImagesSection";
import { AppColors } from "@/constants/colors";
import { useWindowDimensions } from "@/hooks/use-windows-dimentions";
import { signInWithGoogleAsync } from "@/services/googleAuth";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Index() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }}>
      <ThemedView style={styles.container}>
        <SlidingImagesSection
          images={[
            require("../assets/images/a woman sewing.png"),
            require("../assets/images/a woman sewing.png"),
            require("../assets/images/a woman sewing.png"),
          ]}
          imageHeight={height * 0.45}
        />
        <View style={styles.textContainer}>
          <ThemedText style={styles.text1}>
            Manage your{" "}
            <ThemedText style={styles.text1Highlight}>Tailor</ThemedText>{" "}
            business
          </ThemedText>
          <ThemedText style={styles.text2}>Seamlessly and</ThemedText>
          <ThemedText style={styles.text2}>intuitively</ThemedText>
        </View>

        <ButtonOne
          title={"Sign in with Google"}
          style={styles.googleButton}
          onPress={async () => {
            try {
              await signInWithGoogleAsync();
              // router.replace("/home");
            } catch (e: any) {
              // handle error: show snackbar, alert, or logging
              console.error("Google sign-in error:", e);
              // minimal feedback for now:
              alert(e?.message ?? "Google sign-in failed");
            }
          }}
        />
        <ButtonOne
          title={"Create an account"}
          style={styles.secondaryButton}
          onPress={() => router.push("/register")}
        />
        <View style={styles.bottomRow}>
          <ThemedText style={styles.bottomText}>
            Already have an account?{" "}
          </ThemedText>
          <TouchableOpacity
            onPress={() => {
              // Navigate to the SignIn screen;
              router.push("/signin");
            }}
          >
            <ThemedText style={styles.signInText}>Sign In</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: AppColors.background, // soft lavender
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: "100%",
  },
  textContainer: {
    // paddingHorizontal: 20,
    // alignItems: "center",
    // marginBottom: 10,
  },
  text1: {
    color: AppColors.text, // softer dark
    fontSize: 18,
    marginTop: 10,
    marginBottom: 2,
  },
  text1Highlight: {
    color: AppColors.primary, // soft blue
    fontWeight: "700",
    fontSize: 20,
  },
  text2: {
    color: AppColors.text, // softer dark
    fontSize: 32,
    fontWeight: "700",
    paddingTop: 3,
    paddingBottom: 6,
    lineHeight: 38,
  },
  googleButton: {
    backgroundColor: AppColors.accent, // soft orange background for Google button
    borderWidth: 0,
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: AppColors.border, // soft blue border
    marginTop: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
    alignItems: "center",
  },
  bottomText: {
    color: AppColors.text,
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "400",
  },
  signInText: {
    color: AppColors.primary,
    fontWeight: "900",
    fontSize: 15,
    marginLeft: 2,
  },
});
