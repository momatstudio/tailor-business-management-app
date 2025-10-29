import { AppColors } from "@/constants/colors";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

export interface CustomInputTextProps {
  placeholder: string;
  label: string;
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  isPassword?: boolean;
}
const CustomInputText = ({
  placeholder,
  label,
  value,
  onChangeText,
  isPassword,
}: CustomInputTextProps) => {
  const [keyboardActive, setKeyboardActive] = React.useState(false);
  return (
    <ThemedView
      style={[
        styles.inputView,
        {
          backgroundColor: keyboardActive
            ? AppColors.background
            : AppColors.lightGrey,
        },
      ]}
    >
      <ThemedText style={styles.label}>{label}</ThemedText>
      {isPassword === false ? (
        <TextInput
          placeholder={placeholder}
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => setKeyboardActive(false)}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => setKeyboardActive(false)}
          value={value}
          onChangeText={onChangeText}
          // secureTextEntry
        />
      )}
    </ThemedView>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  inputView: {
    // height: 55,
    borderRadius: 50,
    marginTop: 20,
    paddingHorizontal: 20,
    // paddingVertical: 1,

    // justifyContent: "center",
  },
  label: {
    fontSize: 16,
    color: AppColors.primary,
    paddingTop: 5,
  },
  inputText: { fontSize: 16, color: AppColors.primary },
});
