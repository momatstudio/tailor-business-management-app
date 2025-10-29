import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { StyleSheet } from "react-native";

const Menu = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>my account, my services</ThemedText>
    </ThemedView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
