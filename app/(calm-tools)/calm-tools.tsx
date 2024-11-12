import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import CalmHeader from "@/components/calm-tools/header";
import CopingStrategies from "@/components/calm-tools/CopingStrategies";
import Resources from "@/components/calm-tools/Resources";
import Playlists from "@/components/calm-tools/Playlists";

interface Strategy {
  title: string;
  description: string;
}

interface Resource extends Strategy {
  image: any;
}

interface Playlist extends Strategy {
  image: any;
}

export default function CalmTools() {
  const { strategies, resourcesData, playlistsData } = useLocalSearchParams();

  // Parse the JSON strings back into arrays
  const parsedStrategies = JSON.parse((strategies || "[]").toString());
  const parsedResourcesData = JSON.parse((resourcesData || "[]").toString());
  const parsedPlaylistsData = JSON.parse((playlistsData || "[]").toString());

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CalmHeader />

        <View className="py-2">
          <Text className="text-lg font-medium">Recommended</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium">Try Now</Text>
          <Text className="text-base font-medium text-[#4577FF]">See All</Text>
        </View>

        <View className="my-2">
          {parsedStrategies.map((strategy: Strategy, index: number) => (
            <CopingStrategies
              key={index}
              title={strategy.title}
              description={strategy.description}
            />
          ))}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium">Resources</Text>
          <Text className="text-base font-medium text-[#4577FF]">See All</Text>
        </View>

        <View className="my-2 flex-row flex-wrap items-center justify-between">
          {parsedResourcesData.map((resource: Resource, index: number) => (
            <Resources
              key={index}
              image={resource.image}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium">Playlists</Text>
          <Text className="text-base font-medium text-[#4577FF]">See All</Text>
        </View>

        <View className="my-2 flex-row flex-wrap items-center justify-between">
          {parsedPlaylistsData.map((playlist: Playlist, index: number) => (
            <Playlists
              key={index}
              image={playlist.image}
              title={playlist.title}
              description={playlist.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
