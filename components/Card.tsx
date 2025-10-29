import { AppColors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

interface CardProps {
  icon: any;
  title: string;
  number: string | number;
}
const Card = ({ icon, title, number }: CardProps) => {
  const colorsHandler = () => {
    switch (title) {
      case "Customers":
        return {
          bgColor: AppColors.iconColors.lightBlue,
          iconColor: AppColors.iconColors.linkedin,
        };
      case "Orders":
        return {
          bgColor: AppColors.iconColors.lightPurple,
          iconColor: AppColors.iconColors.purple,
        };
      case "Revenue":
        return {
          bgColor: AppColors.iconColors.lightGreen,
          iconColor: AppColors.iconColors.green,
        };
      case "Pending Dues":
        return {
          bgColor: AppColors.iconColors.lightOrangle,
          iconColor: AppColors.iconColors.orangle,
        };
      default:
        return {
          bgColor: AppColors.iconColors.lightPurple,
          iconColor: AppColors.iconColors.purple,
        };
    }
  };
  return (
    <ThemedView style={styles.card}>
      <ThemedView
        style={[
          styles.imageContainer,
          { backgroundColor: colorsHandler()?.bgColor },
        ]}
      >
        <Feather size={24} name={icon} color={colorsHandler()?.iconColor} />
      </ThemedView>
      <ThemedView style={styles.infoContainer}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.number}>{number}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.white,
    padding: 15,
    height: 120,
    borderRadius: 12,
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
  },
  imageContainer: {
    padding: 6,
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  infoContainer: {
    backgroundColor: "transparent",
  },
  title: {},
  number: {},
});
