import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Dialog,
  Divider,
  IconButton,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

export default function CustomerScreen() {
  const theme = useTheme();

  const [customer, setCustomer] = useState({
    name: "Lerato Mokoena",
    phone: "0781234567",
    email: "lerato.mokoena@example.com",
    address: "123 Church Street, Polokwane",
    gender: "female",
    notes: "Prefers African print designs.",
    measurements: {
      neck: 35,
      chest: 90,
      waist: 70,
      hips: 95,
      arm_length: 60,
      inseam: 80,
    },
  });

  const [editCustomerVisible, setEditCustomerVisible] = useState(false);
  const [editMeasurementsVisible, setEditMeasurementsVisible] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(customer);
  const [editedMeasurements, setEditedMeasurements] = useState(
    customer.measurements
  );

  const handleSaveCustomer = () => {
    setCustomer({ ...customer, ...editedCustomer });
    setEditCustomerVisible(false);
  };

  const handleSaveMeasurements = () => {
    setCustomer({ ...customer, measurements: editedMeasurements });
    setEditMeasurementsVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar.Text
          size={72}
          label={customer.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 12 }}>
          <Text variant="headlineMedium" style={styles.name}>
            {customer.name}
          </Text>
          <Text variant="bodyMedium" style={styles.email}>
            {customer.email}
          </Text>
          <Text variant="bodySmall" style={styles.phone}>
            {customer.phone}
          </Text>
        </View>
      </View>

      {/* Customer Info Card */}
      <Card style={styles.card}>
        <Card.Title
          title="Customer Details"
          titleStyle={styles.cardTitle}
          right={(props) => (
            <IconButton
              {...props}
              icon="pencil-outline"
              onPress={() => setEditCustomerVisible(true)}
            />
          )}
        />
        <Card.Content>
          <InfoRow label="Address" value={customer.address} />
          <Divider style={styles.divider} />
          <InfoRow label="Gender" value={capitalize(customer.gender)} />
          <Divider style={styles.divider} />
          <InfoRow label="Notes" value={customer.notes} />
        </Card.Content>
      </Card>

      {/* Measurements Card */}
      <Card style={styles.card}>
        <Card.Title
          title="Measurements"
          titleStyle={styles.cardTitle}
          right={(props) => (
            <IconButton
              {...props}
              icon="pencil-outline"
              onPress={() => setEditMeasurementsVisible(true)}
            />
          )}
        />
        <Card.Content>
          {Object.entries(customer.measurements).map(([key, value], index) => (
            <View key={key}>
              <InfoRow label={formatLabel(key)} value={`${value} cm`} />
              {index !== Object.entries(customer.measurements).length - 1 && (
                <Divider style={styles.divider} />
              )}
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Edit Customer Dialog */}
      <Portal>
        <Dialog
          visible={editCustomerVisible}
          onDismiss={() => setEditCustomerVisible(false)}
          style={styles.dialog}
        >
          <Dialog.Title>Edit Customer</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView style={{ paddingHorizontal: 16 }}>
              {Object.keys(customer)
                .filter((key) => key !== "measurements")
                .map((key) => (
                  <TextInput
                    key={key}
                    label={capitalize(key)}
                    mode="outlined"
                    value={(editedCustomer as any)[key].toString()}
                    onChangeText={(text) =>
                      setEditedCustomer({ ...editedCustomer, [key]: text })
                    }
                    style={styles.input}
                  />
                ))}
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={() => setEditCustomerVisible(false)}>
              Cancel
            </Button>
            <Button mode="contained" onPress={handleSaveCustomer}>
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>

        {/* Edit Measurements Dialog */}
        <Dialog
          visible={editMeasurementsVisible}
          onDismiss={() => setEditMeasurementsVisible(false)}
          style={styles.dialog}
        >
          <Dialog.Title>Edit Measurements</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView style={{ paddingHorizontal: 16 }}>
              {Object.entries(editedMeasurements).map(([key, value]) => (
                <TextInput
                  key={key}
                  label={formatLabel(key)}
                  mode="outlined"
                  keyboardType="numeric"
                  value={value.toString()}
                  onChangeText={(text) =>
                    setEditedMeasurements({
                      ...editedMeasurements,
                      [key]: Number(text),
                    })
                  }
                  style={styles.input}
                />
              ))}
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={() => setEditMeasurementsVisible(false)}>
              Cancel
            </Button>
            <Button mode="contained" onPress={handleSaveMeasurements}>
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
}

// 🧩 Small helper component
const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <View style={styles.infoRow}>
    <Text variant="titleSmall" style={styles.infoLabel}>
      {label}
    </Text>
    <Text variant="bodyMedium" style={styles.infoValue}>
      {value}
    </Text>
  </View>
);

// 🔤 Helper functions
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function formatLabel(str: string) {
  return str.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  avatar: {
    backgroundColor: "#007AFF",
  },
  name: {
    fontWeight: "700",
    color: "#222",
  },
  email: {
    color: "#555",
  },
  phone: {
    color: "#777",
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  infoLabel: {
    color: "#555",
  },
  infoValue: {
    fontWeight: "500",
    color: "#222",
  },
  divider: {
    marginVertical: 4,
  },
  input: {
    marginBottom: 12,
  },
  dialog: {
    borderRadius: 16,
  },
});
