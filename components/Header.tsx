import { AppColors } from "@/constants/colors";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")}
        style={{ width: 60, height: 60 }}
      />
      <ThemedView style={styles.textContainer}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.text2}>{description}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: AppColors.white,
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    marginLeft: 5,
    backgroundColor: AppColors.white,
  },
  title: {
    color: AppColors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    color: AppColors.grey,
    fontSize: 14,
  },
});
