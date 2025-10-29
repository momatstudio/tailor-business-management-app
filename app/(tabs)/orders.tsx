import Banner from "@/components/Banner";
import Header from "@/components/Header";
import FloatingAddButton from "@/components/ui/FloatingAddButton";
import { appInfo, bannerInfo } from "@/constants/data";
import { useAuth } from "@/hooks/context/useAuth";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrdersScreen() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={appInfo.name} description={appInfo.description} />
      <ScrollView>
        {bannerInfo.orders !== null && (
          <Banner
            welcomeMessage={bannerInfo.orders.welcomeMessage}
            dailyUpdate={bannerInfo.orders.dailyUpdate}
          />
        )}
      </ScrollView>
      <FloatingAddButton onPress={() => {}} />
    </SafeAreaView>
  );
}
