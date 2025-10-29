import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

interface BannerProps {
  welcomeMessage?: string;
  dailyUpdate?: string;
}
const Banner = ({ welcomeMessage, dailyUpdate }: BannerProps) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>{welcomeMessage}</ThemedText>
      <ThemedText style={styles.description}>{dailyUpdate}</ThemedText>
    </ThemedView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#9023DE",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    marginTop: 5,
    color: "#fff",
  },
});
