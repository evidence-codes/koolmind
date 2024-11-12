import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CalmHeader() {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between pt-4">
      <FontAwesome
        name="chevron-left"
        size={20}
        color="black"
        onPress={() => router.back()}
      />
      <View className="flex-1 items-center">
        <Text className="text-xl">Calm Tools</Text>
      </View>
      <View style={{ width: 20 }} />
    </View>
  );
}
