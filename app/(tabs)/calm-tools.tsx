import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/global/Button";
import { ScrollView } from "react-native";
import CalmHeader from "@/components/calm-tools/header";

const anxious = require("../../assets/images/sentiment_worried.png");
const stressed = require("../../assets/images/stressed.png");
const excited = require("../../assets/images/excited.png");
const sad = require("../../assets/images/sad.png");

const strategies: {
  [feeling: string]: { title: string; description: string }[];
} = {
  anxious: [
    {
      title: "Square Breathing",
      description: "Meditation helps reduce stress and improve focus",
    },
    {
      title: "Safe Space Visualization",
      description:
        "Create a mental safe space to retreat to when feeling overwhelmed",
    },
  ],
  stressed: [
    {
      title: "Stress Relief Breathing",
      description: "Quick breathing exercises to lower stress levels",
    },
    {
      title: "Guided Relaxation",
      description: "Ease tension through progressive muscle relaxation",
    },
  ],
  excited: [
    {
      title: "Exercised Breathing",
      description: "Get your energy flowing with this quick breathing exercise",
    },
    {
      title: "Power Visualization",
      description:
        "Create a space to boost your confidence with a visualization that puts you in control",
    },
  ],
  sad: [
    {
      title: "Calm Breathing",
      description:
        "A gentle guide to help you ease sadness through deep calming breaths",
    },
    {
      title: "Comforting Visualization",
      description:
        "Create a peaceful mental space to find comfort and solace when you are feeling down",
    },
  ],
};

const resourcesData: {
  [feeling: string]: { image: any; title: string; description: string }[];
} = {
  anxious: [
    {
      image: require("../../assets/images/burnout.png"),
      title: "Managing Study Pressure",
      description: "Learn how to manage academic workload...",
    },
    {
      image: require("../../assets/images/social-anxiety.jpeg"),
      title: "Overcoming Social Anxiety",
      description: "Tips for navigating social pressures and...",
    },
    {
      image: require("../../assets/images/anxiety-3.jpeg"),
      title: "Social Anxiety and University Life",
      description: "3:03",
    },
    {
      image: require("../../assets/images/pressure.jpeg"),
      title: "Managing Academic Pressure",
      description: "2:00",
    },
  ],
  stressed: [
    {
      image: require("../../assets/images/burnout.png"),
      title: "Managing Deadlines",
      description: "Effective strategies to stay on top of your academic tasks",
    },
    {
      image: require("../../assets/images/burnout.png"),
      title: "Dealing with Burnout",
      description: "How to recharge and recover from academic burnout",
    },
  ],
  excited: [
    {
      image: require("../../assets/images/inner-fire.png"),
      title: "Unleashing Your Inner Fire",
      description: "Discover tips to channel excitement and stay motivated...",
    },
    {
      image: require("../../assets/images/party.png"),
      title: "Balancing Social Awesomeness",
      description:
        "Master the art of being the life of the party and handling social buzz...",
    },
    {
      image: require("../../assets/images/concert.png"),
      title: "Navigating High-Energy situations",
      description: "3:45",
    },
    {
      image: require("../../assets/images/cheering.png"),
      title: "The Thrill Of Achieving Goals",
      description: "3:09",
    },
  ],
  sad: [
    {
      image: require("../../assets/images/emotions.png"),
      title: "Coping With Overwhelming Emotions",
      description:
        "Find ways to manage feelings of sadness and emotional fatigue...",
    },
    {
      image: require("../../assets/images/lonely-road.png"),
      title: "Understanding Loneliness",
      description:
        "Explore ways to cope with feelings of sadness and isolation...",
    },
    {
      image: require("../../assets/images/serene.png"),
      title: "Finding Strength In Stillness",
      description: "3:45",
    },
    {
      image: require("../../assets/images/natural-scene.png"),
      title: "Handling Life’s Heavy Moments",
      description: "3:02",
    },
  ],
};

const playlistsData: {
  [feeling: string]: { image: any; title: string; description: string }[];
} = {
  anxious: [
    {
      image: require("../../assets/images/calm-sea.png"),
      title: "Study Music",
      description:
        "A playlist to help you stay focused and calm while studying",
    },
    {
      image: require("../../assets/images/meadow.png"),
      title: "Sleep Sounds",
      description: "Gentle rain to ease you into restful sleep.",
    },
  ],
  stressed: [
    {
      image: require("../../assets/images/calm-sea.png"),
      title: "Chill Study Vibes",
      description: "Calm tunes to reduce stress",
    },
    {
      image: require("../../assets/images/meadow.png"),
      title: "Soft Ocean Waves",
      description: "Soothing ocean sounds to help you unwind.",
    },
  ],
  excited: [
    {
      image: require("../../assets/images/outdoor.png"),
      title: "Upbeat Work/Study Beat",
      description:
        "A playlist to keep your energy high while you work or study.",
    },
    {
      image: require("../../assets/images/festival.png"),
      title: "Party Sounds",
      description:
        "Pumping beats to fuel your excitement and keep you motivated.",
    },
  ],
  sad: [
    {
      image: require("../../assets/images/mist.png"),
      title: "Soothing Melodies",
      description:
        "A playlist of gentle, comforting music to help ease sadness.",
    },
    {
      image: require("../../assets/images/raindrops.png"),
      title: "Rainfall & Soft Sounds",
      description:
        "Gentle rain and soft sounds to help soothe the mind and body.",
    },
  ],
};

export default function CalmToolsScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState("anxious"); // Default feeling

  const handleSubmit = () => {
    setModalVisible(true);
    setLoadingComplete(false);

    // Simulate loading for 5 seconds
    setTimeout(() => {
      setLoadingComplete(true);

      // Show checkmark for 1 second before navigating
      setTimeout(() => {
        setModalVisible(false);
        router.push({
          pathname: "/(calm-tools)/calm-tools",
          params: {
            strategies: JSON.stringify(strategies[selectedFeeling]),
            resourcesData: JSON.stringify(resourcesData[selectedFeeling]), // Use selected feeling
            playlistsData: JSON.stringify(playlistsData[selectedFeeling]),
          },
        });
      }, 1000);
    }, 5000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CalmHeader />

        <View className="my-2">
          <Text className="text-xl font-semibold my-4">Start Assessment</Text>
          <Text className="text-xl font-medium">
            Assessments help us determine the state of your mind so that we can
            suggest helpful coping strategies
          </Text>
        </View>

        <View className="my-2">
          <Text className="text-xl font-medium my-4">
            How are you feeling today?
          </Text>
          <View className="flex-row items-center justify-between">
            {/* Feelings buttons */}
            {[
              { src: anxious, label: "Anxious" },
              { src: stressed, label: "Stressed" },
              { src: excited, label: "Excited" },
              { src: sad, label: "Sad" },
            ].map(({ src, label }) => (
              <View key={label} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  className={`rounded-lg p-2 ${
                    selectedFeeling === label.toLowerCase()
                      ? "bg-[#D1E7FF] border border-[#4577FF]"
                      : "bg-[#E8EEFF]"
                  }`}
                  onPress={() => setSelectedFeeling(label.toLowerCase())} // Update selected feeling
                >
                  <Image source={src} className="w-8 h-8" />
                </TouchableOpacity>
                <Text className="text-center">{label}</Text>
              </View>
            ))}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity className="rounded-lg p-2 bg-[#E8EEFF]">
                <Text className="w-8 h-8 text-3xl text-bold text-[#4577FF] text-center">
                  ...
                </Text>
              </TouchableOpacity>
              <Text className="text-center">Others</Text>
            </View>
          </View>
        </View>

        <View className="my-2">
          <Text className="text-xl font-medium my-4">
            Why do you feel this way?
          </Text>
          <TextInput
            className="border border-gray-300 h-40 rounded-xl p-2"
            placeholder="Feel free to tell us more about how you feel, you could add a why..."
            textAlignVertical="top"
            multiline={true}
          />
          <PrimaryButton title="Submit" onPress={handleSubmit} />
        </View>

        {/* Modal for loading and completion */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            className="flex-1 justify-center items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <View className="bg-white p-6 rounded-lg items-center">
              {loadingComplete ? (
                <>
                  <FontAwesome name="check-circle" size={200} color="#4577FF" />
                  <Text className="text-lg font-semibold mt-4">
                    Analysis Complete
                  </Text>
                </>
              ) : (
                <>
                  <View className="relative">
                    <ActivityIndicator size={200} color="#4577FF" />
                  </View>
                  <Text className="text-lg font-semibold mt-4 text-center">
                    Therabot is generating Calm Tools tailored to you. Please
                    hold on
                  </Text>
                </>
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
