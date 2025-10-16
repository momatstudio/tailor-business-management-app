import { AppColors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { ThemedText } from "../themed-text";

const ButtonOne = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}) => {
  const isSecondary = style && style.backgroundColor === "transparent";
  const isGoogle = title === "Sign in with Google";
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        {
          borderRadius: 50,
          marginTop: 20,
          // marginHorizontal: 20,
        },
        style,
      ]}
    >
      {isSecondary ? (
        <ThemedText
          style={{
            fontSize: 20,
            color: AppColors.primary,
            fontFamily: "Poppins",
            fontWeight: "700",
            letterSpacing: 1,
            textAlign: "center",
            paddingVertical: 16,
          }}
        >
          {title}
        </ThemedText>
      ) : isGoogle ? (
        <LinearGradient
          colors={[AppColors.primary, AppColors.primaryLight]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 50,
            paddingVertical: 16,
            paddingHorizontal: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons
            name="google"
            size={24}
            color={AppColors.accent}
            style={{ marginRight: 10 }}
          />
          <ThemedText
            style={{
              fontSize: 20,
              color: AppColors.accent,
              fontFamily: "Poppins",
              fontWeight: "700",
              letterSpacing: 1,
            }}
          >
            {title}
          </ThemedText>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={[AppColors.primary, AppColors.primaryLight]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 50,
            paddingVertical: 16,
            paddingHorizontal: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ThemedText
            style={{
              fontSize: 20,
              color: AppColors.white,
              fontFamily: "Poppins",
              fontWeight: "700",
              letterSpacing: 1,
            }}
          >
            {title}
          </ThemedText>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default ButtonOne;
