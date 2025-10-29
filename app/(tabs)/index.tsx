import Banner from "@/components/Banner";
import CardContainer from "@/components/CardContainer";
import Header from "@/components/Header";
import OrdersStatusTracking from "@/components/OrdersStatusTracking";
import { appInfo, bannerInfo } from "@/constants/data";
import { useAuth } from "@/hooks/context/useAuth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [cardData, setCardData] = useState([
    {
      icon: "users",
      title: "Customers",
      number: 5,
    },
    {
      icon: "shopping-bag",
      title: "Orders",
      number: 12,
    },
    {
      icon: "dollar-sign",
      title: "Revenue",
      number: "R3400",
    },
    {
      icon: "box",
      title: "Pending Dues",
      number: 24,
    },
  ]);

  return (
    <SafeAreaView>
      <Header title={appInfo.name} description={appInfo.description} />
      <ScrollView>
        {bannerInfo.dashboard !== null && (
          <Banner
            welcomeMessage={bannerInfo.dashboard.welcomeMessage}
            dailyUpdate={bannerInfo.dashboard.dailyUpdate}
          />
        )}
        <CardContainer data={cardData} />
        <OrdersStatusTracking
          orders={[
            {
              name: "Mohau Matthews",
              apparelType: "Suit",
              status: "in progress",
            },
            {
              name: "Sarah Johnson",
              apparelType: "Dress",
              status: "completed",
            },
            { name: "David Smith", apparelType: "Shirt", status: "pending" },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
