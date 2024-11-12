import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text } from "react-native";
import PrimaryButton from "@/components/global/Button";
import { useRouter } from "expo-router";

const logo = require("../../assets/images/logo.png");

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="flex-1 items-center justify-center">
        <Image
          source={logo}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />

        <View>
          <Text className="text-2xl font-semibold text-center my-4">
            Discover & Personalize
          </Text>
          <Text className="text-center text-2xl ">
            Take a Quick Test to tailor a personalized plan just for you!
          </Text>
        </View>

        <View className="my-10 w-full">
          <PrimaryButton
            title="Let's Do It"
            onPress={() => {
              router.push("/(tabs)/home");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
