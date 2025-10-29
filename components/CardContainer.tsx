import { FlatList, StyleSheet } from "react-native";
import Card from "./Card";
import { ThemedView } from "./themed-view";

interface dataProps {
  data: {
    icon: any;
    title: string;
    number: number | string;
  }[];
}
const CardContainer = ({ data }: dataProps) => {
  return (
    <ThemedView style={styles.cards}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <ThemedView style={styles.cardWrapper} key={index}>
            <Card icon={item.icon} title={item.title} number={item.number} />
          </ThemedView>
        )}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        numColumns={2}
      />
    </ThemedView>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "transparent",
  },
  list: {
    paddingHorizontal: 5,
  },
  row: {
    justifyContent: "space-between",
  },
  cardWrapper: {
    flex: 1,
    margin: 5,
    backgroundColor: "transparent",
  },
});
