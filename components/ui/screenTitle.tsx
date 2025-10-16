import { AppColors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

interface ScreenTitleProps {
  title: string;
}
const ScreenTitle = ({ title }: ScreenTitleProps) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color={AppColors.text} />
      </TouchableOpacity>
      <ThemedText style={styles.title}>{title}</ThemedText>
    </ThemedView>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
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
});
