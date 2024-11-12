import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface PlaylistsProps {
  image: any;
  title: string;
  description: string;
}

export default function Playlists({
  image,
  title,
  description,
}: PlaylistsProps) {
  return (
    <View className="w-[48%] my-1 bg-[#E8EEFF] rounded-lg">
      <TouchableOpacity className="rounded-lg">
        <Image source={image} className="w-full h-24 rounded-lg" />
      </TouchableOpacity>
      <Text className="p-2 text-base font-medium">{title}</Text>
      <Text className="px-2 pb-2 text-[#4C4C4C]">{description}</Text>
    </View>
  );
}
