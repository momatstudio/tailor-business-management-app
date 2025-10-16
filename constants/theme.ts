/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";
import { AppColors } from "./colors";

const tintColorLight = AppColors.primary; // soft blue
const tintColorDark = AppColors.white; // white

export const Colors = {
  light: {
    text: AppColors.text, // softer dark
    background: AppColors.background, // soft lavender
    tint: tintColorLight,
    icon: AppColors.primaryLight, // soft blue
    tabIconDefault: "#A3A3B3",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: AppColors.dark, // dark
    tint: tintColorDark,
    icon: AppColors.primaryLight,
    tabIconDefault: "#A3A3B3",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "Poppins",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "Poppins",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "Poppins",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "Poppins",
  },
  default: {
    sans: "Poppins",
    serif: "Poppins",
    rounded: "Poppins",
    mono: "Poppins",
  },
  web: {
    sans: "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "'Poppins', Georgia, 'Times New Roman', serif",
    rounded:
      "'Poppins', 'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "'Poppins', SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
