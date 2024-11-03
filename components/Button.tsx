import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: string;
}

const PrimaryButton = ({ title, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full bg-[#4577FF] rounded-xl justify-center items-center mt-8 p-3 ${style}`}
    >
      <Text className="text-white text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
