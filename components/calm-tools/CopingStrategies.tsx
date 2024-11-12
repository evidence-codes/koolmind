import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CopingStrategiesProps {
  title: string;
  description: string;
}

export default function CopingStrategies({
  title,
  description,
}: CopingStrategiesProps) {
  return (
    <View className="my-1">
      <View className="rounded-2xl pl-2 bg-[#4577FF]">
        <View className="rounded-2xl py-2 px-4 bg-[#E8EEFF]">
          <Text className="text-xl font-medium text-[#001F73]">{title}</Text>
          <Text className="text-lg py-4">{description}</Text>
          <View className="flex-row items-center">
            <View className="flex-row items-center">
              <FontAwesome name="clock-o" size={24} color="#001F73" />
              <Text className="px-2 text-medium text-lg text-[#001F73]">
                5 mins
              </Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome name="heart-o" size={24} color="#001F73" />
              <Text className="px-2 text-medium text-lg text-[#001F73]">
                Save
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
