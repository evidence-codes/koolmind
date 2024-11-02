import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold text-3xl">SignUpScreen</Text>
      </View>
    </SafeAreaView>
  );
}
