import { AppColors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

interface OrderProps {
  name: string;
  apparelType: string;
  status: "completed" | "in progress" | "pending";
}
interface OrdersStatusTrackingProps {
  orders: OrderProps[];
}

const OrdersStatusTracking = ({ orders }: OrdersStatusTrackingProps) => {
  const statusColorHandler = (status: string) => {
    switch (status) {
      case "completed":
        return { bgColor: "#e6f4ea", textColor: "#34a853" };
      case "in progress":
        return { bgColor: "#fff4e5", textColor: "#fbbc04" };
      case "pending":
        return { bgColor: "#fce8e6", textColor: "#ea4335" };
      default:
        return { bgColor: "#e6f4ea", textColor: "#34a853" };
    }
  };
  return (
    <ThemedView style={styles.constainer}>
      <ThemedView style={styles.textView1}>
        <ThemedText style={styles.text1}>Recent Orders</ThemedText>
        <TouchableOpacity>
          <ThemedView style={styles.textView2}>
            <ThemedText style={styles.text2}>View All</ThemedText>
            <Feather name="chevron-right" size={16} color={AppColors.primary} />
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

      {orders.map((item, index) => (
        <TouchableOpacity>
          <ThemedView style={[styles.textView1, styles.child]} key={index}>
            <ThemedView style={{ backgroundColor: "transparent" }}>
              <ThemedText style={styles.text3}>{item.name}</ThemedText>
              <ThemedText style={styles.text4}>{item.apparelType}</ThemedText>
            </ThemedView>
            <ThemedView
              style={[
                styles.textView3,
                {
                  backgroundColor: statusColorHandler(item.status).bgColor,
                },
              ]}
            >
              <ThemedText
                style={{
                  fontSize: 12,
                  color: statusColorHandler(item.status).textColor,
                }}
              >
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
};

export default OrdersStatusTracking;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: AppColors.white,
    padding: 15,
    borderRadius: 12,
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 12,
    marginVertical: 6,
    marginBottom: 40,
  },
  textView1: {
    flexDirection: "row",
    backgroundColor: AppColors.white,
  },
  child: {
    justifyContent: "space-between",
    marginTop: 10,
    borderWidth: 1,
    borderColor: AppColors.lightGrey,
    padding: 10,
    borderRadius: 8,
  },
  text1: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: AppColors.dark,
  },
  textView2: {
    backgroundColor: AppColors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  text2: {
    fontSize: 14,
  },
  text3: {
    fontSize: 16,
    fontWeight: "500",
    color: AppColors.dark,
  },
  text4: {
    fontSize: 14,
    color: AppColors.grey,
  },
  textView3: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    height: 28,
  },
});
