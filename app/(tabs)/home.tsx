import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const dp = require("../../assets/images/dp.png");
const anxious = require("../../assets/images/sentiment_worried.png");
const stressed = require("../../assets/images/stressed.png");
const excited = require("../../assets/images/excited.png");
const sad = require("../../assets/images/sad.png");
const others = require("../../assets/images/others.png");
const bell = require("../../assets/images/bell.png");
const calmness = require("../../assets/images/calmness.png");
const meditation = require("../../assets/images/meditation.jpeg");
const articles = require("../../assets/images/articles.jpeg");
const consultations = require("../../assets/images/consultations.jpeg");
const thinking = require("../../assets/images/thinking.jpeg");
const listening = require("../../assets/images/listening.jpeg");

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <ScrollView>
        <View className="flex-row items-center justify-between pt-4">
          <View className="flex-row items-center">
            <Image source={dp} className="w-12 h-12 rounded-full" />
            <Text className="text-xl font-semibold p-4">Hello Max</Text>
          </View>
          {/* <FontAwesome name="bell" size={24} color="black" /> */}
          <Image source={bell} className="w-6 h-6" />
        </View>

        <View>
          <Text className="text-xl font-medium my-4">
            How are you feeling today ?
          </Text>
          <View className="flex-row items-center justify-between">
            <View>
              <TouchableOpacity className="rounded-lg p-2 bg-[#E8EEFF]">
                <Image source={anxious} className="w-8 h-8" />
              </TouchableOpacity>
              <Text className="text-center">Anxious</Text>
            </View>
            <View>
              <TouchableOpacity className="rounded-lg p-2 bg-[#E8EEFF]">
                <Image source={stressed} className="w-8 h-8" />
              </TouchableOpacity>
              <Text className="text-center">Stressed</Text>
            </View>
            <View>
              <TouchableOpacity className="rounded-lg p-2 bg-[#E8EEFF]">
                <Image source={excited} className="w-8 h-8" />
              </TouchableOpacity>
              <Text className="text-center">Excited</Text>
            </View>
            <View>
              <TouchableOpacity className="rounded-lg p-2 bg-[#E8EEFF]">
                <Image source={sad} className="w-8 h-8" />
              </TouchableOpacity>
              <Text className="text-center">Sad</Text>
            </View>
            <View>
              <TouchableOpacity className="rounded-lg p-2 bg-[#E8EEFF]">
                {/* <Image source={others} className="w-8 h-8" /> */}
                <Text className="w-8 h-8 text-3xl text-bold text-[#4577FF] text-center ">
                  ...
                </Text>
              </TouchableOpacity>
              <Text className="text-center">Others</Text>
            </View>
          </View>
        </View>

        <View className="bg-[#E8EEFF] p-4 rounded-xl my-8 flex-row justify-between">
          <View className="flex-1">
            <Text className="text-xl font-semibold text-[#001F73]">
              Track your Mental Health
            </Text>
            <Text className="text-base text-[#012A9B] my-2">
              Start your journey towards Peace, Joy and Gladness
            </Text>
            <TouchableOpacity className="flex-row items-center ">
              <Text className="text-xl pr-2 text-[#4577FF] text-semibold">
                Start Now
              </Text>
              <FontAwesome name="snowflake-o" size={18} color="#4577FF" />
            </TouchableOpacity>
          </View>
          <View className="flex-1">
            <Image source={calmness} className="w-full h-40" />
          </View>
        </View>

        <View className="flex-row justify-around">
          <View>
            <TouchableOpacity className="">
              <Image source={meditation} className="w-20 h-20 rounded-lg" />
            </TouchableOpacity>
            <Text className="text-center">Meditation</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={articles} className="w-20 h-20 rounded-lg" />
            </TouchableOpacity>
            <Text className="text-center">Articles</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={consultations} className="w-20 h-20 rounded-lg" />
            </TouchableOpacity>
            <Text className="text-center">Consultations</Text>
          </View>
        </View>

        <View>
          <Text className="text-xl font-semibold my-4">Quick Access</Text>
          <View className="flex-row items-center justify-between">
            <View className="w-[48%]">
              <TouchableOpacity className="rounded-lg">
                <Image source={thinking} className="w-full h-36 rounded-lg" />
              </TouchableOpacity>
              <Text className="text-center">Thinking</Text>
            </View>
            <View className="w-[48%]">
              <TouchableOpacity>
                <Image source={listening} className="w-full h-36 rounded-lg" />
              </TouchableOpacity>
              <Text className="text-center">Listening</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
