import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { ThemedView } from "@/components/themed-view";
import FloatingAddButton from "@/components/ui/FloatingAddButton";
import { AppColors } from "@/constants/colors";
import { appInfo, bannerInfo } from "@/constants/data";
import { useAuth } from "@/hooks/context/useAuth";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomerScreen() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={appInfo.name} description={appInfo.description} />
      <ScrollView>
        {bannerInfo !== null && (
          <Banner
            welcomeMessage={bannerInfo.customer.welcomeMessage}
            dailyUpdate={bannerInfo.customer.dailyUpdate}
          />
        )}
        {/* Search */}
        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 3,
            paddingHorizontal: 10,
            marginHorizontal: 10,

            borderRadius: 40,
            shadowColor: AppColors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            justifyContent: "center",
            backgroundColor: AppColors.white,
          }}
        >
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search by name or phone number"
            style={{
              flex: 1,
              marginLeft: 10,
              height: 40,
              backgroundColor: "transparent",
              fontSize: 16,
              borderRadius: 40,
              borderWidth: 0,
            }}
          />
        </ThemedView>
      </ScrollView>
      <FloatingAddButton onPress={() => {}} />
    </SafeAreaView>
  );
}
